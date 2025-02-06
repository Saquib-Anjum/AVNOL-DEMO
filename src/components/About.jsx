import React from "react";
// import { Building2, Globe2 } from "react-icons"; // Assuming you're using react-icons for these components
import { BeakerIcon, Building2, AlignCenterVertical as Certificate, FlaskRound as Flask, Globe2, GraduationCap, Heart, Mail, MapPin, Menu, MicroscopeIcon, Phone, PlusCircle, ShieldCheck, X } from 'lucide-react';
function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">About Us</h2>
            <p className="text-gray-600 mb-6">
              With over 30 years of excellence in pharmaceutical innovation, we're committed to improving lives through groundbreaking medical solutions. Our dedication to research and development has positioned us as a global leader in healthcare advancement.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Building2 className="text-blue-600 h-8 w-8" />
                <div>
                  <h4 className="font-bold">30+ Years</h4>
                  <p className="text-sm text-gray-600">Experience</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Globe2 className="text-blue-600 h-8 w-8" />
                <div>
                  <h4 className="font-bold">100+ Countries</h4>
                  <p className="text-sm text-gray-600">Global Presence</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Research Lab"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
