import React from 'react';
import { BeakerIcon, Building2, AlignCenterVertical as Certificate, FlaskRound as Flask, Globe2, GraduationCap, Heart, Mail, MapPin, Menu, MicroscopeIcon, Phone, PlusCircle, ShieldCheck, X } from 'lucide-react'; // Assuming you're using react-icons for these components

function Products_and_Services() {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Products & Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <PlusCircle className="h-12 w-12 text-blue-600" />,
              title: "Prescription Medicines",
              description: "Advanced therapeutic solutions for various medical conditions"
            },
            {
              icon: <Heart className="h-12 w-12 text-blue-600" />,
              title: "Over-the-counter Products",
              description: "Trusted healthcare products for everyday wellness"
            },
            {
              icon: <MicroscopeIcon className="h-12 w-12 text-blue-600" />,
              title: "Diagnostics",
              description: "Cutting-edge diagnostic solutions for accurate results"
            }
          ].map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{product.icon}</div>
              <h3 className="text-xl font-bold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products_and_Services;
