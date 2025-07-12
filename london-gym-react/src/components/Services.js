import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../css/style.css';
import Footer from './Footer';
import MyNavbar from './Navbar';

const Services = () => {
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

    const services = [
        {
            title: "Personal Training",
            description: "Tailored 1-on-1 programs focused on your fitness goals with our certified personal trainers."
        },
        {
            title: "Group Classes",
            description: "Join our high-energy HIIT, strength, and mobility classes for all fitness levels."
        },
        {
            title: "Nutrition Coaching",
            description: "Get a personalized meal plan and progress tracking from our expert nutritionists."
        },
        {
            title: "Body Composition Analysis",
            description: "Track your muscle, fat, and water percentages with our advanced InBody scanner."
        },
        {
            title: "Yoga & Flexibility",
            description: "Improve your flexibility and mental wellness with our certified yoga instructors."
        },
        {
            title: "Kids & Teens Fitness",
            description: "Fun, safe, and effective fitness programs for children and teenagers."
        }
    ];

    return (
        <>
            <MyNavbar />
            <motion.section 
                className="container py-5 mt-5 pt-5 text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-center text-danger wide-font mb-5">Our Services</h2>
                <div className="row service-cards-row">
                    {services.map((service, index) => (
                        <motion.div 
                            key={index}
                            className="col-md-4 mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.3,
                                delay: index * 0.1
                            }}
                        >
                            <motion.div 
                                className="p-4 service-card h-100"
                                whileHover={{ 
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <h5 className="text-danger">{service.title}</h5>
                                <p>{service.description}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    className="mt-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <h2 className="text-center text-danger wide-font mb-4">BMI Calculator</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <motion.form 
                                onSubmit={calculateBMI} 
                                className="bg-dark p-4 rounded"
                                whileHover={{ boxShadow: "0px 0px 20px rgba(255,77,77,0.2)" }}
                            >
                                <div className="form-group mb-3">
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
                                <div className="form-group mb-3">
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
                                <motion.button 
                                    type="submit" 
                                    className="btn btn-danger w-100"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Calculate
                                </motion.button>
                                {bmiResult && (
                                    <motion.div 
                                        className="alert alert-info mt-3"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        Your BMI is {bmiResult.bmi} ({bmiResult.status})
                                    </motion.div>
                                )}
                            </motion.form>
                        </div>
                    </div>
                </motion.div>
            </motion.section>
            <Footer />
        </>
    );
};

export default Services;
