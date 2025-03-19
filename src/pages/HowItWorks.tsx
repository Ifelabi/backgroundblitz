
import React from "react";
import Header from "@/components/Header";
import HowItWorksSection from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";

const HowItWorks = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <HowItWorksSection />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
};

export default HowItWorks;
