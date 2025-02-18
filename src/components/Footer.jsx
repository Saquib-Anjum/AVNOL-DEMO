import React, { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import logo from "../../public/logo.jpg";

function Footer() {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Get stored visit count
    let count = localStorage.getItem("visitCount");
    if (count) {
      count = parseInt(count) + 1;
    } else {
      count = 1;
    }
    setVisitCount(count);
    localStorage.setItem("visitCount", count);
  }, []);

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Logo" className="h-20" />
            </div>
            <p className="text-gray-400">
              Innovating healthcare solutions for a healthier tomorrow.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white">Products</a></li>
              <li><a href="#research" className="text-gray-400 hover:text-white">Research</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest news and updates.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-full w-full focus:outline-none text-gray-800"
              />
              <button className="bg-blue-600 px-6 py-2 rounded-r-full hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Visitor Counter */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          <p>👥 Visitors Count: <span className="font-bold text-white">{visitCount}</span></p>
        </div>

        <div className="border-t border-gray-700 mt-4 pt-4 text-center text-gray-400">
          <p>&copy; 2025 AVNOL PHARMACEUTICAL PVT. LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
