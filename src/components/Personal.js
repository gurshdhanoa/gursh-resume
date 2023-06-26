import React from "react";
import Typewriter from "typewriter-effect";
import "../index.css";
import Portrait from "../Artboard1.png";

const personalInfo = {
  firstName: "Gursh",
  lastName: "Singh",
  jobTitle: "Product Owner, Developer and Designer",
  email: "gursh.dhanoa@gmail.com",
  phoneNumber: "647-888-7946",
};

function Personal() {
  return (
    <div>
      <div className="flex personal-container">
        <div className="m-auto">
        <div className="text-5xl font-bold">
    <Typewriter 
        options={{
            cursor: '',
        }}
        onInit={(typewriter) => {
            typewriter
                .typeString("Gursh Singh")
                .start();
        }}
        cursor={''}
    />
</div>

          <h2 className="font-bold" id="job-title">
            {personalInfo.jobTitle}
          </h2>
          <h2 id="email-text">{personalInfo.email}</h2>
          <h2 id="phone-number">{personalInfo.phoneNumber}</h2>
        </div>
      </div>
    </div>
  );
}

export default Personal;
