import snapLogo from './snapchat-logo.png';
import telusLogo from './telus-logo.jpeg'
import './App.css';
import React, { Component } from 'react';

import { snapResumeDetails, telusResumeDetails } from './resumeDetails';
import Personal from './components/Personal.js';
import WorkHistory from './components/WorkHistory.js';
import Snap from './components/Snap';
import Telus from './components/Telus';
import useScrollSnap from './components/scrollsnap';

function App () {
  return ( 
    <div className={'container'}>
      {useScrollSnap('.Snap', '.container', '.Snap')}
      <Personal className='section'/>
      <Snap className='section'/>
      <Telus className='section'/> 
    {/* <WorkHistory jobDeets={snapResumeDetails.JobInfo} workDeets={snapResumeDetails.JobDetails} logos={snapLogo} bgColor="#fff000" logo-class='snapLogoClass' textContainer='snap-text-container' mainContainer='snap-main-container' logoContainer="snap-logo-container"/>
    <WorkHistory jobDeets={telusResumeDetails.jobInfo} workDeets={telusResumeDetails.jobDetails} logos={telusLogo} bgColor="#7B47BB" textColor='text-white' textContainer='telus-text-container' mainContainer="telus-main-container" logoContainer="telus-logo-container"/> */}
  </div>

   );
}

export default App;

