import React from "react";
import gsap from "gsap";
import { useEffect } from "react";
import { render } from "@testing-library/react";

//initilization variables

function WorkHistory(logo, employerInfo, workResponsibilties, bgColor) {

//a test commit

    return(
        <div className="section fade-in-section is-visible">
            <div className="">
                <div className="grid grid-cols-2 pt-18">
                    <img src={this.logo} className="logo object-none mx-auto"></img>
                    <div className="text-container pr-10 m-auto">
                        <h1 className="text-xl font-extrabold">
                            {employerInfo.companyName}
                        </h1>
                        <h2 className="text-xl font-extrabold">
                            {employerInfo.title}
                        </h2>
                        <h3 className="text-lg font-semibold">
                            {employerInfo.location}
                        </h3>
                        <h3 className="text-lg font-semibold">
                            {employerInfo.tenure}
                        </h3>
                        <ul className="pt-5 list-disc text-base font-semibold">
                        {workResponsibilties.map(item => {
                            return <li>{item}</li>;
                            })}
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}