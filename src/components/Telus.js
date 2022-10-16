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
    return(
        <div className="bg-purple-700 section telus">
            {useAnimation(1.5, 0, 60, '.text-container-telus', '.test-telus')}
            <div className="flex">
                <header className="flex m-auto px-10 test-telus" color="#fff000">
                <img src={logo} className="telus-logo m-auto px-7"></img>
                <div className="text-container-telus px-3 text-white">
                    <h1 className="text-xl font-bold">
                        {jobInfo.companyName}
                    </h1>
                    <h2 className="text-xl font-bold">
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
                </header>
            </div>
        </div>
    )
}

export default Telus;