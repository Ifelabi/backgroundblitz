
import React from "react";
import Header from "@/components/Header";
import PricingSection from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <PricingSection />
        <Testimonials />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
};

export default Pricing;
