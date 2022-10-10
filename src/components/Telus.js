import React from "react";
import gsap from "gsap";
import { useEffect } from "react";
// import './Telus.css';
import logo from '../telus-logo.jpeg';

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

    useEffect(() => {
        gsap.to(".telus-logo", {
            x: -100,
            duration: 1.5,
            ease: "none",
            delay: 0.5,
            scrollTrigger: {
                trigger: ".telus"
            }
        });
    })

    useEffect(() => {
        gsap.to(".text-continer", {
            x: 100,
            duration: 1.5,
            ease: "none",
            delay: 0.5,
            scrollTrigger: {
                trigger: ".telus"
            }
        });
    })

    
    return(
        <div className="bg-purple-700 section telus">
            <div className="flex h-screen">
                <header className="flex m-auto px-10" color="#fff000">
                <div className="text-container px-3 text-white">
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
                    <ul className="pt-5 list-disc text-base">
                    {jobDetails.map(item => {
                        return <li>{item}</li>;
                        })}
                    </ul>
                </div>
                <img src={logo} className="telus-logo m-auto px-7"></img>
                </header>
            </div>
        </div>
    )
}

export default Telus;