
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import DecorativeLines from "./DecorativeLines";

const Challenge = () => {
  const animation = useScrollAnimation();
  
  return (
    <section className="py-40 px-8 md:px-16 lg:px-32 dark:border-gray-700 border-gray-300/30 border-t relative">
      <DecorativeLines className="transform rotate-45" />
      <div 
        ref={animation.ref}
        className={`container mx-auto animate-fade-in ${animation.isVisible ? 'visible' : ''}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-normal mb-4 dark:text-light-gray text-dark-text">The Challenge</h3>
          </div>
          <div>
            <p className="dark:text-light-gray/90 text-dark-text/90 text-base">
              Every system designed to protect you can be weaponized against you. We identify these exploitation patterns before they manifest and transform them into sources of unprecedented power.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
