import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import useScrollSnap from 'react-use-scroll-snap'
import ScrollTrigger from 'react-scroll-trigger';

import Snap from './components/Snap.js';
import Personal from './components/Personal.js';
import Telus from './components/Telus.js';
import Footer from './Footer.js';

const personalInfo = {
  firstName: 'Gursh',
  lastName: 'Singh',
  email: 'gursh.dhanoa@gmail.com',
  phoneNumber: '647-888-7946'
};

const workHistory = {
};

function App() {

  return (
    <div className={'scroll-container'}>
      <Personal/>
      <Snap/>
      <Telus/>
      <Footer/>
    </div>
  );
}

export default App;


//