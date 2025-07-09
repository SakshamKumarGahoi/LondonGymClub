import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';
import Footer from './Footer';
import MyNavbar from './Navbar';

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
            <MyNavbar />

            {/* Services Section */}
            <section className="container py-5 mt-5 pt-5 text-white">
                <h2 className="text-center text-danger wide-font mb-5">Our Services</h2>
                <div className="row service-cards-row">
                    <div className="col-md-4 mb-4">
                        <div className="p-4 service-card h-100 shuffle-pop">
                            <h5 className="text-danger">Personal Training</h5>
                            <p>Tailored 1-on-1 programs focused on your fitness goals with our certified personal trainers.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="p-4 service-card h-100 shuffle-pop">
                            <h5 className="text-danger">Group Classes</h5>
                            <p>Join our high-energy HIIT, strength, and mobility classes for all fitness levels.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="p-4 service-card h-100 shuffle-pop">
                            <h5 className="text-danger">Nutrition Coaching</h5>
                            <p>Get a personalized meal plan and progress tracking from our expert nutritionists.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="p-4 service-card h-100 shuffle-pop">
                            <h5 className="text-danger">Body Composition Analysis</h5>
                            <p>Track your muscle, fat, and water percentages with our advanced InBody scanner.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="p-4 service-card h-100 shuffle-pop">
                            <h5 className="text-danger">Yoga & Flexibility</h5>
                            <p>Improve your flexibility and mental wellness with our certified yoga instructors.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="p-4 service-card h-100 shuffle-pop">
                            <h5 className="text-danger">Kids & Teens Fitness</h5>
                            <p>Fun, safe, and effective fitness programs for children and teenagers.</p>
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

            <Footer />
        </>
    );
}

export default Services;
