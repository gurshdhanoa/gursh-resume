import React from "react";
import { useState } from "react";
import logo from '../vetster-logo.png';


const jobInfo = {
    companyName: "Vetster",
    title: "Product Owner / Test Engineer",
    location: "Toronto, ON",
    tenure: "January 2023 - Current",
}

const jobDetails = [
    "Spearheaded Entire Organization Test Strategy from the ground up, Test Automation, QA Processes, Dogfooding and Bug Management",
    "Develop test strategies for critical projects to ensure product correctness before launch",
    "Provide LCov’s and enforce code coverage standards for developers",
    "Built a web test automation framework utilizing Cypress",
    
]

const achievements = [
    "40% reduction in production hot fixes.",
    "80% increase in test coverage, 240 new ui, component and unit tests written.",
    "6 New Technical Test & Release tools Built.",
    "Unquantifyable: 1. documentation  2. teamwork involved."
]


function Vetster(){
    return (
        <div className="main-container section bg-indigo-800">
            <div className="pt-10">
                <div className="w-5/6 mx-auto main-content text-slate-200 ">
                    <img src={logo} className="w-2/3 lg:w-1/6 h-auto object-contain m-auto"></img>
                    <div className="text-container m-auto">
                        <h1 className="text-xl font-extrabold">
                            {jobInfo.companyName}
                        </h1>
                        <h2 className="text-xl font-extrabold">
                            {jobInfo.title}
                        </h2>
                        <h3 className="text-lg font-semibold">
                            {jobInfo.location}
                        </h3>
                        <h3 className="text-lg font-semibold">
                            {jobInfo.tenure}
                        </h3>
  
                        <ul className="pt-5 list-disc text-base font-semibold">
                        <h2 className="text-2xl font-extrabold">Achievements</h2>
                        {achievements.map((item, index) => {
                            return <li key={index}>{item}</li>;
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Vetster;