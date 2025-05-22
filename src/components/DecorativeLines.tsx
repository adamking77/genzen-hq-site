
import React from "react";

interface DecorativeLinesProps {
  className?: string;
}

const DecorativeLines = ({ className = "" }: DecorativeLinesProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Horizontal line */}
      <div className="absolute w-1/2 h-px bg-light-gray/10 top-1/2 left-0"></div>
      
      {/* Circle */}
      <div className="absolute w-96 h-96 border border-light-gray/5 rounded-full -top-48 -right-48"></div>
      
      {/* Thin compass-like element */}
      <div className="absolute top-1/4 left-1/4">
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
