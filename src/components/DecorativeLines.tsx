
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
        // with smoother easing function for better movement
        const circleTranslateX = scrollY * -0.2; // Further increased from -0.15 to -0.2
        const compassTranslateX = scrollY * 0.18; // Further increased from 0.12 to 0.18
        const lineTranslateX = scrollY * 0.14; // Further increased from 0.09 to 0.14
        
        // Apply horizontal movements with smoother transitions
        circleRef.current.style.transform = `translateX(${circleTranslateX}px)`;
        compassRef.current.style.transform = `translateX(${compassTranslateX}px)`;
        horizontalLineRef.current.style.transform = `translateX(${lineTranslateX}px)`;
      }
    };

    // Initial call to set positions immediately
    handleScroll();

    // Use passive: true for better performance on scroll events
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Horizontal line with smoother transition */}
      <div 
        ref={horizontalLineRef}
        className="absolute w-1/2 h-px dark:bg-light-gray/10 bg-line-shapes/10 top-1/2 left-0 transition-transform duration-300 ease-out"
      ></div>
      
      {/* Circle with smoother transition */}
      <div 
        ref={circleRef}
        className="absolute w-96 h-96 dark:border-light-gray/5 border-line-shapes/5 border rounded-full -top-48 -right-48 transition-transform duration-300 ease-out"
      ></div>
      
      {/* Thin compass-like element with smoother transition */}
      <div 
        ref={compassRef}
        className="absolute top-1/4 left-1/4 transition-transform duration-300 ease-out"
      >
        <div className="relative w-8 h-8">
          <div className="absolute w-8 h-px dark:bg-light-gray/10 bg-line-shapes/10 top-1/2 left-0"></div>
          <div className="absolute w-px h-8 dark:bg-light-gray/10 bg-line-shapes/10 top-0 left-1/2"></div>
          <div className="absolute w-2 h-2 dark:border-light-gray/15 border-line-shapes/15 border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default DecorativeLines;
