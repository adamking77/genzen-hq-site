
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
    <div className="border border-gray-700/40 bg-[#121a28]/70 p-10 h-full rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-[#1a2437]/80 hover:border-gray-600/60 hover:transform hover:translate-y-[-5px]">
      <h4 className="text-xl font-normal mb-4 text-light-gray">{title}</h4>
      <p className="text-light-gray/80 mb-6 text-sm">{description}</p>
      <a
        href={link}
        className="text-light-gray hover:text-light-gray/70 transition-colors text-sm"
      >
        {linkText}
      </a>
    </div>
  );
};

export default InitiativeCard;
