import React, { useState } from 'react';
import UserNav from '../Usernav/UserNav';
import { FaCheck, FaTimes, FaClock, FaRupeeSign } from 'react-icons/fa';
export default function SelectDestination() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const destinations = [
    {
      id: 1,
      title: "Munnar Hill Station",
      description: "Beautiful tea gardens and cool climate",
      includes: ["Accommodation", "Breakfast", "Sightseeing"],
      excludes: ["Airfare", "Lunch/Dinner", "Personal expenses"],
      hours: 48,
      amount: 12500
    },
    {
      id: 2,
      title: "Alleppey Houseboat",
      description: "Overnight stay in traditional Kerala houseboat",
      includes: ["Houseboat stay", "All meals", "Backwater cruise"],
      excludes: ["Transportation to dock", "Alcohol", "Guide fees"],
      hours: 24,
      amount: 8500
    },
    {
      id: 3,
      title: "Kovalam Beach Resort",
      description: "Luxury beachfront accommodation with ayurvedic spa",
      includes: ["Beach view room", "Spa voucher", "Welcome drink"],
      excludes: ["Airport transfer", "Spa extras", "Water sports"],
      hours: 72,
      amount: 22000
    }
  ];
  const slides = [
    "https://www.cleartrip.com/collections/wp-content/uploads/2018/04/top-10-tourist-places-goa-header.jpg",
    "https://www.cleartrip.com/collections/wp-content/uploads/2018/04/top-10-tourist-places-goa-header.jpg",
    // "https://www.wayanad.com/files/slides/2064569462.webp"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <>
   <div>
    <UserNav />
   </div>
    <div className="w-full mt-2">
      {/* Desktop View */}
      <div className="hidden lg:flex w-full h-[500px] gap-2">
        <div className="w-[65%] h-full">
          <img 
            src={slides[0]} 
            alt="Goa destination" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-[35%] flex flex-col gap-4">
          <div className="h-[50%]">
            <img 
              src={slides[1]} 
              alt="Goa destination" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="h-[47%]">
            <img 
              src={slides[2]} 
              alt="Goa destination" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Mobile Carousel */}
      <div className="lg:hidden relative bg-white h-[300px] overflow-hidden">
        {/* Slides */}
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={slide}
                className="w-full h-[300px] object-cover"
                alt={`Destination ${index + 1}`}
              />
            </div>
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 text-3xl text-gray-700 hover:text-gray-900"
        >
          ❮
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-3xl text-gray-700 hover:text-gray-900"
        >
          ❯
        </button>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-gray-700' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center">
      <div className="w-full lg:w-2/3 p-4"> {/* 65% width on large screens, full on mobile */}
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Destinations from <span className="text-green-600">Kerala</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{destination.title}</h2>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                
                <div className="mb-4">
                  <h3 className="font-medium text-gray-700 mb-2">Includes:</h3>
                  <ul className="space-y-1">
                    {destination.includes.map((item, index) => (
                      <li key={index} className="flex items-center text-green-600">
                        <FaCheck className="mr-2" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h3 className="font-medium text-gray-700 mb-2">Not Includes:</h3>
                  <ul className="space-y-1">
                    {destination.excludes.map((item, index) => (
                      <li key={index} className="flex items-center text-red-500">
                        <FaTimes className="mr-2" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center mt-6">
                  <div className="flex items-center text-blue-600">
                    <FaClock className="mr-2" />
                    <span>{destination.hours} Hours</span>
                  </div>
                  <div className="flex items-center text-purple-700 font-bold">
                    <FaRupeeSign className="mr-1" />
                    <span>{destination.amount.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    </>
  );
}