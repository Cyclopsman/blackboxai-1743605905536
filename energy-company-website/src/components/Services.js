import React from 'react';

const Services = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-500 mb-4">
              <i className="fas fa-solar-panel text-4xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Solar Power Solutions</h3>
            <p className="text-gray-600 mb-4">
              Complete solar panel installations for homes and businesses with industry-leading 25-year warranties.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li><i className="fas fa-check text-green-500 mr-2"></i>Residential systems</li>
              <li><i className="fas fa-check text-green-500 mr-2"></i>Commercial installations</li>
              <li><i className="fas fa-check text-green-500 mr-2"></i>Maintenance packages</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-500 mb-4">
              <i className="fas fa-wind text-4xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Wind Energy Systems</h3>
            <p className="text-gray-600 mb-4">
              Small-scale wind turbine solutions perfect for rural properties and businesses.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li><i className="fas fa-check text-green-500 mr-2"></i>Residential turbines</li>
              <li><i className="fas fa-check text-green-500 mr-2"></i>Farm wind solutions</li>
              <li><i className="fas fa-check text-green-500 mr-2"></i>Hybrid systems</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-500 mb-4">
              <i className="fas fa-bolt text-4xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Energy Storage</h3>
            <p className="text-gray-600 mb-4">
              Battery systems to store your renewable energy and maximize self-consumption.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li><i className="fas fa-check text-green-500 mr-2"></i>Lithium-ion batteries</li>
              <li><i className="fas fa-check text-green-500 mr-2"></i>Smart energy management</li>
              <li><i className="fas fa-check text-green-500 mr-2"></i>Backup power solutions</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-center">Ready to Get Started?</h3>
          <p className="text-gray-600 text-center mb-6">
            Contact us today for a free consultation and quote for your renewable energy needs.
          </p>
          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
              Request Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;