import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';
import Footer from './Footer';

function Home() {
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
                            <li className="nav-item"><Link className="nav-link text-white" to="/trainers">Trainers</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/services">Services</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/reviews">Reviews</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/media">Media</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-section position-relative d-flex flex-column align-items-center justify-content-center text-center" style={{ minHeight: '100vh' }}>
                <video className="hero-video" autoPlay loop muted>
                    <source src={process.env.PUBLIC_URL + "/assets/video/gym-bg-2.mp4"} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hero-overlay-text position-absolute w-100 top-50 start-50 translate-middle" style={{ zIndex: 2, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <h1 className="wide-font" style={{ whiteSpace: 'nowrap' }}>Welcome to London Gym</h1>
                    <p>Train Hard. Stay Strong. Live Fit.</p>
                    <Link to="/services" className="btn btn-danger">Explore Services</Link>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Home;
