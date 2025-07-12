import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/style.css';
import Home from './components/Home';
import About from './components/About';
import Trainers from './components/Trainers';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Media from './components/Media';
import Contact from './components/Contact';
import MyNavbar from './components/Navbar';  // Import Navbar


// Main App component
function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Router>
        <MyNavbar />  {/* Render Navbar above Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </MotionConfig>
  );
}

export default App;
