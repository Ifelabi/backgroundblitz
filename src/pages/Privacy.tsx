import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      <main className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-300">Last updated: March 2024</p>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-gray-300 mb-4">
                At BackgroundBlitz, we take your privacy seriously. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you use our service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <p className="text-gray-300 mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Account information (name, email, password)</li>
                <li>Payment information</li>
                <li>Images you upload for processing</li>
                <li>Usage data and preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Provide and maintain our service</li>
                <li>Process your payments</li>
                <li>Send you updates and marketing communications</li>
                <li>Improve our service and develop new features</li>
                <li>Protect against fraud and abuse</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="text-gray-300 mb-4">
                We implement appropriate technical and organizational measures to protect your personal data
                against unauthorized or unlawful processing, accidental loss, destruction, or damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:privacy@backgroundblitz.com" className="text-brand-500 hover:text-brand-400">
                  privacy@backgroundblitz.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy; 