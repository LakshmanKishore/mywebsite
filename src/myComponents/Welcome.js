import React from 'react'
import { Image } from 'react-bootstrap';
import '../App.css';
import { Particlesjs } from './Particlesjs';

export const Welcome = () => {
    return (
        <div className="homePage">
            <Particlesjs />
            <div className="welcomeDiv">
                <div className="welcomeText" >
                    <Image className="studentImage" src="/student-laptop.png" />
                    <h2> Hi, I'm Lakshman </h2>
                    <h2> Welcome to my Portfolio! </h2>
                </div>
            </div>
        </div>
    )
}
