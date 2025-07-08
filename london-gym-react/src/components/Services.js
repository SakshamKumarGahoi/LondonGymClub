import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';

function Services() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmiResult, setBmiResult] = useState(null);

    const calculateBMI = (event) => {
        event.preventDefault();
        if (weight > 0 && height > 0) {
            const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
            let status = '';
            if (bmi < 18.5) status = 'Underweight';
            else if (bmi < 24.9) status = 'Normal';
            else if (bmi < 29.9) status = 'Overweight';
            else status = 'Obese';
            setBmiResult({ bmi, status });
        }
    };

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
                            <li className="nav-item active"><Link className="nav-link text-danger" to="/services">Services</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/reviews">Reviews</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/media">Media</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Services Section */}
            <section className="container py-5 mt-5 pt-5 text-white">
                <h2 className="text-center text-danger wide-font mb-5">Our Services</h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="p-4 service-card h-100">
                            <h5 className="text-danger">Personal Training</h5>
                            <p>Tailored 1-on-1 programs focused on your fitness goals with our certified personal trainers.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="p-4 service-card h-100">
                            <h5 className="text-danger">Group Classes</h5>
                            <p>Join our high-energy HIIT, strength, and mobility classes for all fitness levels.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="p-4 service-card h-100">
                            <h5 className="text-danger">Nutrition Coaching</h5>
                            <p>Get a personalized meal plan and progress tracking from our expert nutritionists.</p>
                        </div>
                    </div>
                </div>

                {/* BMI Calculator */}
                <div className="mt-5">
                    <h2 className="text-center text-danger wide-font mb-4">BMI Calculator</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <form onSubmit={calculateBMI} className="bg-dark p-4 rounded">
                                <div className="form-group">
                                    <label htmlFor="weight">Weight (kg)</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="weight"
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="height">Height (cm)</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="height"
                                        value={height}
                                        onChange={(e) => setHeight(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-danger w-100">Calculate</button>
                                {bmiResult && (
                                    <div className="alert alert-info mt-3">
                                        Your BMI is {bmiResult.bmi} ({bmiResult.status})
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white text-center py-3 mt-5">
                <p className="m-0">&copy; 2025 London Gym | Designed by Edelweiss Growth</p>
            </footer>
        </>
    );
}

export default Services;
