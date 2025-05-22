
import React from "react";
import InitiativeCard from "@/components/InitiativeCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Initiatives = () => {
  const animation = useScrollAnimation();
  
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
    <section id="initiatives" className="py-40 px-8 md:px-16 lg:px-32 border-t border-gray-700">
      <div 
        ref={animation.ref}
        className={`container mx-auto animate-fade-in ${animation.isVisible ? 'visible' : ''}`}
      >
        <h3 className="text-2xl md:text-3xl font-normal mb-12 text-light-gray">Current Initiatives</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initiatives.map((initiative, index) => (
            <div 
              key={index} 
              className={`animate-fade-in animate-stagger-item ${animation.isVisible ? 'visible' : ''}`}
              style={{ '--item-index': index } as React.CSSProperties}
            >
              <InitiativeCard
                title={initiative.title}
                description={initiative.description}
                link={initiative.link}
                linkText={initiative.linkText}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
