
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
};

export default Home;
