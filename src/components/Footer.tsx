
import React from "react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 md:px-12 lg:px-24 border-t border-gray-700 text-center text-sm text-light-gray/70">
      <div className="container mx-auto">
        <p>© {new Date().getFullYear()} GenZen HQ. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
