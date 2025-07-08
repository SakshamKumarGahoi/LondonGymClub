import React from "react";
import videoBg from "../assets/videos/hero-video.mp4";
import "../styles/tailwind.css";
import "../styles/animations.css";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
      >
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight">
          TRANSFORM YOUR <span className="text-red-600">BODY</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mt-4 max-w-2xl">
          Join our premium fitness community and achieve your goals with expert trainers and world-class equipment.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105">
            Start Your Journey
          </button>
          <button className="border border-gray-500 text-white px-8 py-3 rounded-lg font-semibold hover:border-red-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
