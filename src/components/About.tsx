
import React from "react";

const About = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-gray-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl md:text-3xl font-normal mb-4">About</h3>
          </div>
          <div className="space-y-6">
            <p className="text-gray-700">
              GenZen transforms patterns of exploitation into systems that are predictable and transformable. Protecting hundreds of millions in assets and creating pathways out of "impossible" situations by seeing what others miss.
            </p>
            <p className="text-gray-900 font-medium">Adam King, Founder</p>
            <p className="text-gray-700">
              For fifteen years, I've focused on helping leaders maintain control when their power faces sophisticated attack. What began as my personal system for navigating complex power dynamics evolved into something larger when I saw these same patterns threatening others.
            </p>
            <p className="text-gray-700">
              I've guided clients through high-figure negotiations, protected against systemic manipulation, and transformed crisis into strategic advantage. GenZen exists because these patterns of exploitation aren't random - they're predictable, and therefore transformable by design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
