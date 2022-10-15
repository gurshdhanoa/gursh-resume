import React, { Component } from 'react';


function WorkHistory(props) {

    return (
        <div className={`${props.mainContainer} section fade-in-section is-visible`} style={{backgroundColor: props.bgColor}}>
            <div className="">
                <div className="grid grid-cols-2 pt-18">
                    <img src={props.logos} className={`${props.logoContainer} object-none mx-auto`}></img>
                    <div className={`${props.textContainer} pr-10 m-auto ${props.textColor}`}>
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