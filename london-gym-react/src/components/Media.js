import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';
import Footer from './Footer';

function Media() {
    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isBottom =
                window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
            setShowFooter(isBottom);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                            <li className="nav-item active"><Link className="nav-link text-danger" to="/media">Media</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Media Section */}
            <section className="container py-5 mt-5 pt-5 text-white">
                <h2 className="text-center text-danger wide-font mb-5">Gallery & Videos</h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="media-card">
                            <img src={process.env.PUBLIC_URL + "/assets/images/pic1.jpg"} className="img-fluid" alt="Gym Pic 1" />
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="media-card">
                            <img src={process.env.PUBLIC_URL + "/assets/images/pic2.jpg"} className="img-fluid" alt="Gym Pic 2" />
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="media-card">
                            <img src={process.env.PUBLIC_URL + "/assets/images/pic3.jpg"} className="img-fluid" alt="Gym Pic 3" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer only appears at bottom with fade-in */}
            {showFooter && <div className="fade-in-footer"><Footer /></div>}
        </>
    );
}

export default Media;
