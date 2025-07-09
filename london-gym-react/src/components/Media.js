import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

    return (
        <>
            <MyNavbar />

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
