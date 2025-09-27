import { motion } from "framer-motion";

const team = [
  {
    name: "CA Rohan Deshmukh",
    role: "Founder & Managing Partner",
    specialty: "Taxation & Corporate Advisory",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "CA Sneha Kulkarni",
    role: "Partner",
    specialty: "Audit & Assurance",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "CA Arvind Mehta",
    role: "Senior Consultant",
    specialty: "International Tax & Compliance",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    name: "CA Priya Shah",
    role: "Associate Partner",
    specialty: "Company Law & Secretarial Services",
    image: "https://randomuser.me/api/portraits/women/41.jpg",
  },
];

const Team = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 lg:px-20" id="team">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Meet Our Experts
        </motion.h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Our leadership team consists of highly qualified Chartered Accountants
          and consultants with decades of combined experience in taxation,
          auditing, and corporate advisory.
        </p>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-md hover:shadow-xl rounded-2xl p-6 text-center transition-all duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-blue-600 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>
            <p className="mt-3 text-gray-600 text-sm italic">
              {member.specialty}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
