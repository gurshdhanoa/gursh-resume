import gsap from "gsap";
import { useEffect } from "react";
import { render } from "@testing-library/react";
import React, { Component } from 'react';

import useAnimation from "./animation";


//initilization variables

function WorkHistory(props) {
    useAnimation(1.5, -60, ".text-container", ".container1")
    useAnimation(1.5, 60, ".logo", ".container1")
    return (
        <div className="container1 section fade-in-section is-visible" style={{backgroundColor: props.bgColor}}>
            <div className="">
                <div className="grid grid-cols-2 pt-18">
                    <img src={props.logos} className="logo object-none mx-auto"></img>
                    <div className="text-container pr-10 m-auto">
                        <h1 className="text-xl font-extrabold">
                            {props.jobDeets.companyName}
                        </h1>
                        <h2 className="text-xl font-extrabold">
                            {props.jobDeets.title}
                        </h2>
                        <h3 className="text-lg font-semibold">
                            {props.jobDeets.location}
                        </h3>
                        <h3 className="text-lg font-semibold">
                            {props.jobDeets.tenure}
                        </h3>
                        <ul className="pt-5 list-disc text-base font-semibold">
                            {props.workDeets.map(item => {
                            return <li>{item}</li>;
                            })}
                        </ul>   
                    </div>
                </div>
            </div>
        </div>
    ); 

}

export default WorkHistory;
// class WorkHistory extends React.Component {
//     state = {  } 

//     render() { 
//         useAnimationLeft()
//         useAnimationRight()
//         console.log(.props);
//         return (
//             <div className="section fade-in-section is-visible" style={{backgroundColor: .props.bgColor}}>
//                 <div className="">
//                     <div className="grid grid-cols-2 pt-18">
//                         <img src={.props.logos} className="logo object-none mx-auto"></img>
//                         <div className="text-container pr-10 m-auto">
//                             <h1 className="text-xl font-extrabold">
//                                 {.props.jobDeets.companyName}
//                             </h1>
//                             <h2 className="text-xl font-extrabold">
//                                 {.props.jobDeets.title}
//                             </h2>
//                             <h3 className="text-lg font-semibold">
//                                 {.props.jobDeets.location}
//                             </h3>
//                             <h3 className="text-lg font-semibold">
//                                 {.props.jobDeets.tenure}
//                             </h3>
//                             <ul className="pt-5 list-disc text-base font-semibold">
//                             {.props.workDeets.map(item => {
//                                 return <li>{item}</li>;
//                                 })}
//                             </ul>   
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
 
// export default WorkHistory;