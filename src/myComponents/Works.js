import { Button } from 'react-bootstrap'
import React from 'react'
import { Slides } from './Slides'

export const Works = () => {
    return (
        <div className="my-4">
            <h1>My Works</h1>
            <div className="mt-3 d-sm-block d-lg-flex d-xl-flex d-md-flex">
                <div>
                    <h2>Games</h2>
                    <p>I love building mini games ,
                each game will have its own game logic which makes me learn more things.</p>
                    <p>
                        My first game was <a href="/games">TIC-TAC-TOE</a>.
                    It was fun building it and
                    I have also built other games like <a href="/games">flappybird</a>, old Nokia mobile <a href="/games">Snakegame</a> and much more.
                </p>
                </div>
                <div>
                    <div className="text-center">
                        <a href="/games">
                            <img src="/tictactoehome.png" style={{ borderRadius: "10%" }} alt="Tic-Tac-Toe_image" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center pt-2">
                <Button variant="secondary" href="/games">More Games</Button>
            </div>
            <h2>Insectphotography</h2>
            <div className="mt-3 d-md-flex d-sm-block flex-row-reverse">
                <div className="mr-auto p-2">
                    <p>I have a mini garden where many insects come and go.</p>
                    <p>
                        When I see any rare insect,
                    </p>
                    <p>
                        I quickly take a photo of it,
                        cause the probability of finding and seeing the similar insect is very low.
                    </p>
                </div>
                <div>
                    <Slides />
                </div>
            </div>
            <div className="text-center pt-2 ">
                <Button variant="secondary" href="/insectphotography">More Insect Photos</Button>
            </div>
        </div>
    )
}
