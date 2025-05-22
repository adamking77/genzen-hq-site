
import React from "react";

const Navbar = () => {
  return (
    <header className="py-6 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto flex justify-center md:justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8">
            <img 
              src="/lovable-uploads/efdc2123-e30e-4b76-9202-5b56155783e8.png" 
              alt="GenZen Logo" 
              className="w-full h-full"
            />
          </div>
          <h1 className="text-lg font-normal">GenZen HQ</h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li><a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">About</a></li>
            <li><a href="#initiatives" className="text-gray-700 hover:text-gray-900 transition-colors">Initiatives</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
