
import React, { useEffect, useRef } from "react";

interface DecorativeLinesProps {
  className?: string;
}

const DecorativeLines = ({ className = "" }: DecorativeLinesProps) => {
  const circleRef = useRef<HTMLDivElement>(null);
  const compassRef = useRef<HTMLDivElement>(null);
  const horizontalLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (circleRef.current && compassRef.current && horizontalLineRef.current) {
        const scrollY = window.scrollY;
        
        // Increased movement values for more noticeable animations
        const circleTranslateX = scrollY * -0.15; // Increased from -0.05 to -0.15
        const compassTranslateX = scrollY * 0.12; // Increased from 0.04 to 0.12
        const lineTranslateX = scrollY * 0.09; // Increased from 0.03 to 0.09
        
        // Apply horizontal movements with faster transitions
        circleRef.current.style.transform = `translateX(${circleTranslateX}px)`;
        compassRef.current.style.transform = `translateX(${compassTranslateX}px)`;
        horizontalLineRef.current.style.transform = `translateX(${lineTranslateX}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Horizontal line */}
      <div 
        ref={horizontalLineRef}
        className="absolute w-1/2 h-px bg-light-gray/10 top-1/2 left-0 transition-transform duration-500"
      ></div>
      
      {/* Circle */}
      <div 
        ref={circleRef}
        className="absolute w-96 h-96 border border-light-gray/5 rounded-full -top-48 -right-48 transition-transform duration-500"
      ></div>
      
      {/* Thin compass-like element */}
      <div 
        ref={compassRef}
        className="absolute top-1/4 left-1/4 transition-transform duration-500"
      >
        <div className="relative w-8 h-8">
          <div className="absolute w-8 h-px bg-light-gray/10 top-1/2 left-0"></div>
          <div className="absolute w-px h-8 bg-light-gray/10 top-0 left-1/2"></div>
          <div className="absolute w-2 h-2 border border-light-gray/15 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default DecorativeLines;
