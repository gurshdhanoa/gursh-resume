import React from 'react';
import Personal from '../components/Personal';
import Resume from '../components/Resume.js';
import { article, title } from '../blogs/gpt4vision.js'
import Accordion from '../components/Accordion';

const Homepage = () => {
    return (
        <div className="bg-wetSand">
            <div className="child">
                <Personal email={"gursh.dhanoa@gmail.com"} jobTitle="Test Engineer & Product Owner" phoneNumber="647-888-7946" />
            </div>
            <div className="child">
                <Resume />
            </div>
            <Accordion articleTitle={title}>
                <p>{article}</p>
            </Accordion>
        </div>
    );
};

export default Homepage;