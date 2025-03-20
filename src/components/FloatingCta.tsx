import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingCta = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex space-x-3">
      <Button
        onClick={scrollToTop}
        className="w-12 h-12 rounded-full flex items-center justify-center bg-secondary/80 hover:bg-secondary text-gray-300"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>

      <Link to="/pricing">
        <Button className="bg-brand-500 hover:bg-brand-600 shadow-lg hover:shadow-xl transition-all animate-scale-in">
          Try For Free
        </Button>
      </Link>
    </div>
  );
};

export default FloatingCta;
