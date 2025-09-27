import { motion } from "framer-motion";
import { Check } from "lucide-react";
import BookConsultationModal from "./BookConsultation";

const advisoryServices = [
  "Business Strategy & Planning",
  "Financial & Operational Advisory",
  "Risk Management & Compliance",
  "Performance Improvement Consulting",
  "Mergers, Acquisitions & Due Diligence",
  "Corporate Restructuring & Advisory",
  "Startup Advisory & Growth Mentoring",
];

const Advisory = () => {
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
          Business Advisory Services
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl">
          Expert advice to help your business grow, reduce risks, and make informed strategic decisions.
        </p>
      </motion.div>

      {/* About Advisory Services */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto mb-16"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Choose Our Advisory Services?</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Our advisory services provide comprehensive guidance to businesses of all sizes. We help you navigate complex business challenges, optimize performance, and achieve sustainable growth.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Whether you are a startup looking for mentorship or an established company aiming for efficiency and expansion, our experienced advisors deliver actionable insights and measurable results.
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
        {advisoryServices.map((service, index) => (
          <div
            key={index}
            className="flex items-start gap-3 bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
          >
            <Check className="text-blue-600 w-6 h-6 mt-1 flex-shrink-0" />
            <p className="text-gray-700 font-medium">{service}</p>
          </div>
        ))}
      </motion.div>

      {/* Advisory Process Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto mb-16"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Advisory Process</h2>
        <ol className="list-decimal list-inside text-gray-700 text-lg space-y-3">
          <li>Initial Consultation & Understanding Your Business Goals</li>
          <li>Analysis of Current Operations, Financials & Market Position</li>
          <li>Identifying Opportunities & Risk Areas</li>
          <li>Customized Strategy & Action Plan Development</li>
          <li>Implementation Support & Monitoring</li>
          <li>Periodic Review & Adjustments</li>
          <li>Long-Term Growth & Sustainability Advisory</li>
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

export default Advisory;
