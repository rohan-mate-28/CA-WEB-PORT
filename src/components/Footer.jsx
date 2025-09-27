import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

const Footer = () => {
 

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-gray-900 text-gray-200 py-16 px-6 sm:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Contact Us</h3>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-blue-400" />
            <span>+91 9875 43210</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-blue-400" />
            <span>info@cafirm.com</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-blue-400" />
            <span>123 Business Tower, Pune, Maharashtra</span>
          </div>
        </div>

         
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Follow Us</h3>
          <div className="flex items-center gap-4">
            <motion.a whileHover={{ scale: 1.2 }} href="#" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 text-blue-500" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" aria-label="Twitter">
              <Twitter className="w-6 h-6 text-blue-400" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" aria-label="Instagram">
              <Instagram className="w-6 h-6 text-pink-500" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" aria-label="Facebook">
              <Facebook className="w-6 h-6 text-blue-600" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-12 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Your CA Firm. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
