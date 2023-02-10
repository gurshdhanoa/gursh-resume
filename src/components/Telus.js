import React from "react";
import logo from '../telus-logo.jpeg';
import useAnimation from "./animation";


const jobInfo = {
    companyName: "Telus Digital",
    title: "Quality Assurance Engineer",
    location: "Vancouver, BC",
    tenure: "Dec 2015 - Jan 2019",
}

const jobDetails = [
    "Created a Test Automation Framework for an ecommerce flow using Cypress JS and Enzyme",
    "Created test strategies to ensure product quality before launch",
    "Assess localization and accessibility issues in products.",
    "Quality Evangelist, championing quality efforts across the development and management team.",
]


function Telus(){
    return (
        <div className="main-container section bg-purple-700">
            <div className="animation-container">
                {useAnimation(1.5, 0, -60, '.text-container', '.Snap')}{useAnimation(1.5,0 ,-60, '.snap-logo', '.Snap')}
            </div>
            <div className="">
                <div className="main-content pt-24 text-slate-200 ">
                    <img src={logo} className="snap-logo object-none m-auto scale-75"></img>
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
                        {jobDetails.map(item => {
                            return <li>{item}</li>;
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Telus;