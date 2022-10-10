import React from "react";
import '../index.css';
import useScrollSnap from 'react-use-scroll-snap';

const personalInfo = {
    firstName: 'Gursh',
    lastName: 'Singh',
    email: 'gursh.dhanoa@gmail.com',
    phoneNumber: '647-888-7946'
  };


function Personal() {

    return(
            <div className="flex section">
                <div className="m-auto intro-animation">
                    <h1 className="text-6xl font-bold text-center" id="header-text">
                        {personalInfo.firstName} {personalInfo.lastName}
                    </h1>
                    <h2 id="email-text">
                        {personalInfo.email}
                    </h2>
                    <h2 id="phone-number">
                        {personalInfo.phoneNumber}
                    </h2>
                </div>
            </div>
        )
    }

export default Personal;