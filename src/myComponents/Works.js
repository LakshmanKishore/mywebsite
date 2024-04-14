import { Button, Image } from 'react-bootstrap'
import React from 'react'
import { Slides } from './Slides'

export const Works = () => {
    return (
        <div className="homePage">
            <div className="bg-black">
                <br />
                <div align="center" className="">
                    <h1 className="heading">
                        My Works ...
                        <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#007bff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H3V8C3 6.89543 3.89543 6 5 6H9M4 12V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V12M4 12H10M20 12H21V8C21 6.89543 20.1046 6 19 6H15M20 12H14M14 12V10H10V12M14 12V14H10V12M9 6V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V6M9 6H15" stroke="#007bff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        <span></span>
                    </h1>
                </div>
                <br />
            </div>

            <div className="bg-black">
                <div className=" py-4">
                    <h2 className="mb-3">Projects</h2>
                    <div className="d-md-flex d-sm-block flex-row-reverse">
                        <div className="ml-3">
                            <p>
                                I am passionate about web development and machine learning. I have built some mini projects based on web and ML, which I have posted all on Github and hosted most of the projects live. These projects have helped me learn new things and grow as a software engineer.
                            </p>
                            <div className="d-flex justify-content-center justify-content-md-start pb-2">
                                <Button variant="outline-light" href="/projects">More Projects</Button>
                            </div>
                        </div>
                        <div>
                            <a href="/projects">
                                <Image className="projectImage" style={{ borderRadius: "10%" }} src="/projectImage.jpg" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-3 bg-black">
                <div className=" py-4">
                    <div className="mt-3 d-sm-block d-lg-flex d-xl-flex d-md-flex">
                        <div>
                            <h2 className="mb-3">Games</h2>
                            <p>
                                I love building mini games, each with its own unique game logic. This helps me learn new things and improve my coding skills. My first game was TIC-TAC-TOE, and I have also built other games like flappybird, the old Nokia mobile Snakegame, and much more. You can click the button below to check out more of my games!
                            </p>
                            <div className="d-flex justify-content-center justify-content-md-start pb-2">
                                <Button variant="outline-light" href="/games">More Games</Button>
                            </div>
                        </div>
                        <div>
                            <div className="text-center">
                                <a href="/games">
                                    <Image className='ml-2 mt-5' src="/tictactoehome.png" style={{ borderRadius: "10%" }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-3 bg-black">
                <div className=" py-4">
                    <h2 className="mb-3">Insectphotography</h2>
                    <div className="mt-3 d-md-flex d-sm-block flex-row-reverse">
                        <div className="mr-auto p-2">
                            <p>
                                I have a mini garden where many insects come and go. I enjoy taking photos of them with my mobile phone, and I have collected more than 50 different types of insect photos. I am often asked if I took all of the photos with my phone, as they are of such high quality. You can click the button below to see some of my photos.
                            </p>
                            <div className="d-flex justify-content-center justify-content-md-start pb-2">
                                <Button variant="outline-light" href="/insectphotography">More Insect Photos</Button>
                            </div>
                        </div>
                        <div>
                            <Slides />
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-3 bg-black">
                <div className=" py-4">
                    <div className="mt-3 d-sm-block d-lg-flex d-xl-flex d-md-flex">
                        <div>
                            <h2 className="mb-3">Certifications</h2>
                            <p>
                                I am a lifelong learner and I am always looking for ways to enhance my knowledge and skills. During my engineering coursework, I completed several NPTEL certifications in different fields, including data science. I am also a proud recipient of the Data Science Domain Certificate from NPTEL, which demonstrates my expertise in that field.
                            </p>
                            <div className="d-flex justify-content-center justify-content-md-start pb-2">
                                <Button variant="outline-light" href="/certifications">View Certificates</Button>
                            </div>
                        </div>
                        <div>
                            <div className="text-center">
                                <a href="/certifications">
                                    <Image className='ml-2 mt-5' src="/certificate.png" alt="Certificate Image" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
