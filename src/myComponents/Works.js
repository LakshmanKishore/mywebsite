import { Button } from 'react-bootstrap'
import React from 'react'

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
                <Button variant="secondary" href="/games" className="justify-content-center">More Games</Button>
            </div>
        </div>
    )
}
