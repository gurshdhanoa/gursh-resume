import React from "react";
import Personal from "./components/Personal.js";
import Resume from "./components/Resume.js";
import Accordion from "./components/Accordion.js";
import { article, title } from './blogs/gpt4vision.js'

function App() {
  return (
    <div className="bg-wetSand">
      <div className="child">
        <Personal />
      </div>
      <div className="child">
        <Resume />
      </div>
      <Accordion articleTitle={title}>
        <p>{article}</p>
      </Accordion>
    </div>
  );
}

export default App;
