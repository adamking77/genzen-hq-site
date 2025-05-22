
import React from "react";

const Footer = () => {
  return (
    <footer className="py-20 px-8 md:px-16 lg:px-32 border-t border-gray-700 text-center text-sm text-light-gray/70">
      <div className="container mx-auto">
        <p>© {new Date().getFullYear()} GenZen HQ. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
