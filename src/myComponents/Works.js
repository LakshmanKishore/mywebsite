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
                        My Works
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
                                I am passionate about web development and Machine Learning.
                                I have built some mini projects based on web and ML.
                                I have posted all my mini projects on Github and hosted most of the projects live.
                                Click the below button to see more of my projects.
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
                            <p>I love building mini games ,
                                each game will have its own game logic which makes me learn more things.</p>
                            <p>
                                My first game was TIC-TAC-TOE.
                                It was fun building it and
                                I have also built other games like flappybird,
                                old Nokia mobile Snakegame and much more.
                                Click the below button to see more of my games.
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
                                I have a mini garden where many insects come and go.
                                So whenever I see one, I quickly take a photo of that.
                            </p>
                            <p>
                                I have collected more than 50 different types of insect photos.
                                Click the below button to see some of my photos.
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
                            <p>I did some NPTEL certifications with my engineering course to enhance knowledge in various fields.</p>
                            <p>I also got a Data Science Domain Certificate from NPTEL for completing courses in that particular field.</p>
                            <div className="d-flex justify-content-center justify-content-md-start pb-2">
                                <Button variant="outline-light" href="/certifications">View Certificates</Button>
                            </div>
                        </div>
                        <div>
                            <div className="text-center">
                                <a href="/games">
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
