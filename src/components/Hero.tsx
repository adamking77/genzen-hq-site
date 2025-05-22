
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import DecorativeLines from "./DecorativeLines";

const Hero = () => {
  const animation = useScrollAnimation();
  
  return (
    <section className="py-40 md:py-56 px-8 md:px-16 lg:px-32 relative">
      <DecorativeLines />
      <div 
        ref={animation.ref}
        className={`container mx-auto text-center max-w-3xl animate-fade-in ${animation.isVisible ? 'visible' : ''}`}
      >
        <h2 className="text-4xl md:text-5xl font-normal mb-8 text-light-gray">Architects of Autonomy</h2>
        <p className="text-lg md:text-xl text-light-gray/90 max-w-2xl mx-auto">
          GenZen is dedicated to restoring human autonomy in an age of systematic exploitation.
        </p>
      </div>
    </section>
  );
};

export default Hero;
