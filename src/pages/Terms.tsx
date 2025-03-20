import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      <main className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-300">Last updated: March 2024</p>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-4">
                By accessing and using BackgroundBlitz, you accept and agree to be bound by the terms and 
                provisions of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
              <p className="text-gray-300 mb-4">
                BackgroundBlitz provides an AI-powered background removal service for images. We reserve the 
                right to modify, suspend, or discontinue any aspect of the service at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
              <p className="text-gray-300 mb-4">
                You are responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Maintaining the confidentiality of your account</li>
                <li>All activities that occur under your account</li>
                <li>Ensuring you have the rights to process the images you upload</li>
                <li>Complying with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property Rights</h2>
              <p className="text-gray-300 mb-4">
                You retain all rights to your original content. By using our service, you grant us a license to 
                process and store your images as necessary to provide the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-300 mb-4">
                BackgroundBlitz is provided "as is" without any warranties. We shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Contact Information</h2>
              <p className="text-gray-300">
                For any questions about these Terms, please contact us at{' '}
                <a href="mailto:legal@backgroundblitz.com" className="text-brand-500 hover:text-brand-400">
                  legal@backgroundblitz.com
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

export default Terms; 