import React from 'react';
import { BeakerIcon, Building2, AlignCenterVertical as Certificate, FlaskRound as Flask, Globe2, GraduationCap, Heart, Mail, MapPin, Menu, MicroscopeIcon, Phone, PlusCircle, ShieldCheck, X } from 'lucide-react'; // Assuming you're using react-icons for these components

function Research_and_Innovation() {
  return (
    <section id="research" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Research & Innovation</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Research Lab"
              className="rounded-lg shadow-xl mb-6"
            />
            <div className="flex items-center space-x-4 mb-4">
              <Flask className="text-blue-600 h-6 w-6" />
              <h3 className="text-xl font-bold">Cutting-edge Research</h3>
            </div>
            <p className="text-gray-600">
              Our state-of-the-art facilities and dedicated research teams work tirelessly to develop innovative solutions for complex medical challenges.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <GraduationCap className="text-blue-600 h-6 w-6" />
                <h3 className="text-xl font-bold">Clinical Trials</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Currently conducting over 50 clinical trials across various therapeutic areas.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <Certificate className="text-blue-600 h-6 w-6" />
                <h3 className="text-xl font-bold">Patents & Publications</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Over 1000+ patents and 500+ peer-reviewed publications.
              </p>
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
              Collaborate with Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Research_and_Innovation;
