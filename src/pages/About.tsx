import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      <main className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">About BackgroundBlitz</h1>
            <p className="text-xl text-gray-300">Transforming image editing with AI-powered solutions</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 text-gray-300">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="mb-6">
                At BackgroundBlitz, we're dedicated to making professional-grade image editing accessible to everyone. 
                Our AI-powered platform simplifies the complex task of background removal, enabling creators, 
                businesses, and individuals to achieve stunning results in seconds.
              </p>
              <p>
                We believe that powerful image editing tools should be intuitive, fast, and available to all, 
                regardless of technical expertise.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Technology</h2>
              <p className="mb-6">
                Using cutting-edge artificial intelligence and machine learning algorithms, BackgroundBlitz 
                delivers precise background removal with exceptional accuracy. Our technology continuously 
                evolves to provide you with the best possible results.
              </p>
              <p>
                We prioritize user privacy and data security while maintaining high performance and reliability 
                in our services.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About; 