import React from "react";
import Personal from "../components/Personal";
import Resume from "../components/Resume.js";
import { gpt4vision } from "../blogs/gpt4vision";
import { singleTaskWork } from "../blogs/singleTaskWork";
import Accordion from "../components/Accordion";
const Homepage = () => {
  return (
    <div className="bg-wetSand">
      <div className="child">
        <Personal
          email={"gursh.dev@gmail.com"}
          jobTitle="Test Engineer & Product Owner"
          phoneNumber="647-888-7946"
        />
      </div>
      <div className="child">
        <Resume />
      </div>
      <div className=" bg-wetSand section mx-6">
        <h2 className="font-bold text-4xl">BLOG </h2>
        <div className="border-t-4 border-black mt-1"></div>
      </div>

      <Accordion articleTitle={singleTaskWork.title}>
        <p>{singleTaskWork.article}</p>
      </Accordion>
      <div className="border-t-4 border-black mt-1 mx-6"></div>

      <Accordion articleTitle={gpt4vision.title}>
        <p>{gpt4vision.article}</p>
      </Accordion>
    </div>
  );
};

export default Homepage;
