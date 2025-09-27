import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BookConsultationModal from "./small pages/BookConsultation";

// Variants
const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut", delay: 0.3 },
  },
};

const statItem = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.6 + i * 0.2 },
  }),
};

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate="show"
          className="flex-1 text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
          >
            Trusted Chartered Accountants <br />
            <span className="text-blue-700">For Your Business Growth</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="mt-4 text-lg text-gray-600 max-w-xl"
          >
            20+ years of experience helping startups, SMEs, and corporates
            with accounting, audit, taxation, and financial advisory services.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }}
            className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <BookConsultationModal />
            <Link
              to="/services"
              className="px-6 py-3 border border-blue-700 text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition"
            >
              View Services
            </Link>
          </motion.div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md mx-auto md:mx-0">
            {[
              { number: "20+", label: "Years Experience" },
              { number: "1000+", label: "Clients Served" },
              { number: "95%", label: "Client Retention" },
            ].map((stat, i) => (
              <StatItem key={i} number={stat.number} label={stat.label} index={i} />
            ))}
          </div>
        </motion.div>

        {/* Right Image / Illustration */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="show"
          className="flex-1 flex justify-center"
        >
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            src="https://static.vecteezy.com/system/resources/previews/030/762/181/non_2x/a-diverse-group-of-business-people-poses-for-a-professional-team-exuding-confidence-and-professionalism-ai-generative-photo.jpg"
            alt="CA Professional"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

// Reusable Stats Item with stagger
const StatItem = ({ number, label, index }) => (
  <motion.div
    custom={index}
    variants={statItem}
    initial="hidden"
    animate="show"
    className="text-center"
  >
    <h3 className="text-3xl font-bold text-blue-700">{number}</h3>
    <p className="text-gray-600">{label}</p>
  </motion.div>
);

export default HeroSection;
