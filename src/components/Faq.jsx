import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We provide Taxation, Audit & Assurance, Accounting, Business Advisory, and Corporate Advisory services for businesses and individuals.",
  },
  {
    question: "How can I contact you for consultation?",
    answer:
      "You can reach us via the contact form, email (info@cafirm.com), or phone (+91 9875 43210).",
  },
  {
    question: "Do you cater to startups and SMEs?",
    answer:
      "Yes, we specialize in startups, SMEs, corporates, and NGOs with tailored financial solutions.",
  },
  {
    question: "How long does it take to get a response?",
    answer:
      "Our team usually responds within 24 hours for any queries submitted via the contact form or email.",
  },
  {
    question: "Do you provide online consultations?",
    answer:
      "Yes, we provide both in-person and online consultations via video call or phone call.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20 px-6 sm:px-10 lg:px-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-lg">
          Find answers to common queries about our services, process, and support.
        </p>
      </motion.div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800 font-medium hover:bg-gray-100 transition"
              onClick={() => toggleFaq(index)}
            >
              {faq.question}
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <ChevronDown size={20} />
              </motion.span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0 }}
                  animate={{ opacity: 1, height: "auto", paddingTop: 16, paddingBottom: 16 }}
                  exit={{ opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="px-6 text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
