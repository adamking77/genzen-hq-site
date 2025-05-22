
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import DecorativeLines from "./DecorativeLines";

const Footer = () => {
  const animation = useScrollAnimation({ threshold: 0.05 });
  
  return (
    <footer className="py-20 px-8 md:px-16 lg:px-32 dark:border-gray-700 border-gray-300/30 border-t text-center text-sm dark:text-light-gray/70 text-dark-text/70 relative">
      <DecorativeLines className="opacity-50" />
      <div 
        ref={animation.ref}
        className={`container mx-auto animate-fade-in ${animation.isVisible ? 'visible' : ''}`}
      >
        <p>© {new Date().getFullYear()} GenZen HQ. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
