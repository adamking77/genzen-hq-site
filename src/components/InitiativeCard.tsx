
import React from "react";

interface InitiativeCardProps {
  title: string;
  description: string;
  link: string;
  linkText: string;
}

const InitiativeCard = ({
  title,
  description,
  link,
  linkText,
}: InitiativeCardProps) => {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <div className="border border-gray-700/40 bg-[#0a1423]/70 p-10 h-full rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-[#152033]/80 hover:border-gray-600/60 hover:transform hover:translate-y-[-5px] cursor-pointer">
        <h4 className="text-2xl font-normal mb-4 text-light-gray">{title}</h4>
        <p className="text-light-gray/80 mb-6 text-base">{description}</p>
        <span className="text-light-gray hover:text-light-gray/70 transition-colors text-base">
          {linkText}
        </span>
      </div>
    </a>
  );
};

export default InitiativeCard;
