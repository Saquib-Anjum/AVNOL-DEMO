import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus, FaSearch } from "react-icons/fa";

// List of FAQs
const faqData = [
  { question: "What types of pharmaceutical products do you offer?", answer: "We offer a wide range of pharmaceutical products, including pain relievers, antibiotics, vitamins, and skincare solutions." },
  { question: "Are your medicines approved by health authorities?", answer: "Yes, all our products are certified by WHO-GMP, FDA, and other relevant health regulatory authorities." },
  { question: "Do you offer bulk ordering for hospitals and pharmacies?", answer: "Yes, we provide bulk supply options for hospitals, clinics, and pharmacies. Please contact our sales team for more details." },
  { question: "How can I track my order?", answer: "Once your order is shipped, you will receive a tracking number via email, which you can use to track your package in real-time." },
  { question: "Do you provide international shipping?", answer: "Yes, we offer international shipping to multiple countries. Shipping charges may vary based on location." },
  { question: "What payment methods do you accept?", answer: "We accept payments via credit/debit cards, PayPal, and bank transfers." },
  { question: "Is there a return policy for medicines?", answer: "Yes, we have a return policy for damaged or incorrect products. Please check our return policy page for details." },
  { question: "Do you offer prescription-only medicines?", answer: "Yes, for prescription-only medicines, you must upload a valid prescription before purchasing." },
  { question: "What is the estimated delivery time?", answer: "Orders are usually delivered within 5-7 business days, depending on your location." },
  { question: "Can I modify or cancel my order?", answer: "Yes, you can modify or cancel your order within 24 hours of placing it." },
  { question: "Do you offer discounts for bulk purchases?", answer: "Yes, we offer special discounts for bulk orders. Contact our sales team for details." },
  { question: "Are your products cruelty-free?", answer: "Yes, we ensure that our products are not tested on animals and follow ethical manufacturing practices." }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");

  // Toggle FAQ item (only one opens at a time)
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Filter FAQs based on search input
  const filteredFAQs = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full py-12 px-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white relative">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-6 flex items-center bg-white rounded-lg shadow-md px-4 py-2">
        <FaSearch className="text-gray-600 mr-3" />
        <input
          type="text"
          placeholder="Search FAQs..."
          className="w-full text-gray-800 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* FAQ Container - Fixed Position */}
      <div className="max-w-6xl mx-auto p-6 rounded-lg">
        {/* FAQ Grid - Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden transition-all duration-500 ease-in-out"
                animate={{ height: openIndex === index ? "auto" : "60px" }} // Expand height smoothly
                layout // Enables smooth box resizing
              >
                {/* Question Box - White for contrast */}
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left font-semibold text-lg bg-white text-gray-800 p-4 rounded-lg shadow-md flex justify-between items-center transition-all duration-300"
                  whileTap={{ scale: 0.97 }} // Slight tap effect
                >
                  {faq.question}
                  {openIndex === index ? (
                    <FaMinus className="text-xl text-gray-700 transition-transform duration-300 transform rotate-180" />
                  ) : (
                    <FaPlus className="text-xl text-gray-700 transition-transform duration-300" />
                  )}
                </motion.button>

                {/* Answer Box - Expands Smoothly with Different Color */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      key="answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow-md mt-2"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <p className="text-center col-span-2 text-lg">No FAQs found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
