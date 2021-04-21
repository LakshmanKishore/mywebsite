import { Button } from 'react-bootstrap'
import React from 'react'
import { Slides } from './Slides'

export const Works = () => {
    return (
        <div className="my-4">
            <h1>My Works</h1>
            <div className="mt-3">
                <h2>Games</h2>
                <p>I love building mini games ,
                each game will have its own game logic which makes me learn more things.</p>
                <p>
                    My first game was TIC-TAC-TOE.
                    It was fun building it and
                    I have also built other games like flappybird, old Nokia mobile Snakegame and much more.
                </p>
                <div className="text-center">
                    <img src="/tictactoehome.png" alt="Tic-Tac-Toe_image" />
                </div>
                <div className="text-center pt-2">
                    <Button variant="secondary" href="/games">More Games</Button>
                </div>
            </div>
            <div className="mt-3">
                <h2>Insectphotography</h2>
                <p>I have a mini garden where many insects live.</p>
                <p>
                    When I see any insect,
                    I quickly take photo of it and
                    use google lens and find some interesting names.
                </p>
                <Slides />
                <div className="text-center pt-2">
                    <Button variant="secondary" href="/insectphotography">More Insect Photos</Button>
                </div>
            </div>
        </div>
    )
}
