import React from "react";

const personalInfo = {
    firstName: 'Gursh',
    lastName: 'Singh',
    email: 'gursh.dhanoa@gmail.com',
    phoneNumber: '647-888-7946'
  };


function Personal() {
    return(
        <div>
            <h1>
                {personalInfo.firstName} {personalInfo.lastName}
            </h1>
            <h2>
                {personalInfo.email}
            </h2>
            <h2>
                {personalInfo.phoneNumber}
            </h2>
        </div>
    )
}

export default Personal;