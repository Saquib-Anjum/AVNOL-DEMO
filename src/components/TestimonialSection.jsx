import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  { id: 1, name: "Vivek Kumar", review: "Great service and high-quality products!" },
  { id: 2, name: "Saquib Anjum", review: "Fast delivery and excellent customer support." },
  { id: 3, name: "Rohit Singh", review: "Reliable pharmaceutical products for my practice." },
  { id: 4, name: "Dr. Aashish Kumar", review: "Affordable and effective medicines, very satisfied!" },
  { id: 5, name: "Prateek", review: "Highly recommended for all healthcare needs!" },
  { id: 6, name: "Manish", review: "Consistently excellent quality, great experience." }
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex items-center justify-center p-6 bg-gradient-to-r from-blue-400 to-purple-600">
      <div className="w-full max-w-lg p-6 text-center bg-white bg-opacity-100 rounded-lg shadow-md">
        <motion.div
          key={testimonials[index].id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg font-semibold">"{testimonials[index].review}"</p>
          <h3 className="mt-2 text-gray-600">- {testimonials[index].name}</h3>
        </motion.div>
      </div>
    </div>
  );
}
