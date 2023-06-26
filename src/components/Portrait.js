import React from "react";
import { useState } from "react";
import picture from "../images/gary.jpg";

function Portrait() {
  const skills = ["Development", "Design,", "Quality &", "Business Metrics."];
  const my_role = ["Product Engineer"];

  const [isEmailShown, setIsEmailShown] = useState(false);
  const email = 'gursh.dhanoa@gmail.com';
  const buttonText = isEmailShown ? email : '✉️ E-mail Me';

  const handleClick = () => {
      if (!isEmailShown) {
          setIsEmailShown(true);
          window.location.href = `mailto:${email}`;
      }
  };

  return (
    <div className="main-container h-auto max-w-lg transition-all duration-300 rounded-lg ">
      {/* <img
            src={picture}
            className="ml-8 w-36 h-36 p-1 rounded-full "
        ></img> */}
      <div className="pt-10">
        {skills.map((line, i) => (
          <h1 key={i} className="w-5/6 m-auto text-4xl font-bold text-sky-300">
            {line}
          </h1>
        ))}{" "}
      </div>
      <h1 className="w-5/6 m-auto text-4xl pt-10 font-bold text-red-200">
        {my_role}
      </h1>
      <h1 className="w-5/6 m-auto text-4xl font-bold text-red-300">
        Move Better & Faster
      </h1>
      <div className="mt-10 pl-4 items-center">
        <div class="flex ml-4 space-x-4">
          <div class="relative ">
            <img class="w-32 h-32 rounded-full" src={picture} alt="" />
          </div>
          <div class="font-medium text-slate-800 align-middle">
            <div>Gursh Singh</div>
            <div class="text-sm text-gray-500 dark:text-gray-400">
              Product Engineer
            </div>
            <div className="relative inline-block">
            <button
                onClick={handleClick}
                type="button"
                className="mt-2 text-white bg-red-400 hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 "
            >
                {buttonText}
            </button>
            <span className="absolute top-3 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full transform -translate-x-1/2 -translate-y-1/2"></span>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portrait;
