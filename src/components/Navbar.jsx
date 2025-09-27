import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold tracking-wide text-blue-700"
        >
          CA&nbsp;Firm
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <NavItem to="/" label="Home" />
           

          {/* Services Dropdown */}
          <li
            className="relative group cursor-pointer"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <div className="flex items-center gap-1 hover:text-blue-600 transition">
              Services <ChevronDown size={16} />
            </div>
            <AnimatePresence>
              {servicesOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg p-2"
                >
                  <DropdownItem to="/services/taxation" label="Taxation" />
                  <DropdownItem to="/services/audit" label="Audit & Assurance" />
                  <DropdownItem to="/services/accounting" label="Accounting" />
                  <DropdownItem to="/services/advisory" label="Business Advisory" />
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          {/* Industries Dropdown */}
         

           
          <NavItem to="/blog" label="Blog" />
           
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-40 md:hidden p-6"
          >
            <button
              className="absolute top-4 right-4 text-gray-600"
              onClick={() => setMobileOpen(false)}
            >
              <X size={28} />
            </button>

            <ul className="flex flex-col gap-4 mt-12 text-lg font-medium text-gray-700">
              <NavItem to="/" label="Home" onClick={() => setMobileOpen(false)} />
               <NavItem to="/services" label="Services" onClick={() => setMobileOpen(false)} />
               <NavItem to="/blog" label="Blog" onClick={() => setMobileOpen(false)} />
               
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Reusable Nav Item
const NavItem = ({ to, label, onClick }) => (
  <li>
    <Link
      to={to}
      onClick={onClick}
      className="relative hover:text-blue-600 transition-colors after:block after:content-[''] after:absolute after:h-[2px] after:bg-blue-600 after:w-0 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
    >
      {label}
    </Link>
  </li>
);

// Reusable Dropdown Item
const DropdownItem = ({ to, label }) => (
  <li>
    <Link
      to={to}
      className="block px-3 py-2 rounded-md hover:bg-gray-100 transition"
    >
      {label}
    </Link>
  </li>
);

export default Navbar;
