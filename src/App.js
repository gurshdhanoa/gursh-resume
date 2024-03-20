import React from "react";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Newsletter from "./pages/Newsletter.js";
import Homepage from "./pages/Homepage.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
    </Router>
  );
}

export default App;
