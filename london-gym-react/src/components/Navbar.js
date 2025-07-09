import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg glass-navbar fixed-top">
            <div className="container d-flex justify-content-between align-items-center">
                <a className="navbar-brand text-white" href="/">London Gym</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" style={{ filter: 'brightness(200%) invert(1)' }}></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ml-auto d-flex align-items-center">
                        <li className="nav-item"><a className="nav-link text-white" href="/">Home</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href="/about">About</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href="/trainers">Trainers</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href="/services">Services</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href="/reviews">Reviews</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href="/media">Media</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
