
import React from "react";

const Challenge = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 border-t border-gray-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-normal mb-4">The Challenge</h3>
          </div>
          <div>
            <p className="text-gray-700">
              Every system designed to protect you can be weaponized against you. We identify these exploitation patterns before they manifest and transform them into sources of unprecedented power.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
