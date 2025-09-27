import { motion } from "framer-motion";

const caseStudies = [
  {
    client: "ABC Corp",
    problem: "High corporate tax liabilities",
    solution: "Implemented strategic tax planning, reducing liabilities by 20%",
  },
  {
    client: "XYZ Startups",
    problem: "Startup financial structuring",
    solution: "Designed financial framework and accounting system for compliance",
  },
  {
    client: "Global NGO",
    problem: "Trust and donation management",
    solution: "Developed trust management process and reporting systems",
  },
  {
    client: "DEF SMEs",
    problem: "Audit and assurance requirements",
    solution: "Performed audit with actionable insights to improve financial efficiency",
  },
  {
    client: "LMN Enterprises",
    problem: "Business advisory & advisory gaps",
    solution: "Delivered business advisory solutions, improving operational efficiency",
  },
  {
    client: "OPQ Industries",
    problem: "Accounting inefficiencies",
    solution: "Streamlined accounting processes with modern tools and automation",
  },
];

const CaseStudies = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 sm:px-10 lg:px-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Case Studies</h2>
        <p className="text-gray-600 text-lg">
          Explore how we’ve helped our clients solve complex financial and business challenges.
        </p>
      </motion.div>

      {/* Case Study Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {caseStudies.map((caseStudy, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white shadow-xl rounded-2xl p-8 flex flex-col justify-between"
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">
              {caseStudy.client}
            </h3>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold">Problem:</span> {caseStudy.problem}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Solution:</span> {caseStudy.solution}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
