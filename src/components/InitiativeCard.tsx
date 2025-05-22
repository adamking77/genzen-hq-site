
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
    <div className="border border-gray-200 p-8 h-full">
      <h4 className="text-xl font-normal mb-4">{title}</h4>
      <p className="text-gray-700 mb-6 text-sm">{description}</p>
      <a
        href={link}
        className="text-gray-900 hover:text-gray-600 transition-colors text-sm"
      >
        {linkText}
      </a>
    </div>
  );
};

export default InitiativeCard;
