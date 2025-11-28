import React, { useState } from "react";
import "./Contact.css";
import { motion } from "framer-motion";


const Contact = () => {
  const [active, setActive] = useState("");

  const handleSelect = (type) => {
    setActive(type);
  };

  return (
    <div className="containerbox">
  <motion.div
    className="contact-container"
    initial={{ opacity: 0, y: 80, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    {/* Title Animation */}
    <motion.h2
      className="contact-title"
      initial={{ x: -120, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "backOut" }}
      animate={{ textShadow: "0px 0px 8px rgba(255,255,255,0.6)" }}
    >
      Contact with me
    </motion.h2>

    {/* Input Row 1 */}
    <motion.div
      className="contact-row"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <motion.input
        type="text"
        placeholder="First name"
        whileFocus={{ scale: 1.05, boxShadow: "0 0 12px #ffffff40" }}
      />
      <motion.input
        type="text"
        placeholder="Last name"
        whileFocus={{ scale: 1.05, boxShadow: "0 0 12px #ffffff40" }}
      />
    </motion.div>

    {/* Input Row 2 */}
    <motion.div
      className="contact-row"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <motion.input
        type="email"
        placeholder="Email"
        whileFocus={{ scale: 1.05, boxShadow: "0 0 12px #ffffff40" }}
      />
      <motion.input
        type="text"
        placeholder="Phone"
        whileFocus={{ scale: 1.05, boxShadow: "0 0 12px #ffffff40" }}
      />
    </motion.div>

    {/* Subtitle */}
    <motion.h3
      className="contact-subtitle"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
    >
      Your requirement
    </motion.h3>

    {/* Buttons */}
    <motion.div
      className="requirement-buttons"
      initial="hidden"
      whileInView="show"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.1 }
        }
      }}
    >
      {["Website", "Graphics", "Front-end development", "Video editing", "Photography"].map(
        (item, i) => (
          <motion.button
            key={i}
            className={`req-btn ${active === item ? "active" : ""}`}
            onClick={() => handleSelect(item)}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              show: { opacity: 1, scale: 1 }
            }}
            whileHover={{ scale: 1.15, rotate: 1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {item}
          </motion.button>
        )
      )}
    </motion.div>

    {/* Textarea */}
    <motion.textarea
      placeholder="How can I help?"
      rows="5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileFocus={{ scale: 1.03 }}
      animate={{
        boxShadow: ["0 0 0px #0000", "0 0 10px #ffffff15", "0 0 0px #0000"],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
    />

    {/* Submit Button */}
    <motion.button
      className="submit-btn"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.12, boxShadow: "0 0 15px #ffffff60" }}
      whileTap={{ scale: 0.9, rotate: -2 }}
      transition={{ duration: 0.4 }}
    >
      Submit
    </motion.button>
  </motion.div>
</div>

  );
};

export default Contact;