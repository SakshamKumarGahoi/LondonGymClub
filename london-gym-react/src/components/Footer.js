import React from 'react';

const Footer = ({ className = '' }) => (
  <footer className={`bg-black text-white text-center py-3 w-100 mt-5 ${className}`}>
    <p className="m-0">&copy; 2025 London Gym | Designed by Edelweiss Growth</p>
  </footer>
);

export default Footer;
