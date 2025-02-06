import React, { useState } from "react";
import { X, Menu } from "react-feather"; // Ensure you're importing the icons
import logo from '../../public/logo.jpg'
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-20" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About Us
            </a>
            <a href="#products" className="text-gray-600 hover:text-blue-600 transition-colors">
              Products & Services
            </a>
            <a href="#research" className="text-gray-600 hover:text-blue-600 transition-colors">
              Research
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Patient Resources
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6">
            <a href="#home" className="block py-2 text-gray-600">
              Home
            </a>
            <a href="#about" className="block py-2 text-gray-600">
              About Us
            </a>
            <a href="#products" className="block py-2 text-gray-600">
              Products & Services
            </a>
            <a href="#research" className="block py-2 text-gray-600">
              Research
            </a>
            <a href="#contact" className="block py-2 text-gray-600">
              Contact
            </a>
            <button className="w-full mt-4 bg-blue-600 text-white px-6 py-2 rounded-full">
              Patient Resources
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
