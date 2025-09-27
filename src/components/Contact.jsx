import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
// State for controlled inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Popup state
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can also send data to backend/API

    // Show popup
    setShowPopup(true);

    // Hide popup after 3 seconds
    setTimeout(() => setShowPopup(false), 3000);

    // Clear the form fields
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };


  return (
    <section  id="contact" className="py-20 px-6 sm:px-10 lg:px-20 bg-gray-50 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2"
      >
        {/* Left Side - Contact Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8 max-w-md">
            Have questions about our services? Fill out the form and our team will get back to you within 24 hours.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-blue-600" />
              <p className="text-gray-700 font-medium">+91 9875 43210</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <p className="text-gray-700 font-medium">info@cafirm.com</p>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-blue-600" />
              <p className="text-gray-700 font-medium">
                123 Business Tower, Pune, Maharashtra
              </p>
            </div>
          </div>

          {/* Optional Google Map */}
          <div className="mt-8 w-full h-64 md:h-72 rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Firm Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.123456789!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf0e0c0f0f1d%3A0x1234567890abcdef!2sBusiness%20Tower%2C%20Pune!5e0!3m2!1sen!2sin!4v1694789654321!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <Input
              placeholder="Your Name"
              className="h-12 border-gray-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              className="h-12 border-gray-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="tel"
              placeholder="Your Phone Number"
              className="h-12 border-gray-300"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Textarea
              placeholder="Your Message"
              rows={5}
              className="border-gray-300"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <Button type="submit" className="w-full h-14 text-lg font-semibold bg-blue-600 hover:bg-blue-700">
              Send Message
            </Button>
          </form>
        </div>
      </motion.div>

      {/* Animated Popup Message */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -50 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
            className="fixed top-10 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 z-50"
          >
            <CheckCircle className="w-6 h-6" />
            <span className="font-medium">Thank you! Your message has been sent.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
