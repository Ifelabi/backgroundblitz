
import React from "react";
import Header from "@/components/Header";
import FeaturesSection from "@/components/Features";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";

const Features = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <FeaturesSection />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
};

export default Features;
