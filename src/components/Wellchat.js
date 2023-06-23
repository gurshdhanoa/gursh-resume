import React from "react";
import iphoneMockup from "../images/iphone-mock1.png";
import iphoneMockup2 from "../images/iphone-mock2.png";
import '../index.css';
import logo from '../images/wellchat-logo.png';

export default function WellChat() {
  return (
    <div className="main-container section bg-purple-200 px-4">
        <span>
        <img src={logo} className=" m-auto"></img>
            <p className="text-xl font-bold text-center mt-4">Founder, Developer & Designer</p>
            <h2 className="text-center" id="job-title">Wellchat is an AI-powered wellness chatbot application targetting the most important components of wellbeing: Mental Health, Sleep and Social Skills</h2>

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
