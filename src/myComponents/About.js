import React from 'react';
import { Image } from 'react-bootstrap';
import { Works } from './Works';

export const About = () => {
    return (
        <div>
            <div className="bg-black">
                <div className="homePage">
                    <div className="pb-4">
                        <h1 className="pt-4 heading">
                            About Me <span></span>
                        </h1>
                    </div>
                    <div className="d-md-flex">
                        <div className="aboutmePara">
                            <p>Hello, My name is Lakshman.</p>
                            <p>
                                I'm an Undergraduate Student in Information Science Engineering(same as CS) from India.
                                I was introduced to programming in my Pre-University.
                                My first ever programming Language was C++.
                                I had Studied C++ for almost 2 years in my Pre-University.
                            </p>
                            <p>
                                I'm more familiar with Javascript, Python and Java programming Languages.
                                I have an intermediate level knowledge in <b> Web Development </b> and <b>Machine Learning</b>.
                                I learnt React and React Native after my Web Development course.
                                I learnt Flask and used it to link the ML models into the Web.
                            </p>

                            <p>
                                I usually spend my free time in :
                            </p>
                            <ul>
                                <li><p>Building some mini Games.</p></li>
                                <li><p>Take some Insect Photos.</p></li>
                                <li><p>Learn New Skill / Framework.</p></li>
                            </ul>
                        </div>

                        <div className="ml-md-3">
                            <Image className="aboutmeImage" src="/about.jpg" alt="About me Image" />
                        </div>
                    </div>
                </div>
            </div>
            <Works />
        </div>
    )
}
