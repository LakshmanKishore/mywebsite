import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'


export const GamesList = () => {
    let game = [
        {
            "gameNumber": 1,
            "title": "Tic-Tac-Toe",
            "desc": "This was my first game and it is a 2 player game",
        },
        {
            "gameNumber": 2,
            "title": "Minesweeper",
            "desc": "I used '#' as mines so be aware of it!",
        },
        {
            "gameNumber": 3,
            "title": "SnakeGame",
            "desc": "Play the classic mobile Snake game.Eat the food but don't hit your own tail",
        },
        {
            "gameNumber": 4,
            "title": "flappybird",
            "desc": "I use circle as bird and rectangles as pipes.Dont touch the rectangles!",
        },
        {
            "gameNumber": 5,
            "title": "Escape",
            "desc": "Move the square to top without touching the circles",
        }
    ]
    return (
        <div>
            <h1 className="text-center mt-3">My Games</h1>
            <Container className="mt-5">
                <Row>
                    {game.map(({ gameNumber, title, desc }) => {
                        return (
                            <LinkContainer className="mx-2 mb-3" key={gameNumber} to={`/games/${title.toLowerCase()}`} style={{ width: '18rem' }}>
                                <Card>
                                    <Card.Img variant="top" src={`/gameImages/${title.toLowerCase()}.png`} alt="GameImage" />
                                    <Card.Body>
                                        <Card.Title>{title}</Card.Title>
                                        <Card.Text>{desc}</Card.Text>
                                        <Button variant="outline-success" href={`/games/${title.toLowerCase()}`}>Play Game</Button>
                                    </Card.Body>
                                </Card>
                            </LinkContainer>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}
