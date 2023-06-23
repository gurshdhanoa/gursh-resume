import React from "react";
import '../index.css';
import Portrait from "../Artboard1.png";


const personalInfo = {
    firstName: 'Gursh',
    lastName: 'Singh',
    jobTitle: 'Product Owner, Developer and Designer',
    email: 'gursh.dhanoa@gmail.com',
    phoneNumber: '647-888-7946'
  };


function Personal() {
    return(
        <div>
            <div className="flex personal-container">
                <div className="m-auto">
                    <h1 className="text-6xl font-bold text-center" id="header-text">
                        {personalInfo.firstName} {personalInfo.lastName}
                    </h1>
                    <h2 className="font-bold" id="job-title">
                        {personalInfo.jobTitle}
                    </h2>
                    <h2 id="email-text">
                        {personalInfo.email}
                    </h2>
                    <h2 id="phone-number">
                        {personalInfo.phoneNumber}
                    </h2>
                </div>
            </div>
        </div>
        )
    }

export default Personal;