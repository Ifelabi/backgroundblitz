
import React from "react";
import Header from "@/components/Header";
import UseCasesSection from "@/components/UseCases";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";

const UseCases = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <UseCasesSection />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
};

export default UseCases;
