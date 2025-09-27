import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="relative bg-gray-50 py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left side - Image / Visual */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1521790361543-f645cf042ec4"
            alt="CA Firm Office"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Right side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Our Firm
          </h2>
          <p className="text-gray-600 leading-relaxed">
            With over <span className="font-semibold text-blue-600">20+ years</span> 
            of experience, we are a team of dedicated Chartered Accountants 
            committed to delivering professional financial, auditing, and tax 
            solutions. Our expertise spans across industries including startups, 
            SMEs, and corporates.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to build long-term partnerships based on 
            <span className="font-semibold"> trust, confidentiality, and accuracy</span>. 
            We believe in simplifying complex financial matters and empowering 
            businesses to focus on growth while we handle compliance.
          </p>

          {/* Core Values */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            {[
              { title: "Trust", icon: "🤝" },
              { title: "Accuracy", icon: "📊" },
              { title: "Confidentiality", icon: "🔒" },
              { title: "Client-Centric", icon: "💼" },
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 bg-white shadow p-4 rounded-xl"
              >
                <span className="text-2xl">{value.icon}</span>
                <span className="text-gray-800 font-medium">{value.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
