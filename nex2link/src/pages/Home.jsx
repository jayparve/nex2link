import React from 'react'

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-purple-100 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to Our Amazing Platform</h1>
              <p className="text-xl text-gray-700 mb-8">Discover how we can transform your business with our innovative solutions.</p>
              <button className="bg-purple-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-purple-700 transition duration-300">
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Easy Integration", description: "Seamlessly integrate our platform with your existing systems." },
                { title: "Powerful Analytics", description: "Gain valuable insights with our advanced analytics tools." },
                { title: "24/7 Support", description: "Our dedicated team is always here to help you succeed." }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-purple-600 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-purple-100 mb-8">Join thousands of satisfied customers and take your business to the next level.</p>
            <button className="bg-white text-purple-600 font-semibold py-3 px-8 rounded-lg hover:bg-purple-100 transition duration-300">
              Sign Up Now
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home