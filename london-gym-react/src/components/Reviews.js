import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';
import Footer from './Footer';
import MyNavbar from './Navbar';

function Reviews() {
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
            <MyNavbar />

            {/* Reviews Section */}
            <section className="container py-5 mt-5 pt-5 text-white">
                <h2 className="text-center text-danger wide-font mb-5">What Our Members Say</h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="review-card">
                            <p>"Absolutely love the vibe here! The trainers push me and the music is 🔥. I've never felt
                                stronger."</p>
                            <small>- Priya R.</small>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="review-card">
                            <p>"Great equipment, clean facility, and the personalized nutrition plan really helped me drop 8kg
                                in 3 months."</p>
                            <small>- Aarav M.</small>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="review-card">
                            <p>"As someone who was new to the gym, London Gym made it so welcoming. I’m now addicted to working
                                out!"</p>
                            <small>- Simran K.</small>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer only appears at bottom with fade-in */}
            {showFooter && <div className="fade-in-footer"><Footer /></div>}
        </>
    );
}

export default Reviews;
