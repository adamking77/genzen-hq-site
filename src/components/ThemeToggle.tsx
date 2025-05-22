
import React from 'react';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors flex items-center justify-center"
      aria-label="Toggle theme"
    >
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          theme === 'dark' 
            ? 'text-light-gray hover:text-light-gray/80' 
            : 'text-dark-text hover:text-dark-text/80'
        }`}
        stroke="currentColor"
      >
        {/* Circle outline */}
        <circle 
          cx="12" 
          cy="12" 
          r="10" 
          strokeWidth="1.5" 
          fill="none" 
        />
        
        {/* Right half with lines */}
        <path 
          d="M12,2 A10,10 0 0 1 12,22 A10,10 0 0 1 12,2" 
          strokeWidth="0" 
          fill="currentColor" 
          fillOpacity="0.2"
        />
        
        {/* Lines in right half */}
        <line x1="12" y1="5" x2="12" y2="19" strokeWidth="1.5" />
        <line x1="16" y1="7" x2="16" y2="17" strokeWidth="1.5" />
        <line x1="19" y1="12" x2="19" y2="12" strokeWidth="1.5" />
      </svg>
    </button>
  );
};

export default ThemeToggle;
