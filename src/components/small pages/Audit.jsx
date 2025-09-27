import { motion } from "framer-motion";
import { Check } from "lucide-react";
import BookConsultationModal from "./BookConsultation";

const auditServices = [
  "Statutory Audit & Compliance",
  "Internal Audit & Risk Assessment",
  "Tax Audit & Regulatory Filings",
  "Financial Statement Review & Reporting",
  "Management & Operational Audit",
  "Forensic Audit & Fraud Detection",
  "Corporate Governance Advisory",
];

const Audit = () => {
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
          Audit & Assurance Services
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl">
          Ensure compliance, transparency, and reliability with our comprehensive audit and assurance solutions for your business.
        </p>
      </motion.div>

      {/* About Audit Services */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto mb-16"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Choose Our Audit & Assurance?</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Audit & Assurance services are critical for maintaining stakeholder trust, regulatory compliance, and financial integrity. Our experienced auditors ensure your business processes and financials are accurate, transparent, and compliant.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          We cater to corporates, SMEs, startups, and NGOs, providing tailored audit solutions that strengthen your internal controls and corporate governance.
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
        {auditServices.map((service, index) => (
          <div
            key={index}
            className="flex items-start gap-3 bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
          >
            <Check className="text-blue-600 w-6 h-6 mt-1 flex-shrink-0" />
            <p className="text-gray-700 font-medium">{service}</p>
          </div>
        ))}
      </motion.div>

      {/* Audit Process Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto mb-16"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Audit Process</h2>
        <ol className="list-decimal list-inside text-gray-700 text-lg space-y-3">
          <li>Initial Consultation & Understanding of Business Processes</li>
          <li>Risk Assessment & Control Evaluation</li>
          <li>Planning and Scope of Audit</li>
          <li>Execution: Financial & Operational Audit</li>
          <li>Review of Findings & Recommendations</li>
          <li>Final Audit Report & Certification</li>
          <li>Ongoing Support & Compliance Guidance</li>
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

export default Audit;
