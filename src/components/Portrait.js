import React from "react";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import picture from "../images/gary.jpg";

function Portrait() {
  const skills = ["Development,", "Design,", "Quality,", "Business."];
  const my_role = ["Product Owner & Engineer"];

  const [isEmailShown, setIsEmailShown] = useState(false);
  const email = "gursh.dhanoa@gmail.com";
  const buttonText = isEmailShown ? email : "✉️ E-mail Me";

  const handleClick = () => {
    if (!isEmailShown) {
      setIsEmailShown(true);
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className="main-container h-auto max-w-lg transition-all duration-300 rounded-lg ">
      <div className="pt-10 pl-9">
        <Typewriter
          options={{
            strings: skills,
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 0,
            pauseFor: 2000,
            cursorClassName: "Typewriter__cursor text-4xl",
            wrapperClassName: "w-5/6 m-auto text-4xl font-bold text-sky-300",
          }}
        />
      </div>
      <div className="w-5/6 m-auto text-2xl pt-10 font-bold ">
        <p>I enjoy delivering Software Product that makes an Impact.</p>
        <br></br>
        <p>
          Software Product's should be rapid, iterative, flexible & user-friendly.
          Teams should aim to move fast and deliver quality.
        </p>
      </div>
      
      <a href="mailto:gursh.dhanoa@gmail.com" class="relative inline-block text-lg group items-center ml-8 mt-10">
        <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
          <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
          <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
          <span class="relative">E-mail me</span>
        </span>
        <span
          class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"
        ></span>
      </a>
    </div>
  );
}

export default Portrait;
