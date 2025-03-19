
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="py-4 px-4 md:px-6 lg:px-8 w-full bg-white/80 backdrop-blur-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold text-brand-700 flex items-center">
            <span className="bg-brand-500 text-white p-1 rounded mr-2">BG</span>
            BackgroundBlitz
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-brand-600 transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-brand-600 transition-colors">How It Works</a>
          <a href="#use-cases" className="text-gray-700 hover:text-brand-600 transition-colors">Use Cases</a>
          <a href="#pricing" className="text-gray-700 hover:text-brand-600 transition-colors">Pricing</a>
          <div className="pl-4">
            <Button className="bg-brand-500 hover:bg-brand-600">Try For Free</Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 right-0 left-0 bg-white shadow-lg p-4 z-50 animate-fade-in">
          <nav className="flex flex-col space-y-4 py-2">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-brand-600 transition-colors px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-gray-700 hover:text-brand-600 transition-colors px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#use-cases" 
              className="text-gray-700 hover:text-brand-600 transition-colors px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Use Cases
            </a>
            <a 
              href="#pricing" 
              className="text-gray-700 hover:text-brand-600 transition-colors px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <Button className="bg-brand-500 hover:bg-brand-600 w-full">Try For Free</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
