// src/components/Trainers.js

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../css/style.css';

function Trainers() {
    return (
        <>
            <Navbar />

            {/* Trainers Section */}
            <section className="container py-5 mt-5 pt-5 text-white">
                <h2 className="text-center text-danger wide-font mb-5">Meet Our Trainers</h2>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="card trainer-card p-3">
                            <img
                                src="/assets/images/trainer1.jpg"
                                className="card-img-top"
                                alt="Trainer 1"
                            />
                            <div className="card-body">
                                <h5 className="card-title text-danger">Ravi Singh</h5>
                                <p className="card-text">
                                    Certified CrossFit & HIIT instructor with 10+ years of experience
                                    in transforming physiques and building athletic strength.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="card trainer-card p-3">
                            <img
                                src="/assets/images/trainer2.jpg"
                                className="card-img-top"
                                alt="Trainer 2"
                            />
                            <div className="card-body">
                                <h5 className="card-title text-danger">Anjali Mehra</h5>
                                <p className="card-text">
                                    Strength coach and nutrition expert helping women unleash power
                                    and confidence through holistic fitness routines.
                                </p>
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
