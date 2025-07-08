import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';
import Footer from './Footer';

function Trainers() {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg glass-navbar fixed-top">
                <div className="container d-flex justify-content-between align-items-center">
                    <Link className="navbar-brand text-white" to="/">London Gym</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" style={{ filter: 'brightness(200%) invert(1)' }}></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav ml-auto d-flex align-items-center">
                            <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/about">About</Link></li>
                            <li className="nav-item active"><Link className="nav-link text-danger" to="/trainers">Trainers</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/services">Services</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/reviews">Reviews</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/media">Media</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Trainers Section */}
            <section className="container py-5 mt-5 pt-5 text-white">
                <h2 className="text-center text-danger wide-font mb-5">Meet Our Trainers</h2>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="card trainer-card p-3">
                            <img src="/assets/images/trainer1.jpg" className="card-img-top" alt="Trainer 1" />
                            <div className="card-body">
                                <h5 className="card-title text-danger">Ravi Singh</h5>
                                <p className="card-text">Certified CrossFit & HIIT instructor with 10+ years of experience in
                                    transforming physiques and building athletic strength.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="card trainer-card p-3">
                            <img src="/assets/images/trainer2.jpg" className="card-img-top" alt="Trainer 2" />
                            <div className="card-body">
                                <h5 className="card-title text-danger">Anjali Mehra</h5>
                                <p className="card-text">Strength coach and nutrition expert helping women unleash power and
                                    confidence through holistic fitness routines.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Trainers;
