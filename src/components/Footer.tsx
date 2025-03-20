import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Newsletter Section */}
          <div className="md:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <span className="text-xl font-bold text-white flex items-center">
                <span className="bg-brand-500 text-white p-1 rounded mr-2">BG</span>
                BackgroundBlitz
              </span>
            </Link>
            <p className="text-gray-300 mb-4">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-[#1E293B] border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-brand-500 text-white placeholder-gray-400"
                />
                <Button type="submit" variant="outline" className="border-gray-700 text-white hover:bg-gray-700">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-400">
                By subscribing you agree to with our{' '}
                <Link to="/privacy" className="underline hover:text-white">
                  Privacy Policy
                </Link>
                {' '}and provide consent to receive updates from our company.
              </p>
            </form>
          </div>

          {/* Product Links */}
          <div className="md:col-span-2 md:col-start-7">
            <h3 className="font-bold mb-4 text-white">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/features" className="text-gray-300 hover:text-white">Features</Link></li>
              <li><Link to="/how-it-works" className="text-gray-300 hover:text-white">How It Works</Link></li>
              <li><Link to="/use-cases" className="text-gray-300 hover:text-white">Use Cases</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white">Pricing</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="md:col-span-2">
            <h3 className="font-bold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white">Privacy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white">Terms</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="md:col-span-2">
            <h3 className="font-bold mb-4 text-white">Follow us</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white flex items-center gap-2">
                  <Facebook className="h-5 w-5" /> Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white flex items-center gap-2">
                  <Instagram className="h-5 w-5" /> Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white flex items-center gap-2">
                  <Twitter className="h-5 w-5" /> X
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white flex items-center gap-2">
                  <Linkedin className="h-5 w-5" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white flex items-center gap-2">
                  <Youtube className="h-5 w-5" /> Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 BackgroundBlitz. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-300 hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-white">
                Terms of Service
              </Link>
              <Link to="#" className="text-gray-300 hover:text-white">
                Cookies Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
