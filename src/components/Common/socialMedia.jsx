// SocialMediaIcon.jsx
import React from 'react';
import { motion } from 'framer-motion';

const SocialMediaIcon = ({ icon, link }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2 }}
    >
      <img src={icon} alt="Social Media Icon" className="w-6 h-6" />
    </motion.a>
  );
};

export default SocialMediaIcon;
