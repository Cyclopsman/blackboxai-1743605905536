import React from 'react';

const About = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">About Our Company</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, Green Energy Solutions has been at the forefront of renewable energy innovation, 
              helping thousands of customers reduce their carbon footprint and energy costs.
            </p>
            <p className="text-gray-600 mb-4">
              Our team of certified professionals brings decades of combined experience in sustainable energy solutions.
            </p>
            <div className="flex space-x-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold text-blue-600">10+ Years</h3>
                <p className="text-gray-600">Industry Experience</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold text-blue-600">5000+</h3>
                <p className="text-gray-600">Satisfied Customers</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <img 
              src="https://images.unsplash.com/photo-1508514177221-188e1eaf7083?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Solar panels" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;