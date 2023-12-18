import React from "react";
import Personal from "./components/Personal.js";
import Resume from "./components/Resume.js";
import Accordion from "./components/Accordion.js";

function App() {
  return (
    <div className="bg-wetSand">
      <div className="child">
        <Personal />
      </div>
      <div className="child">
        <Resume />
      </div>
      <Accordion articleTitle="Coming Soon">
        <p>This is the article content</p>
      </Accordion>
    </div>
  );
}

export default App;
