import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '../css/navbar.css';

function MyNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const collapseRef = useRef(null);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    // Auto-close menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 992) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <motion.nav
            className="navbar navbar-expand-lg glass-navbar fixed-top navbar-dark"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
            <div className="container d-flex justify-content-between align-items-center">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        className="navbar-brand"
                        to="/"
                        style={{
                            color: 'white',
                            fontFamily: 'Orbitron, sans-serif',
                            textDecoration: 'none',
                            fontSize: '1.5rem',
                            fontWeight: 'bold'
                        }}
                    >
                        London Gym
                    </Link>
                </motion.div>

                <button
                    className={`navbar-toggler ${!isOpen ? 'collapsed' : ''}`}
                    type="button"
                    onClick={toggleNavbar}
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <AnimatePresence>
                    <motion.div
                        className={`navbar-collapse glass-collapse ${isOpen ? 'show' : ''}`}
                        ref={collapseRef}
                        initial={false}
                        animate={{
                            height: isOpen ? 'auto' : 0,
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut"
                        }}
                    >
                        <ul className="navbar-nav ms-auto d-flex align-items-center">
                            {[
                                { path: '/', label: 'Home' },
                                { path: '/about', label: 'About' },
                                { path: '/trainers', label: 'Trainers' },
                                { path: '/services', label: 'Services' },
                                { path: '/reviews', label: 'Reviews' },
                                { path: '/media', label: 'Media' },
                                { path: '/contact', label: 'Contact' }
                            ].map((link, index) => (
                                <motion.li
                                    key={index}
                                    className="nav-item"
                                    initial={false}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <NavLink
                                        className="nav-link"
                                        to={link.path}
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ff4d4d' : 'white',
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: '500',
                                            textDecoration: 'none'
                                        })}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </NavLink>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}

export default MyNavbar;
