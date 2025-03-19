
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Cta = () => {
  return (
    <section className="py-16 md:py-24 cta-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 rounded-full bg-white opacity-10"></div>
      <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-96 h-96 rounded-full bg-white opacity-10"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Start Removing Backgrounds Today
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who save time and improve their visuals with BackgroundBlitz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-brand-600 hover:bg-gray-100 h-12 px-6 text-base">
              Try For Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-600 h-12 px-6 text-base">
              See Plans
            </Button>
          </div>
          <p className="mt-6 text-white text-opacity-80">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cta;
