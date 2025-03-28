import React from 'react'
import UserNav from '../Usernav/UserNav'
import Footer from '../Footer/Footer';

export default function Destinations() {
    const cards = [
       
       
        {
          id: 5,
          image: "https://content.skyscnr.com/m/54fc17957e073659/original/GettyImages-100654718.jpg",
          title:"Calangute",
          description: "This is a short description for card nghfdgd udjhgdfgjgh hufddjksk dfgdfgksgsgh hdfgyqguykhjsv hfdsjskgsgkj dhsfksgs sgkgsjg 1."
        },
        {
          id: 6,
          image: "https://www.tripplannersindia.com/assets/images/postimages/North_Goa_Baga_Beach.webp",
          title:"Baga Beach",
          description: "This is a short description for card nghfdgd udjhgdfgjgh hufddjksk dfgdfgksgsgh hdfgyqguykhjsv hfdsjskgsgkj dhsfksgs sgkgsjg 1."
        },
        {
          id: 7,
          image: "https://www.shutterstock.com/image-photo/anjuna-beach-famous-tourist-destination-600nw-2473265031.jpg",
          title:"Anjuna Beach",
          description: "This is a short description for card nghfdgd udjhgdfgjgh hufddjksk dfgdfgksgsgh hdfgyqguykhjsv hfdsjskgsgkj dhsfksgs sgkgsjg 1."
        },
        {
          id: 8,
          image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/79/ce/e7/fort-aguada-candolim.jpg?w=800&h=500&s=1",
          title:"Fort Aguada",
          description: "This is a short description for card nghfdgd udjhgdfgjgh hufddjksk dfgdfgksgsgh hdfgyqguykhjsv hfdsjskgsgkj dhsfksgs sgkgsjg 1."
        }
      ];
  return (
   <>
   <UserNav/>

  {/* Cards Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 "> 
          {cards.map((card) => (
            <div key={card.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover "
              />
              <div className='text-center mt-2'>
               <h1 className='font-semibold'>{card.title}</h1> 
              </div>
              <div className="p-6">
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
   </>
  )
}
