import React from "react";
import { motion } from "framer-motion";
import { PlusCircle, Heart, MicroscopeIcon } from "lucide-react";

// Products Data
const products = [
  {
    id: 1,
    name: "Arthonol Gel",
    description:
      "Arthonol Gel provides quick relief from joint pain, muscle stiffness, sprains, and inflammation. Its fast-absorbing, non-greasy formula soothes pain and reduces swelling instantly.",
    price: "₹100",
    image: "/image/ARTHONOL GEL FINAL ARTWORK_page-0001.jpg",
  },
  {
    id: 2,
    name: "ASCINOL-PLUS Foil-Page",
    description:
      "ASCINOL-PLUS Tablets are specially formulated to provide effective relief from pain, inflammation, and swelling caused by arthritis, muscle strains, and joint discomfort. With a unique blend of active ingredients, it helps reduce stiffness and improve mobility.",
    price: "₹50",
    image: "/image/ASCINOL-PLUS FOIL_page-0001.jpg",
  },
  {
    id: 3,
    name: "ASCINOL-PLUS Tablet",
    description:
      "ASCINOL-PLUS Tablets are specially formulated to provide effective relief from pain, inflammation, and swelling caused by arthritis, muscle strains, and joint discomfort. With a unique blend of active ingredients, it helps reduce stiffness and improve mobility.",
    price: "₹99",
    image: "/image/ASCINOL-PLUS_page-0001.jpg",
  },
  {
    id: 4,
    name: "Isapnol",
    description:
      "Isapnol is a pure Ayurvedic formulation designed to promote healthy digestion and relieve constipation naturally. Made from high-quality Isabgol (Psyllium Husk) and other herbal ingredients, it supports bowel regularity, improves gut health, and helps in detoxification.",
    price: "₹199",
    image: "/image/ISAPNOL FVA(0)_page-0001.jpg",
  },
];

// Services Data
const services = [
  {
    icon: <PlusCircle className="h-12 w-12 text-white" />,
    title: "Prescription Medicines",
    description: "Advanced therapeutic solutions for various medical conditions",
  },
  {
    icon: <Heart className="h-12 w-12 text-white" />,
    title: "Over-the-counter Products",
    description: "Trusted healthcare products for everyday wellness",
  },
  {
    icon: <MicroscopeIcon className="h-12 w-12 text-white" />,
    title: "Diagnostics",
    description: "Cutting-edge diagnostic solutions for accurate results",
  },
];

// Products Section with Fixed Box Height and Scrollable Description
const ProductSection = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-green-500 to-blue-600 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Our Products</h2>

        {/* Horizontal Scroll Container */}
        <div className="overflow-x-auto whitespace-nowrap scroll-smooth px-4">
          <div className="flex space-x-6">
            {products.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ scale: 1.05 }}
                className="inline-block min-w-[270px] md:min-w-[320px]"
              >
                <div className="p-6 bg-white rounded-lg shadow-lg max-w-sm flex flex-col h-[420px]">
                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-contain rounded-lg shadow-lg mb-4"
                  />

                  {/* Product Name */}
                  <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>

                  {/* Scrollable Description Box */}
                  <div className="text-gray-600 my-2 text-wrap text-justify flex-grow overflow-y-auto h-[80px] pr-2">
                    {product.description}
                  </div>

                  {/* Product Price */}
                  <p className="text-lg font-bold text-green-600">{product.price}</p>

                  {/* Buy Button Always at the Bottom */}
                  <button className="mt-auto w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                    Buy Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-violet-500 to-pink-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-gray-800"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Component
const ProductsAndServices = () => {
  return (
    <>
      <ProductSection />
      <ServicesSection />
    </>
  );
};

export default ProductsAndServices;
