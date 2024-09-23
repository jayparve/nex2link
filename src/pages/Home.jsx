import React from "react";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-3xl z-10 text-center">
        <h1 className="text-6xl font-bold text-gray-700 mb-4">
          Crafting Tomorrow's
          <br />
          <span className="text-blue-600">Digital Experiences</span>
        </h1>
        <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 transition duration-300 mt-4">
          Get Started
        </button>
      </div>
      <div className="absolute w-96 h-96 bg-yellow-300 rounded-full filter blur-3xl opacity-50 animate-bounce-1"></div>
      <div className="absolute w-96 h-96 bg-yellow-300 rounded-full filter blur-3xl opacity-50 animate-bounce-2"></div>
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
    </div>

        {/* Feature Highlights */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Easy Integration",
                  description:
                    "Seamlessly integrate our platform with your existing systems.",
                },
                {
                  title: "Powerful Analytics",
                  description:
                    "Gain valuable insights with our advanced analytics tools.",
                },
                {
                  title: "24/7 Support",
                  description:
                    "Our dedicated team is always here to help you succeed.",
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-purple-600 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join thousands of satisfied customers and take your business to
              the next level.
            </p>
            <button className="bg-white text-purple-600 font-semibold py-3 px-8 rounded-lg hover:bg-purple-100 transition duration-300">
              Sign Up Now
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
