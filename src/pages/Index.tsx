
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Challenge from "@/components/Challenge";
import Initiatives from "@/components/Initiatives";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Challenge />
        <Initiatives />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
