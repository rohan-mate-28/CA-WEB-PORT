import { motion } from "framer-motion";
import { Check } from "lucide-react";
import BookConsultationModal from "./BookConsultation";

const accountingServices = [
  "Bookkeeping & Financial Record Management",
  "Preparation of Financial Statements",
  "Payroll Management & Compliance",
  "Budgeting & Forecasting",
  "Cost & Management Accounting",
  "Bank Reconciliation & Cash Flow Analysis",
  "Accounting Advisory for Business Decisions",
];

const Accounting = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 sm:px-10 lg:px-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-4">
          Accounting Services
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl">
          Accurate, timely, and professional accounting services to help your business thrive and stay compliant.
        </p>
      </motion.div>

      {/* About Accounting Services */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto mb-16"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Choose Our Accounting Services?</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Efficient accounting is the backbone of every business. We provide end-to-end accounting solutions, ensuring accuracy, compliance, and valuable financial insights for your business decisions.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          From startups to corporates, our team handles all accounting needs, so you can focus on growing your business with confidence.
        </p>
      </motion.div>

      {/* Services List */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-16"
      >
        {accountingServices.map((service, index) => (
          <div
            key={index}
            className="flex items-start gap-3 bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
          >
            <Check className="text-blue-600 w-6 h-6 mt-1 flex-shrink-0" />
            <p className="text-gray-700 font-medium">{service}</p>
          </div>
        ))}
      </motion.div>

      {/* Accounting Process Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto mb-16"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Accounting Process</h2>
        <ol className="list-decimal list-inside text-gray-700 text-lg space-y-3">
          <li>Understanding Business Structure & Financial Needs</li>
          <li>Bookkeeping & Daily Transaction Recording</li>
          <li>Monthly/Quarterly Financial Statement Preparation</li>
          <li>Budgeting, Forecasting & Analysis</li>
          <li>Tax Compliance & Regulatory Filings Support</li>
          <li>Management Reporting & Advisory</li>
          <li>Continuous Monitoring & Financial Insights</li>
        </ol>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <BookConsultationModal /> 
      </motion.div>
    </section>
  );
};

export default Accounting;
