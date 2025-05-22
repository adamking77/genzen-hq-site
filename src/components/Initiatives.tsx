
import React from "react";
import InitiativeCard from "@/components/InitiativeCard";

const Initiatives = () => {
  const initiatives = [
    {
      title: "Legacy Resilience",
      description: "Transforming sophisticated threats into multi-generational advantages.",
      link: "#",
      linkText: "Visit GenZen Solutions →"
    },
    {
      title: "Leadership Resilience",
      description: "Restoring control when leadership systems turn against you.",
      link: "#",
      linkText: "Visit GenZen Pro →"
    }
  ];

  return (
    <section id="initiatives" className="py-32 px-6 md:px-12 lg:px-24 border-t border-gray-200">
      <div className="container mx-auto">
        <h3 className="text-2xl md:text-3xl font-normal mb-12">Current Initiatives</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initiatives.map((initiative, index) => (
            <InitiativeCard
              key={index}
              title={initiative.title}
              description={initiative.description}
              link={initiative.link}
              linkText={initiative.linkText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
