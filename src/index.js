import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Snap from './components/Snap.js';
import Personal from './components/Personal.js';
import Telus from './components/Telus.js';
import Footer from './Footer.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='scroll-container'>
      <Personal/>
      <Snap/>
      <Telus/>
      <Footer/>
    </div>
  </React.StrictMode>
);

// const containerRef = useRef(null)
// const [ isVisible, setIsVisible ] = useState(false)

// const callbackFunction  = (entries) => {
//   const [entry] = entries
//   setIsVisible(entry.isIntersecting)
// }

// const options = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 1.0
// }

// useEffect(() => {

//   const observer = new IntersectionObserver(callbackFunction, options)
//   if (containerRef.current)observer.observe(containerRef.current)

//   return() => {
//     if(containerRef.current) observer.unobserve(containerRef.current)
//   }
// }, [containerRef, options])

// // return (
// //   <div className='app'>
// //     <div className='isVisible'>{isVisible ? "IN VIEWPORT" : "NOT IN VIEWPORT"}</div>
// //     <div className="section"></div>
// //     <div className='box' ref={containerRef}>Observe me</div>
// //   </div>
// // );


// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

