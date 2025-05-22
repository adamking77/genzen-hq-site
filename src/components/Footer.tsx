
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Footer = () => {
  const animation = useScrollAnimation({ threshold: 0.05 });
  
  return (
    <footer className="py-20 px-8 md:px-16 lg:px-32 border-t border-gray-700 text-center text-sm text-light-gray/70">
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
