import UserNav from '../Usernav/UserNav';
import Footer from '../Footer/Footer';

export default function Userhome() {
  // Dummy data for cards
  const cards = [
    {
      id: 1,
      image: "../../../../src/assets/Banner.jpg",
      description: "This is a short description for card nghfdgd udjhgdfgjgh hufddjksk dfgdfgksgsgh hdfgyqguykhjsv hfdsjskgsgkj dhsfksgs sgkgsjg 1."
    },
    {
      id: 2,
      image: "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg",
      description: "This is a short description for card nghfdgd udjhgdfgjgh hufddjksk dfgdfgksgsgh hdfgyqguykhjsv hfdsjskgsgkj dhsfksgs sgkgsjg 1."
    },
    {
      id: 3,
      image: "https://st.hzcdn.com/simgs/pictures/pools/natural-swimming-pool-by-the-forest-genus-loci-ecological-landscapes-inc-img~a1b1566d0f633eda_14-9300-1-02b659d.jpg",
      description: "This is a short description for card nghfdgd udjhgdfgjgh hufddjksk dfgdfgksgsgh hdfgyqguykhjsv hfdsjskgsgkj dhsfksgs sgkgsjg 1."
    },
    {
      id: 4,
      image: "../../../../src/assets/Banner.jpg",
      description: "This is a short description for card nghfdgd udjhgdfgjgh hufddjksk dfgdfgksgsgh hdfgyqguykhjsv hfdsjskgsgkj dhsfksgs sgkgsjg 1."
    },
    {
      id: 5,
      image: "https://cdn.experienceandamans.com/images/natural-rock-formation-neil-andaman.jpeg",
      description: "This is a short description for card nghfdgd udjhgdfgjgh hufddjksk dfgdfgksgsgh hdfgyqguykhjsv hfdsjskgsgkj dhsfksgs sgkgsjg 1."
    },
    {
      id: 6,
      image: "https://www.thebluekite.com/ckfinder/userfiles/images/15%20Fun%20Things%20To%20Do%20In%20Palolem%20Beach%2C%20South%20Goa%20-%20Trot_World.jpg",
      description: "This is a short description for card nghfdgd udjhgdfgjgh hufddjksk dfgdfgksgsgh hdfgyqguykhjsv hfdsjskgsgkj dhsfksgs sgkgsjg 1."
    },
    {
      id: 7,
      image: "https://images.assettype.com/english-sentinelassam/import/wp-content/uploads/2019/08/Kerala.jpg",
      description: "This is a short description for card nghfdgd udjhgdfgjgh hufddjksk dfgdfgksgsgh hdfgyqguykhjsv hfdsjskgsgkj dhsfksgs sgkgsjg 1."
    },
    {
      id: 8,
      image: "https://www.wayanad.com/files/slides/2064569462.webp",
      description: "This is a short description for card nghfdgd udjhgdfgjgh hufddjksk dfgdfgksgsgh hdfgyqguykhjsv hfdsjskgsgkj dhsfksgs sgkgsjg 1."
    }
  ];

  return (
    <>
      <UserNav />
  
      {/* Banner Section */}
      <div className="relative h-[45vh] sm:h-[70vh] md:h-[70vh] lg:h-screen">
        {/* Banner Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <img
            src="../../../../src/assets/pexels-pixabay-147411.jpg"
            alt="Banner"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Centered Content and Booking Button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Welcome to Our Service
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8">
            Discover the best experiences with us. Book now and enjoy exclusive offers!
          </p>
            <button className='w-52 bg-sky-400 h-12 text-black font-semibold'>
              Book Now
          </button>
        </div>
      </div>

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
              <div className="p-6">
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
}