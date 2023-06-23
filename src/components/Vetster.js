import React from "react";
import logo from '../vetster-logo.png';


const jobInfo = {
    companyName: "Vetster",
    title: "QA Engineering Lead",
    location: "Toronto, ON",
    tenure: "January 2023 - Current",
}

const jobDetails = [
    "Spearheaded Entire Organization Test Strategy from the ground up, Test Automation, QA Processes, Dogfooding and Bug Management",
    "Develop test strategies for critical projects to ensure product correctness before launch",
    "Provide LCov’s and enforce code coverage standards for developers",
    "Built a web test automation framework utilizing Cypress",
    
]


function Vetster(){
    return (
        <div className="main-container section bg-indigo-800">
            <div className="">
                <div className="w-5/6 mx-auto main-content pt-24 text-slate-200 ">
                    <img src={logo} className="snap-logo object-none m-auto scale-50"></img>
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
                        {jobDetails.map((item, index) => {
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