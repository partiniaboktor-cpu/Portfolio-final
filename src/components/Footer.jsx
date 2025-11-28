import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";
import mylogo from '../images/mylogo.svg'
const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="footer-content">

        {/* Left Section */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src={mylogo} alt="Logo" />
          </div>
          <p className="footer-text">
            I’m always open to meaningful conversations, creative collaborations,
            or new opportunities. Don’t hesitate to drop me a message — I’d love
            to hear from you.
          </p>
        </div>

        {/* Middle Links */}
        <div className="footer-links">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Right More Info */}
        <div className="footer-more">
          <h4>More Information :</h4>
          <ul>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#activities">Activities</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>Partiniaboktor@gmail.com</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
