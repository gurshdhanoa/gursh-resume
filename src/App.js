import logo from './snapchat-logo.png';
import './App.css';
import { useRef } from 'react';
import useScrollSnap from 'react-use-scroll-snap'
import ScrollTrigger from 'react-scroll-trigger';
import React, { Component } from 'react';
import { snapResumeDetails, telusResumeDetails } from './resumeDetails';


import Snap from './components/Snap.js';
import Personal from './components/Personal.js';
import Telus from './components/Telus.js';
import Footer from './Footer.js';
import WorkHistory from './components/WorkHistory.js';
import { render } from '@testing-library/react';

class App extends Component {
  render() {

  return (
    <div className={'scroll-container'}>
      <Personal/>
      {/* <Snap/> */}
      {/* <Telus/>  */}
      <WorkHistory jobDeets={snapResumeDetails.JobInfo} workDeets={snapResumeDetails.JobDetails} logos={logo} bgColor="#fff000"/>
      <WorkHistory jobDeets={telusResumeDetails.jobInfo} workDeets={telusResumeDetails.jobDetails} logos={logo} bgColor="#7B47BB"/>
    </div>
  );
}
};



//update background color
//add animations to workhistory
//add background color
//deploy
export default App;

