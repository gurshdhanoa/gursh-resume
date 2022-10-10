import React from "react";
import "../Snap.css"
import logo from '../snapchat-logo.png';
import gsap from "gsap";

const jobInfo = {
    companyName: "Snapchat",
    title: "QA Engineering Lead",
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

function Snap(){

    const { useEffect } = React;


    useEffect(() => {
      gsap.to(".text-container", {
        x: -100,
        duration: 1.5,
        ease: "none",
        delay: 0.5,
        scrollTrigger: {
          trigger: ".Snap"
        }
      });
    }, [])

    // useEffect(() => {
    //     gsap.to(".snap-logo", {
    //       x: 100,
    //       duration: 1.5,
    //       ease: "none",
    //       delay: 0.5,
    //       scrollTrigger: {
    //         trigger: ".Snap"
    //       }
    //     });
    //   })

    useEffect(() => {
        gsap.to(".snap-logo", {
            x: 100,
            duration: 1.5,
            ease: "none",
            delay: 0.5,
            scrollTrigger: {
                trigger:".Snap"
            }
        });
    })

    return (
        <div className="Snap section fade-in-section is-visible">
            <div className="">
                <div className="grid grid-cols-2 pt-18">
                    <img src={logo} className="snap-logo object-none mx-auto"></img>
                    <div className="text-container pr-10 m-auto">
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

export default Snap;