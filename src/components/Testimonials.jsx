import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Founder, TechStart Pvt. Ltd.",
    feedback:
      "The team’s professionalism and deep expertise in taxation and compliance have saved us time and reduced risk. Highly recommended for startups.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Mehta",
    role: "Director, Mehta Manufacturing",
    feedback:
      "Their audit and advisory services are top-notch. We’ve worked with them for 5+ years and they’ve been a trusted partner in our growth journey.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Arjun Nair",
    role: "CFO, FinEdge Capital",
    feedback:
      "We rely on their financial advisory and corporate compliance support. The attention to detail and prompt service is truly impressive.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20 px-6 lg:px-20" id="testimonials">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          What Our Clients Say
        </motion.h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We take pride in building lasting relationships with our clients.
          Here’s what they have to say about working with us.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-50 shadow-md hover:shadow-xl rounded-2xl p-8 text-center transition-all duration-300"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-blue-600"
            />
            <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
            <p className="text-sm text-gray-500">{t.role}</p>
            <p className="mt-4 text-gray-700 italic">“{t.feedback}”</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
