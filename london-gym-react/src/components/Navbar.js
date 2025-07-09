// src/components/Navbar.js

import React, { useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../css/navbar.css';

function MyNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const collapseRef = useRef(null);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg glass-navbar fixed-top navbar-dark">
            <div className="container d-flex justify-content-between align-items-center">
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

                <button
                    className={`navbar-toggler ${!isOpen ? 'collapsed' : ''}`}
                    type="button"
                    onClick={toggleNavbar}
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className={`navbar-collapse glass-collapse ${isOpen ? 'show' : ''}`}
                    ref={collapseRef}
                    style={{
                        maxHeight: isOpen ? '500px' : '0',
                        padding: isOpen ? '0.5rem 1rem' : '0 0',
                        transition: 'max-height 0.5s ease-in-out, padding 0.3s ease-in-out'
                    }}
                >
                    <ul className="navbar-nav ml-auto d-flex align-items-center">
                        {[
                            { path: '/', label: 'Home' },
                            { path: '/about', label: 'About' },
                            { path: '/trainers', label: 'Trainers' },
                            { path: '/services', label: 'Services' },
                            { path: '/reviews', label: 'Reviews' },
                            { path: '/media', label: 'Media' },
                            { path: '/contact', label: 'Contact' }
                        ].map((link, index) => (
                            <li key={index} className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to={link.path}
                                    style={({ isActive }) => ({
                                        color: isActive ? '#ff4d4d' : 'white',
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: '500',
                                        textDecoration: 'none'
                                    })}
                                    onClick={() => setIsOpen(false)} // auto collapse on nav click
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default MyNavbar;
