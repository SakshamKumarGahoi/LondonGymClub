import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';
import Footer from './Footer';

function Contact() {
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
                            <li className="nav-item active"><Link className="nav-link text-danger" to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Contact Section */}
            <section className="container py-5 mt-5 pt-5 text-white">
                <h2 className="text-center text-danger wide-font mb-5">Contact Us</h2>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="contact-box">
                            <h5 className="text-danger">Reach Out</h5>
                            <p><strong>Phone:</strong> +91 8218913837</p>
                            <p><strong>Email:</strong> london.gym@gmail.com</p>
                            <p><strong>Address:</strong> <br />London Gym, Delhi, India</p>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="p-2 rounded-4 overflow-hidden shadow" style={{ background: '#181818' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.508828969864!2d77.43727967550232!3d28.674421975641916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bbc7328e77%3A0xfcf525a00b504452!2sLondon%20Gym%20Club!5e0!3m2!1sen!2sin!4v1751970032734!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                style={{ border: 0, borderRadius: '1.5rem' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="London Gym Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <form action="https://formspree.io/f/xyzjqwvn" method="POST" className="contact-box mt-4">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" name="message" rows="4" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-danger btn-block">Send Message</button>
                </form>
            </section>

            <Footer />
        </>
    );
}

export default Contact;
