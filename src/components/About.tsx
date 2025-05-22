
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import DecorativeLines from "./DecorativeLines";

const About = () => {
  const animation = useScrollAnimation();
  
  return (
    <section id="about" className="py-40 px-8 md:px-16 lg:px-32 dark:border-gray-700 border-gray-300/30 border-t relative">
      <DecorativeLines className="transform rotate-180" />
      <div 
        ref={animation.ref}
        className={`container mx-auto animate-fade-in ${animation.isVisible ? 'visible' : ''}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-3xl md:text-4xl font-normal mb-4 dark:text-light-gray text-dark-text">About</h3>
          </div>
          <div className="space-y-6">
            <p className="dark:text-light-gray/90 text-dark-text/90 text-base">
              GenZen transforms patterns of exploitation into systems that are predictable and transformable. Protecting hundreds of millions in assets and creating pathways out of "impossible" situations by seeing what others miss.
            </p>
            <h3 className="dark:text-light-gray text-dark-text font-medium text-xl">Adam King, Founder</h3>
            <p className="dark:text-light-gray/90 text-dark-text/90 text-base">
              For fifteen years, I've focused on helping leaders maintain control when their power faces sophisticated attack. What began as my personal system for navigating complex power dynamics evolved into something larger when I saw these same patterns threatening others.
            </p>
            <p className="dark:text-light-gray/90 text-dark-text/90 text-base">
              I've guided clients through high-figure negotiations, protected against systemic manipulation, and transformed crisis into strategic advantage. GenZen exists because these patterns of exploitation aren't random - they're predictable, and therefore transformable by design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
