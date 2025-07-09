import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';
import Footer from './Footer';
import MyNavbar from './Navbar';

function Home() {
    return (
        <>
            <MyNavbar />

            {/* Hero Section */}
            <section className="hero-section position-relative d-flex flex-column align-items-center justify-content-center text-center" style={{ minHeight: '100vh' }}>
                <video className="hero-video" autoPlay loop muted>
                    <source src={process.env.PUBLIC_URL + "/assets/video/gym-bg-2.mp4"} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hero-overlay-text position-absolute w-100 top-50 start-50 translate-middle" style={{ zIndex: 2, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <h1 className="wide-font welcome-text">Welcome to London Gym</h1>
                    <p>Train Hard. Stay Strong. Live Fit.</p>
                    <Link to="/services" className="btn btn-danger">Explore Services</Link>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Home;
