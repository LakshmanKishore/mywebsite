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
                            <p>
                                I am a software engineer with a degree in Information Science and Engineering. I have experience working on a variety of projects, including web applications and machine learning. I am proficient in a variety of programming languages, including Python, JavaScript and Java. I am also familiar with a variety of technologies, including machine learning, data science, and web development.
                            </p>
                            <p>
                                I am passionate about software engineering and I love to build innovative solutions. I am always looking for new challenges and I am never afraid to learn new things. I am also a team player and I am always willing to help others.
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
