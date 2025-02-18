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
              With excellence in pharmaceutical innovation, we're committed to improving lives through groundbreaking medical solutions. Our dedication to research and development has positioned us as a global leader in healthcare advancement.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Building2 className="text-blue-600 h-8 w-8" />
                <div>
                  <h4 className="font-bold">Experience</h4>
                  <p className="text-sm text-gray-600">At Avnol Pharmaceuticals, we are a new but passionate company committed to delivering high-quality medicines. Backed by experienced professionals and modern technology, we focus on innovation, safety, and customer well-being to make a positive impact in healthcare.</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Globe2 className="text-blue-600 h-8 w-8" />
                <div>
                  <h4 className="font-bold">Global Presence</h4>
                  <p className="text-sm text-gray-600">As a growing pharmaceutical company, Avnol Pharmaceuticals is committed to expanding its presence in both national and international markets. While we are currently focused on serving the local market with high-quality medicines, our vision is to reach global communities and make a lasting impact in healthcare worldwide.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/image/Flux_Dev_A_futuristic_and_modern_about_image_for_a_pharma_manu_2.jpeg"
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
