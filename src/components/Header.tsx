import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="py-4 px-4 md:px-6 lg:px-8 w-full bg-secondary/90 backdrop-blur-sm fixed top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-white flex items-center">
            <span className="bg-brand-500 text-white p-1 rounded mr-2">BG</span>
            BackgroundBlitz
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/features" className="text-gray-300 hover:text-brand-300 transition-colors">Features</Link>
          <Link to="/how-it-works" className="text-gray-300 hover:text-brand-300 transition-colors">How It Works</Link>
          <Link to="/use-cases" className="text-gray-300 hover:text-brand-300 transition-colors">Use Cases</Link>
          <Link to="/pricing" className="text-gray-300 hover:text-brand-300 transition-colors">Pricing</Link>
          <div className="flex items-center space-x-4 pl-4">
            <Link to="/login">
              <Button variant="ghost" className="text-gray-300 hover:text-brand-300">Login</Button>
            </Link>
            <Link to="/signup">
              <Button variant="outline" className="border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white">Sign Up</Button>
            </Link>
            <Link to="/pricing">
              <Button className="bg-brand-500 hover:bg-brand-600">Try For Free</Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 right-0 left-0 bg-secondary shadow-lg p-4 z-50 animate-fade-in border-b border-border">
          <nav className="flex flex-col space-y-4 py-2">
            <Link 
              to="/features" 
              className="text-gray-300 hover:text-brand-300 transition-colors px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-gray-300 hover:text-brand-300 transition-colors px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/use-cases" 
              className="text-gray-300 hover:text-brand-300 transition-colors px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Use Cases
            </Link>
            <Link 
              to="/pricing" 
              className="text-gray-300 hover:text-brand-300 transition-colors px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <div className="space-y-2 px-4">
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="text-gray-300 hover:text-brand-300 w-full">Login</Button>
              </Link>
              <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white w-full">Sign Up</Button>
              </Link>
              <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                <Button className="bg-brand-500 hover:bg-brand-600 w-full">Try For Free</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
