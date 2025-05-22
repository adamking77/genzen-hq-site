
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
      <div className="border dark:border-gray-700/40 border-gray-300/40 dark:bg-[#0a1423]/70 bg-white/70 p-10 h-full rounded-lg transition-all duration-300 hover:shadow-lg dark:hover:bg-[#152033]/80 hover:bg-gray-100/80 dark:hover:border-gray-600/60 hover:border-gray-400/60 hover:transform hover:translate-y-[-5px] cursor-pointer">
        <h4 className="text-2xl font-normal mb-4 dark:text-light-gray text-dark-text">{title}</h4>
        <p className="dark:text-light-gray/80 text-dark-text/80 mb-6 text-base">{description}</p>
        <span className="dark:text-light-gray text-dark-text hover:text-dark-text/70 dark:hover:text-light-gray/70 transition-colors text-base">
          {linkText}
        </span>
      </div>
    </a>
  );
};

export default InitiativeCard;
