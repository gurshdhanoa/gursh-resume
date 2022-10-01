import React from "react";
import './index.css';

const personalInfo = {
    firstName: 'Gursh',
    lastName: 'Singh',
    email: 'gursh.dhanoa@gmail.com',
    phoneNumber: '647-888-7946'
  };


function Personal() {
    return(
        <div className="flex h-screen">
            <div className="m-auto">
                <h1 className="">
                    {personalInfo.firstName} {personalInfo.lastName}
                </h1>
                <h2>
                    {personalInfo.email}
                </h2>
                <h2>
                    {personalInfo.phoneNumber}
                </h2>
            </div>
        </div>
    )
}

export default Personal;