import React, {useState} from "react";
import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/solid"; // Ensure you have @heroicons/react installed

export const Accordion = ({articleTitle, children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" bg-wetSand section pt-10 mx-6 pb-10 ">
      <div className="py-4">
        <h2 className="font-bold text-4xl">BLOG </h2>
        <div className="border-t-4 border-black mt-1"></div>

        {/* Accordion Header */}
        <div
          className="flex justify-between items-center mt-2 cursor-pointer"
          onClick={toggleAccordion}
          aria-expanded={isOpen}
          aria-controls="content"
          role="button"
          tabIndex={0}
        >
          <p className="font-semibold text-xl">{articleTitle}</p>
          <p className="text-sm">Expand to read more</p>
          {isOpen ? (
            <ChevronUpIcon className="w-6 h-6" />
          ) : (
            <ChevronDownIcon className="w-6 h-6" />
          )}
        </div>

        {/* Accordion Content */}
        <div className={`${isOpen ? "block mt-6" : "hidden"}`} style={{ whiteSpace: "pre-line" }} id="content">
          <div className="mt-2">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
