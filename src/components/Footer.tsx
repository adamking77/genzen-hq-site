
import React from "react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 md:px-12 lg:px-24 border-t border-gray-200 text-center text-sm text-gray-600">
      <div className="container mx-auto">
        <p>© {new Date().getFullYear()} GenZen HQ. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
