import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from 'react-router-dom';
import Newsletter from "./pages/Newsletter.js";
import Homepage from "./pages/Homepage.js";

function App() {
  let element = useRoutes([
    { path: '/', element: <Homepage /> },
    { path: '/newsletter', element: <Newsletter /> },
  ]);

  return element;
}

function Main() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  );
}

export default Main;