import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Destinations, finddistrict } from "../../../configure/admin";

export default function Adddestination() {
    const [formData, setFormData] = useState({
        destination: "",
        duration: "",
        description: "",
        includes: [""],
        notIncludes: [""],
        ticketPrice: "",
        selectedImages: [],
        district: "" // Add district field to formData
    });

    const [district, setDistrict] = useState([]); // Initialize district as an empty array

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const addInclude = () => setFormData({ ...formData, includes: [...formData.includes, ""] });
    const addNotInclude = () => setFormData({ ...formData, notIncludes: [...formData.notIncludes, ""] });

    // Handle Image Upload
    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        if (files.length + formData.selectedImages.length > 3) {
            alert("You can only upload up to 3 images.");
            return;
        }
        setFormData({ ...formData, selectedImages: [...formData.selectedImages, ...files] });
    };

    // Remove Image
    const removeImage = (index) => {
        setFormData({
            ...formData,
            selectedImages: formData.selectedImages.filter((_, i) => i !== index)
        });
    };

    const finddistricts = async () => {
        try {
            const response = await finddistrict();
            if (response.data.success) {
                setDistrict(response.data.datas);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        finddistricts();
    }, []);

    const formdatas=formData
    
    const handleSubmit = async (e) => {
        console.log("hiii");
        
        e.preventDefault();

       
    
    
      

        try {
            const formDataToSend = new FormData();
            formDataToSend.append("data", JSON.stringify(formdatas));
            
           
            // Append images
            formdatas.selectedImages.forEach((image) => {
                formDataToSend.append("selectedImages", image);
            });
            console.log(formDataToSend,"formDataToSend");
            const response = await Destinations(formDataToSend);
            if (response.data.success) {
                toast.success("Values Submitted");
                setFormData({
                    destination: "",
                    duration: "",
                    description: "",
                    includes: [""],
                    notIncludes: [""],
                    ticketPrice: "",
                    selectedImages: [],
                    district: "" // Reset district field
                });
               
            }
        } catch (error) {
            console.log(error);
            toast.error("Submission failed");
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-12">
            <h2 className="text-2xl font-bold mb-4 text-center">Destination Adding Form</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                <input name="destination" value={formData.destination} onChange={handleChange} placeholder="Destination Name" className="w-full p-2 border rounded" required />
                <input name="duration" value={formData.duration} onChange={handleChange} placeholder="Duration Time" className="w-full p-2 border rounded" required />

                <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Place Description" className="col-span-2 w-full p-2 border rounded" required />

                <div className="col-span-2 grid grid-cols-2 gap-4">
                    <div>
                        <label className="font-semibold">What is Included</label>
                        {formData.includes.map((item, index) => (
                            <input
                                key={index}
                                value={item}
                                onChange={(e) => {
                                    const newIncludes = [...formData.includes];
                                    newIncludes[index] = e.target.value;
                                    setFormData({ ...formData, includes: newIncludes });
                                }}
                                placeholder={`Include item ${index + 1}`}
                                className="w-full p-2 border rounded my-1"
                            />
                        ))}
                        <button type="button" onClick={addInclude} className="text-blue-500">+ Add More</button>
                    </div>
                    <div>
                        <label className="font-semibold">What is Not Included</label>
                        {formData.notIncludes.map((item, index) => (
                            <input
                                key={index}
                                value={item}
                                onChange={(e) => {
                                    const newNotIncludes = [...formData.notIncludes];
                                    newNotIncludes[index] = e.target.value;
                                    setFormData({ ...formData, notIncludes: newNotIncludes });
                                }}
                                placeholder={`Not include item ${index + 1}`}
                                className="w-full p-2 border rounded my-1"
                            />
                        ))}
                        <button type="button" onClick={addNotInclude} className="text-blue-500">+ Add More</button>
                    </div>
                </div>

                {/* Full Width Ticket Price Field */}
                <div className="">
                    <label className="font-semibold block mb-1">Ticket Price</label>
                    <input
                        name="ticketPrice"
                        value={formData.ticketPrice}
                        onChange={handleChange}
                        type="number"
                        placeholder="Enter Ticket Price"
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div>
                    <label className="font-semibold block mb-1">District</label>
                    <select
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    >
                        <option value="">Select District</option>
                        {district.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </select>
                </div>

                {/* Image Upload Section */}
                <div className="col-span-2">
                    <label className="font-semibold block mb-2">Upload Images (Max 3)</label>
                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        className="hidden"
                        id="imageUpload"
                        onChange={handleImageUpload}
                    />
                    <label htmlFor="imageUpload" className="block w-full p-3 text-center border-2 border-dashed border-gray-400 rounded cursor-pointer hover:bg-gray-100">
                        Click to Upload or Drag & Drop Images Here
                    </label>

                    {/* Image Preview */}
                    <div className="flex gap-2 mt-3">
                        {formData.selectedImages.map((image, index) => (
                            <div key={index} className="relative">
                                <img
                                    src={URL.createObjectURL(image)}
                                    alt="Selected"
                                    className="w-24 h-24 object-cover rounded border"
                                />
                                <button
                                    type="button"
                                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs"
                                    onClick={() => removeImage(index)}
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <button type="submit" className="col-span-2 w-full bg-blue-600 text-white p-2 rounded">Submit</button>
            </form>
        </div>
    );
}