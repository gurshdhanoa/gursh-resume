import React from "react";
import logo from '../snapchat-logo.png';


const jobInfo = {
    companyName: "Snapchat",
    title: "Quality Engineering Lead",
    location: "Toronto, ON",
    tenure: "Jan 2019 - September 2022",
}

const jobDetails = [
    "Plan, develop and execute 	quality strategies for Bitmoji’s portfolio of products",
    "Created a Test Automation framework for the Bitmoji Web Avatar Builder using Nightwatch JS, Browserstack and Jenkins",
    "Created a weekly bug emailer tool, communicated priority and fix version for upcoming releases",
    "Contributed to QA tooling improvements",
    "Implemented and supported standardization of testing practices for new feature release and regression testing",
    "Created and maintained iOS and Android Automated Tests for Mobile Applications using Snap’s mobile app testing framework",
    "Created and drove the implementation of quality metrics/KPI’s",
    "Lead a team of 8 offshore manual testers to 100% release health quarter over quarter",
    "Lead efforts to test and fix accessibility and localization issues across all Bitmoji Platforms"
]

const achievements = [
    "0 production hot fixes, last 4 quarters",
    "Built Custom Bitmoji Avatar facial features comparison test framework. ",
    "100% new feature quality health, last 2 quarters.",
    "Test Engineer, Release Manager, Product Manager.",
    "Unquantifyable: 1. documentation  2. teamwork involved."
]


function Snap(){
    return (
        <div className="main-container snap section pt-20">
            <div className="">
                <div className="w-5/6 main-content">
                    <img src={logo} className="w-2/3 lg:w-1/6 h-auto object-contain m-auto py-10"></img>
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
                        {achievements.map(item => {
                            return <li>{item}</li>;
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Snap;