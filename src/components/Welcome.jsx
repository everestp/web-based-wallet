import React from 'react';
import FeaturesSection from './FeaturesSection';
import WhyChooseUs from './WhyChooseUs ';

const Welcome = () => {
  
    return (
      <section className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-16 px-6 text-center relative overflow-hidden">
        {/* Glow Background Blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full opacity-30 blur-3xl animate-pulse"></div>
  
        {/* Content */}
        <h1 className="text-5xl font-extrabold mb-4 z-10 relative drop-shadow-md">
          Welcome to Ar-Fina
        </h1>
        <p className="text-lg text-gray-300 max-w-xl mx-auto mb-8 z-10 relative">
          A secure, fast, and decentralized way to manage your digital assets. Send, receive, and explore Web3 seamlessly.
        </p>
  
        {/* CTA */}
        <h1 className="px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition z-10 relative">
        Re-defining money with Ar-Fina


        </h1>
  
        {/* Icon or Illustration */}
        <div className="mt-10 z-10 relative">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2775/2775993.png"
            alt="Web3 Wallet Illustration"
            className="mx-auto w-32 h-32 opacity-90"
          />
        </div>
        <FeaturesSection/>
        <WhyChooseUs/>
      </section>
  );
};

export default Welcome;
