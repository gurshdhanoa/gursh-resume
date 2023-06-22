import React from "react";
import iphoneMockup from "../images/iphone-mock1.png";
import iphoneMockup2 from "../images/iphone-mock2.png";

export default function WellChat() {
  return (
    <div className="main-container section bg-purple-200">
        <span>
            <h1 className="text-6xl font-bold text-center" id="header-text">Wellchat</h1>
            <p className="text-xl font-bold text-center">Founder, Developer & Designer</p>
            <h2 className="text-xl text-center" id="job-title">An AI-powered wellness chatbot application ally targetting the most important components of health:</h2>
            <h2 className="text-xl text-center" id="job-title">Mental Health, Sleep and Social Skills</h2>

        </span>

        <div className="grid grid-cols-4 gap-4 m-auto">
          <div className="flex align-middle">
            <img src={iphoneMockup} className="scale-75 object-contain"/>
          </div>
          <div className="m-auto">
            <img src={iphoneMockup2} className=" scale-75 object-contain m-auto"/>
          </div>
          <div className="m-auto">03</div>
        </div>
    </div>
  );
}
