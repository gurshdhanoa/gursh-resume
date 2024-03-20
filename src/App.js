import React from "react";
import {HashRouter, Route, Routes} from "react-router-dom";
import Newsletter from "./pages/Newsletter.js";
import Homepage from "./pages/Homepage.js";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
