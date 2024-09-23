import React from 'react';

const Home = () => {
  return (

    <div className=" min-h-screen bg-white flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      <div className="max-w-4xl w-full z-10 text-center mb-8">
        <h1 className="mt-12 text-4xl sm:text-6xl font-bold text-gray-700 mb-4">
          Crafting Tomorrow's
          <br />
          <span className="text-blue-600">Digital Experiences</span>
        </h1>
        <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 transition duration-300 mt-4">
          Get Started
        </button>
      </div>
      <div className="absolute w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl opacity-50 animate-bounce-1"></div>
      <div className="absolute w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl opacity-50 animate-bounce-2"></div>
      
      <style jsx>{`
        @keyframes bounce1 {
          0%, 100% { transform: translate(-50%, -50%); }
          25% { transform: translate(25vw, 25vh); }
          50% { transform: translate(50vw, -25vh); }
          75% { transform: translate(-25vw, 25vh); }
        }
        @keyframes bounce2 {
          0%, 100% { transform: translate(50%, 50%); }
          25% { transform: translate(-25vw, -25vh); }
          50% { transform: translate(-50vw, 25vh); }
          75% { transform: translate(25vw, -25vh); }
        }
        .animate-bounce-1 {
          animation: bounce1 11s ease-in-out infinite;
        }
        .animate-bounce-2 {
          animation: bounce2 15s ease-in-out infinite;
        }
      `}</style>



      <div className="w-full max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1 bg-white rounded-lg shadow-md p-6 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-blue-600">
            Explore Our
            <br />
            <span className="text-blue-800">Services</span>
          </h2>
        </div>
        <div className="col-span-1 grid grid-rows-3 gap-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold">Brand Identity Creation</h3>
          </div>
          <div className="bg-blue-600 rounded-lg shadow-md p-4 row-span-2">
            <h3 className="text-xl font-semibold text-white">Web & Mobile Design</h3>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold">UX/UI Design</h3>
          </div>
        </div>
      </div>
    </div>


      <div className="w-full max-w-4xl z-10 bg-blue-600 text-white p-6 rounded">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Discover The Power Of Infinite Design</h2>
      </div>

      
    </div>
  );
};

export default Home;