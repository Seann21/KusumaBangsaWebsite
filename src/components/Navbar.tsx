import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-primary p-4 w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <img src="/logo.png" alt="logo" className="logo h-10 mb-2" />
        <div className="hidden md:flex space-x-4 items-center desktop-nav">
          <a
            href="#Home"
            className="nav-link relative text-white p-2 rounded hover:bg-primary-600 hover:border-b-2"
          >
            Home
          </a>
          <a
            href="#about"
            className="nav-link relative text-white p-2 rounded hover:bg-primary-600 hover:border-b-2"
          >
            About
          </a>
          <a
            href="#program"
            className="nav-link relative text-white p-2 rounded hover:bg-primary-600 hover:border-b-2"
          >
            Program
          </a>
          <a
            href="#contact"
            className="nav-link relative text-white p-2 rounded hover:bg-primary-600 hover:border-b-2"
          >
            Contact
          </a>
          <a
            href="https://smkkusumabangsa.my.id/"
            className="bg-red-600 text-white p-2 hover:bg-red-700 rounded"
            target="_blank"
          >
            Login
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="md:hidden overflow-hidden"
      >
        <div className="mt-4 space-y-2">
          <a
            href="#Home"
            className="nav-link relative block text-white p-2 rounded hover:bg-primary-600 hover:border-b-2"
          >
            Home
          </a>
          <a
            href="#about"
            className="nav-link relative block text-white p-2 rounded hover:bg-primary-600 hover:border-b-2"
          >
            About
          </a>
          <a
            href="#program"
            className="nav-link relative block text-white p-2 rounded hover:bg-primary-600 hover:border-b-2"
          >
            Program
          </a>
          <a
            href="#contact"
            className="nav-link relative block text-white p-2 rounded hover:bg-primary-600 hover:border-b-2"
          >
            Contact
          </a>
          <a
            href="https://smkkusumabangsa.my.id/"
            className="bg-red-600 text-white w-full p-2 rounded block text-center"
            target="_blank"
          >
            Login
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
