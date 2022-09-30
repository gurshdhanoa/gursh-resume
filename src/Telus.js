import React from "react";
import './Telus.css';

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
        <div className="Telus">
            <header className="Telus-text">
                <h1>
                    {jobInfo.companyName}
                </h1>
                <h2>
                    {jobInfo.title}
                </h2>
                <h4>
                    {jobInfo.location}
                </h4>
                <h4>
                    {jobInfo.tenure}
                </h4>
            </header>
            <ul className="Telus-text">
                {jobDetails.map(item => {
                    return <li>{item}</li>;
                })}
            </ul>
        </div>
    )
}

export default Telus;


