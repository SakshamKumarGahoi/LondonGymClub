import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';

function About() {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg glass-navbar fixed-top">
                <div className="container">
                    <Link className="navbar-brand text-white wide-font" to="/">London Gym</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" style={{ filter: 'brightness(200%) invert(1)' }}></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
                            <li className="nav-item active"><Link className="nav-link text-danger" to="/about">About</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/trainers">Trainers</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/services">Services</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/reviews">Reviews</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/media">Media</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Owner Section */}
            <section className="container py-5 mt-5 pt-5 text-white">
                <h2 className="text-center text-danger wide-font mb-4">Meet the Owner</h2>
                <div className="row align-items-center mb-5">
                    <div className="col-md-4 mb-3">
                        <img src="/assets/images/owner.jpg" className="img-fluid rounded shadow" alt="Owner Mr. Sameer" />
                    </div>
                    <div className="col-md-8">
                        <p><strong>Mr. Sameer</strong>, the visionary behind London Gym, is passionate about transforming lives
                            through fitness and discipline. With over 15 years of experience in health and wellness, he has
                            built a space that combines modern equipment, aesthetic design, and a community-driven approach.</p>
                        <p>He believes every individual has the potential to become their strongest self — and London Gym is the
                            place to begin that journey.</p>
                    </div>
                </div>

                {/* About Section */}
                <h2 className="text-center text-danger wide-font mb-5">About London Gym</h2>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <p>At <strong>London Gym</strong>, we're more than a gym — we're a movement. We fuse cutting-edge
                            technology, experienced professionals, and premium interiors to create an unmatched fitness
                            experience.</p>
                        <p>Whether you're a beginner or a seasoned athlete, our space is designed to inspire you to reach your
                            personal best.</p>
                        <ul>
                            <li>Founded in 2020 in the heart of Delhi</li>
                            <li>Over 3000+ happy members</li>
                            <li>Ranked #1 in gym interiors & member satisfaction</li>
                        </ul>
                    </div>
                    <div className="col-md-6 mb-4">
                        <img src="/assets/images/mike-mentzer.gif" className="img-fluid rounded shadow" alt="Gym Interior" />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white text-center py-3">
                <p className="m-0">&copy; 2025 London Gym | Designed by Edelweiss Growth</p>
            </footer>
        </>
    );
}

export default About;
