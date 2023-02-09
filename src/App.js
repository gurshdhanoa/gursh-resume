import React, { Component } from 'react';

import Personal from './components/Personal.js';
import Vetster from './components/Vetster.js';
import Snap from './components/Snap';
import Telus from './components/Telus';
import Portrait from './components/Portrait';


function App () {
  return ( 
    <div className={'container'}>
      <Personal/>
      <Vetster/>
      <Snap />
      <Telus/> 
      <Portrait />
  </div>

   );
}

export default App;

