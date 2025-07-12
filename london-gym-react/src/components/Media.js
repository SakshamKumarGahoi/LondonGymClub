import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../css/style.css';
import Footer from './Footer';
import MyNavbar from './Navbar';

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

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <>
            <MyNavbar />

            {/* Media Section */}
            <section className="container py-5 mt-5 pt-5 text-white">
                <motion.h2 
                    className="text-center text-danger wide-font mb-5"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Gallery & Videos
                </motion.h2>
                <motion.div 
                    className="row" 
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                        <motion.div 
                            key={num}
                            className="col-md-4 mb-4"
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.05,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <div className="media-card">
                                <motion.img 
                                    src={process.env.PUBLIC_URL + `/assets/images/pic${num}.jpg`}
                                    className="img-fluid"
                                    alt={`Gym Pic ${num}`}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Footer only appears at bottom with fade-in */}
            <motion.div 
                className="fade-in-footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: showFooter ? 1 : 0 }}
                transition={{ duration: 0.5 }}
            >
                {showFooter && <Footer />}
            </motion.div>
        </>
    );
}

export default Media;
