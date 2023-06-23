import React from 'react';
import Personal from './components/Personal.js';
import Wellchat from './components/Wellchat.js';
import Vetster from './components/Vetster.js';
import Snap from './components/Snap';
import Telus from './components/Telus';
import Portrait from './components/Portrait';

function App () {
  return ( 
    <div className={'container'}>
      <div className="child"><Personal/></div>
      <div className="child"><Wellchat/></div>
      <div className="child"><Vetster/></div>
      <div className="child"><Snap /></div>
      <div className="child"><Telus/></div> 
      <div className="child"><Portrait /></div>
    </div>
   );
}

export default App;

