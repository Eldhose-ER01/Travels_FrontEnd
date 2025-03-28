import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { StateBlockORUnblock,findStateandDistrict,StateandDisrictDelete } from "../../../configure/admin";
export default function FindStateDistricts() {
  const [States, setStates] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalpages] = useState(0);
  const [search, setSearch] = useState("");
  const navigate=useNavigate()
const handleClick=(index)=>{
  setStates(index+1)
}

  const StatesList = async () => {
    try {
      const response = await findStateandDistrict(page, search);
      if (response.data.success) {
        setStates(response.data.statedata);
        setTotalpages(response.data.totalpages);
        setPage(response.data.page);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const bolockorunblock = async (id) => {
    try {
      const response = await StateBlockORUnblock(id);
      if (response.data.success) {
        setStates(response.data.Statesdata);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const statesdelete = async(id) => {
    try {
      const response = await StateandDisrictDelete(id);
      if (response.data.success) {
        setStates(response.data.Statedata);
      }
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    StatesList();
  }, [page, search]);

  return (
    <div>
      <div className="container mt-5 ml-32 pr-10">
        <h1 className="font-normal font-serif flex justify-center text-3xl ">
          States And Districts Lists
        </h1>
        <div className="flex justify-between mt-5">
          <div>

         
          <input
            className="h-10 w-52 ml-3 mt-5 bg-slate-200 border border-green-400 pl-1 rounded-md"
            type="text"
            name="search"
            placeholder="Search Name here.."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
           </div>
           <div className="mt-4 mr-2">
           <Link to="/admin/addstates">
  <button className="bg-black w-28 h-10 rounded-md text-green-300 font-bold hover:bg-blue-500 hover:text-white">
    Add States
  </button>
</Link>
</div>


        </div>
        
        <div className="flex flex-col ">
          <div className="overflow-x-auto">
            <div className="p-1.5 w-full inline-block align-middle">
              <div className="overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 ">
                  <thead className="bg-gray-50 ">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-800 uppercase "
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-800 uppercase "
                      >
                        States
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-800 uppercase "
                      >
                        Image
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-800 uppercase "
                      >
                        Districts
                      </th>
                      {/* <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-800 uppercase "
                      >
                        Description
                      </th> */}
                      <th
                        scope="col"
                        className="px-6 py-3  text-xs font-bold text-left text-gray-800 uppercase "
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3  text-xs font-bold text-left text-gray-800 uppercase "
                      >
                        Update
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3  text-xs font-bold text-left text-gray-800 uppercase "
                      >
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {States.length >= 0 &&
                      States.map((states, index) => {
                        return (
                          <tr key={states._id}>
                            <td className="px-6 py-4 text-sm text-left font-medium text-gray-800 whitespace-nowrap">
                              {index + 1}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 text-left whitespace-nowrap">
                              {states.statename}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 text-left whitespace-nowrap">
                            <img src={`http://localhost:3001/Images/${states.image}`} alt="" className="w-36 h-20"/> 
                            </td>
                            <td className="px-6 py-4 text-sm font-medium  text-left whitespace-nowrap">
                              <a
                                className="text-green-500 hover:text-green-700"
                                href="#"
                              >
                                {states.districtname}
                              </a>
                            </td>
                            {/* <td className="px-6 py-4 text-sm font-medium   text-left whitespace-nowrap">
                              <a
                                className="text-green-500 hover:text-green-700 w-12 h-12"
                                href="#"
                              >
                                {states.districtdesc}
                              </a>
                            </td> */}
                            <td className="px-6 py-4  text-left whitespace-nowrap">
                              {states.status ? (
                                <button
                                  type="button"
                                  className=" w-[100px] text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                                  onClick={() => {
                                    bolockorunblock(states._id);
                                  }}
                                >
                                  Block
                                </button>
                              ) : (
                                <button
                                  type="button"
                                  className=" w-[100px] mtext-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
                                  onClick={() => {
                                    bolockorunblock(states._id);
                                  }}
                                >
                                  Unblock
                                </button>
                              )}
                            </td>

                            <td className="px-6 py-4  text-left whitespace-nowrap">
                             
                             <button
                               type="button"
                               className=" w-[100px] bg-green-500 text-white hover:bg-blue-400 font-semibold rounded-lg text-sm px-5 py-2.5 text-center  me-2 mb-2"
                            onClick={()=>{
                              navigate('/admin/editstates',{
                                state:states
                              })
                            } }>
                               Edit
                             </button>
                          
                         </td>

                            <td className="px-6 py-4  text-left whitespace-nowrap">
                             
                                <button
                                  type="button"
                                  className=" w-[100px] bg-black text-white hover:bg-red-600 font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                  onClick={() => {
                                    statesdelete(states._id);
                                  }}
                                >
                                  Delete
                                </button>
                             
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
              <div className="max-w-[1600px] bg-gray-100 flex justify-center mt-3">
                {totalPages > 0 &&
                  [...Array(totalPages)].map((val, index) => (
                    <button
                      className={`${
                        page === index + 1 ? "bg-black" : "bg-black"
                      } py-2 px-4 rounded-md m-1 text-white ${
                        page === index + 1 ? "font-bold" : "font-normal"
                      } focus:outline-none focus:ring focus:ring-offset-2`}
                      key={index}
                      onClick={() => handleClick(index)}
                    >
                      {index + 1}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      )
}
