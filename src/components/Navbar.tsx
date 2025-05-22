
import React from "react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";

const Navbar = () => {
  const { theme } = useTheme();
  
  return (
    <header className="py-6 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8">
            <img 
              src={theme === 'dark' 
                ? "/lovable-uploads/be23b1cb-87ac-4ee0-8674-1468ab43995b.png" 
                : "/lovable-uploads/37a09e9c-53df-4984-81ce-231096a0c462.png"} 
              alt="GenZen Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-xl font-normal dark:text-light-gray text-dark-text">GenZen HQ</h1>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Navbar;
