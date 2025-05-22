
import React from 'react';
import { SunMoon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors flex items-center justify-center"
      aria-label="Toggle theme"
    >
      <SunMoon 
        className={`h-5 w-5 ${
          theme === 'dark' 
            ? 'text-light-gray hover:text-light-gray/80' 
            : 'text-dark-text hover:text-dark-text/80'
        }`} 
      />
    </button>
  );
};

export default ThemeToggle;
