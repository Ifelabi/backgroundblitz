import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement contact form submission
  };

  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      <main className="pt-20 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-gray-300">Get in touch with our team</p>
          </div>
          
          <div className="bg-secondary-foreground p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-secondary border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-brand-500 text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-secondary border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-brand-500 text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 bg-secondary border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-brand-500 text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 bg-secondary border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-brand-500 text-white"
                  required
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full bg-brand-500 hover:bg-brand-600">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact; 