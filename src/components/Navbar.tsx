
import React from "react";

const Navbar = () => {
  return (
    <header className="py-6 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8">
            <img 
              src="/lovable-uploads/da82ba6b-b8b8-47c6-be30-981ab5da3664.png" 
              alt="GenZen Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-lg font-normal">GenZen HQ</h1>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
