import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';

function Reviews() {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg glass-navbar fixed-top">
                <div className="container">
                    <Link className="navbar-brand text-white" to="/">London Gym</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" style={{ filter: 'brightness(200%) invert(1)' }}></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/about">About</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/trainers">Trainers</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/services">Services</Link></li>
                            <li className="nav-item active"><Link className="nav-link text-danger" to="/reviews">Reviews</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/media">Media</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Reviews Section */}
            <section className="container py-5 mt-5 pt-5 text-white">
                <h2 className="text-center text-danger wide-font mb-5">What Our Members Say</h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="review-card">
                            <p>"Absolutely love the vibe here! The trainers push me and the music is 🔥. I've never felt
                                stronger."</p>
                            <small>- Priya R.</small>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="review-card">
                            <p>"Great equipment, clean facility, and the personalized nutrition plan really helped me drop 8kg
                                in 3 months."</p>
                            <small>- Aarav M.</small>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="review-card">
                            <p>"As someone who was new to the gym, London Gym made it so welcoming. I’m now addicted to working
                                out!"</p>
                            <small>- Simran K.</small>
                        </div>
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

export default Reviews;
