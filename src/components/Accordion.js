import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid"; // Ensure you have @heroicons/react installed

export const Accordion = ({ articleTitle, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" bg-wetSand section mx-6 pb-10 ">
      <div className="">
        {/* Accordion Header */}
        <div
          className="flex items-center mt-2 cursor-pointer"
          onClick={toggleAccordion}
          aria-expanded={isOpen}
          aria-controls="content"
          role="button"
          tabIndex={0}
        >
          <p className="font-semibold text-xl flex-1 mr-1">{articleTitle}</p>
          <p className="text-sm mr-2">Expand to read more</p>
          {isOpen ? (
            <ChevronUpIcon className="w-6 h-6" />
          ) : (
            <ChevronDownIcon className="w-6 h-6" />
          )}
        </div>

        {/* Accordion Content */}
        <div
          className={`${isOpen ? "block mt-6" : "hidden"}`}
          style={{ whiteSpace: "pre-line" }}
          id="content"
        >
          <div className="mt-2">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
