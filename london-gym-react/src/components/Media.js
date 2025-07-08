import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';

function Media() {
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
                    <div className="col-md-4 mb-4 position-relative">
                        <div className="media-card">
                            <iframe
                                className="video-embed"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
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

export default Media;
