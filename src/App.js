import logo from './logo.svg';
import './App.css';


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
    <div className="App scroll-container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


//