import { motion } from "framer-motion";
import { Check } from "lucide-react";
import BookConsultationModal from "./BookConsultation";

const taxationServices = [
  "Corporate Tax Planning & Compliance",
  "Income Tax Filing for Individuals & Businesses",
  "GST Advisory & Filing",
  "Tax Audit & Representation",
  "International Taxation & Transfer Pricing",
  "Tax Dispute Resolution & Notices",
  "Business Structuring & Tax Optimization",
];

const Taxation = () => {
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
          Taxation Services
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl">
          Expert tax planning, compliance, and advisory services for individuals, businesses, and corporates.
        </p>
      </motion.div>

      {/* About Taxation Services */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto mb-16"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Choose Our Taxation Services?</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Taxation is complex and ever-changing. Our expert team ensures your compliance while minimizing liabilities and maximizing savings. We combine industry knowledge, latest regulations, and practical experience to give you a seamless taxation experience.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          We serve startups, SMEs, corporates, and individuals with customized strategies that align with your financial goals.
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
        {taxationServices.map((service, index) => (
          <div
            key={index}
            className="flex items-start gap-3 bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
          >
            <Check className="text-blue-600 w-6 h-6 mt-1 flex-shrink-0" />
            <p className="text-gray-700 font-medium">{service}</p>
          </div>
        ))}
      </motion.div>

      {/* Process Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto mb-16"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Taxation Process</h2>
        <ol className="list-decimal list-inside text-gray-700 text-lg space-y-3">
          <li>Initial Consultation & Requirement Gathering</li>
          <li>Review of Financial Statements & Documents</li>
          <li>Tax Planning & Advisory Specific to Your Business</li>
          <li>Preparation and Filing of Returns & GST Compliance</li>
          <li>Audit & Representation if Required</li>
          <li>Ongoing Support & Notices Handling</li>
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

export default Taxation;
