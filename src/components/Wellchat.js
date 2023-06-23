import React from "react";
import iphoneMockup from "../images/iphone-mock1.png";
import iphoneMockup2 from "../images/iphone-mock2.png";
import googlePlay from "../images/google-play.png";
import appStore from "../images/app-store.png";
import appDemo from "../images/Artboard 1.png"
import '../index.css';
import logo from '../images/wellchat-logo.png';

export default function WellChat() {
  return (
    <div className="main-container section bg-purple-200 px-4">
        <span className="">
        <img src={logo} className="w-1/2 lg:w-1/6 h-auto object-contain m-auto pt-10"></img>
            <p className="text-2xl font-bold text-center mt-4">Founder, Developer & Designer</p>
            <h2 className="text-center font-bold" id="job-title">Wellchat is an AI-powered wellness chatbot application targetting the most important components of wellbeing: Mental Health, Sleep and Social Skills</h2>
        </span>
          <div className="flex justify-center">
            <img src={appDemo} className="m-auto lg:w-1/4 h-auto object-contain"/>
        </div>
        <div className="flex justify-center space-x-3">
        <a href="https://play.google.com/store/apps/details?id=com.boostspace.boostspace" target="_blank" rel="noopener noreferrer" className="w-1/2 lg:w-1/12 h-auto">
                <img src={googlePlay} className="w-full h-auto object-contain"></img>
            </a>
            <a href="https://apps.apple.com/ca/app/wellchat/id6446705483" target="_blank" rel="noopener noreferrer" className="w-1/2 lg:w-1/12 h-auto">
                <img src={appStore} className="w-full h-auto object-contain"></img>
            </a>
        </div>
    </div>
  );
}
