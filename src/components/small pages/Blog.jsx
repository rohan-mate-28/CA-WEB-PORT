import { motion } from "framer-motion";

const blogs = [
  {
    title: "How to Manage Corporate Tax",
    summary: "A complete guide for businesses to efficiently manage corporate tax and stay compliant with regulations.",
  },
  {
    title: "Trust Services Explained",
    summary: "Understanding trust management and how it benefits businesses and individuals in long-term planning.",
  },
  {
    title: "Professional Accounting Tips",
    summary: "Boost your accounting efficiency with these expert tips and practices suitable for SMEs and corporates.",
  },
  {
    title: "Business Advisory Strategies",
    summary: "Key insights into improving business processes, increasing profits, and managing risks.",
  },
  {
    title: "Audit & Assurance Insights",
    summary: "Learn how audits ensure reliability and compliance in financial reporting for your organization.",
  },
  {
    title: "Tax Planning for Startups",
    summary: "A guide to tax planning that helps startups optimize resources and reduce liabilities legally.",
  },
];

const Blog = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-20 px-6 sm:px-10 lg:px-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Insights & Articles</h1>
        <p className="text-gray-600 text-lg">
          Stay updated with the latest accounting tips, corporate tax guides, and trust management insights from our experts.
        </p>
      </motion.div>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">{blog.title}</h2>
              <p className="text-gray-600 mb-5">{blog.summary}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
