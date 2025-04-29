import React from "react";
import { BeakerIcon, Building2, AlignCenterVertical as Certificate, FlaskRound as Flask, Globe2, GraduationCap, Heart, Mail, MapPin, Menu, MicroscopeIcon, Phone, PlusCircle, ShieldCheck, X } from 'lucide-react';
function Hero() {
  return (
    <section
      id="home"
      className="pt-20 relative bg-cover bg-center h-screen flex items-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1579165466741-7f35e4755660?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Innovating Healthcare Solutions for a Healthier Tomorrow
          </h1>
          <p className="text-xl mb-8 animate-fade-in-delay">
            Pioneering pharmaceutical advancements with patient-centric solutions
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
              Learn More
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-600 transition-colors">
              Explore Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
