import React from 'react';
import { BeakerIcon, Building2, AlignCenterVertical as Certificate, FlaskRound as Flask, Globe2, GraduationCap, Heart, Mail, MapPin, Menu, MicroscopeIcon, Phone, PlusCircle, ShieldCheck, X } from 'lucide-react';// Assuming you're using react-icons for these components

function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="text-blue-600 h-6 w-6" />
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p className="text-gray-600">
                    AVNOL PHARMACEUTICAL PVT. LMT
                    SHOP.NO.S-3, 2ND FLOOR, MALIKBUILDCON PLAZA, PLOT NO-6,PKT-5,SECTOR12,DWARKA, NEW DELHI-110075
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-blue-600 h-6 w-6" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray-600">Email-avnolpharma@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-blue-600 h-6 w-6" />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-gray-600">8076377794, 9648737322</p>
                </div>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600 h-32"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
