import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import "../App.css";

export const GamesList = () => {
    let games = [
        {
            "gameNumber": 10,
            "title": "Alquerque",
            "github": "https://github.com/LakshmanKishore/alquerque",
            "live": "https://dev.js13kgames.com/2023/games/alquerque",
            "image": "https://raw.githubusercontent.com/LakshmanKishore/alquerque/main/images/battle.svg",
            "desc": "This was an Entry to 2023 js13kgames competition, which got 72nd position out of 163 submissions.",
        },
        {
            "gameNumber": 0,
            "title": "Space",
            "github": "https://github.com/LakshmanKishore/space",
            "live": "https://dev.js13kgames.com/2021/games/space-game",
            "image": "https://raw.githubusercontent.com/LakshmanKishore/space/main/favicon.ico",
            "desc": "This was an Entry to 2021 js13kgames competition.",
        },
        {
            "gameNumber": 1,
            "title": "Tic-Tac-Toe",
            "github": "https://github.com/LakshmanKishore/tic-tac-toe",
            "live": "https://lakshman-tic-tac-toe.surge.sh/",
            "image": "https://github.com/LakshmanKishore/tic-tac-toe/blob/main/tic-tac-toe.png?raw=true",
            "desc": "This was my first game and it is a 2 player game.",
        },
        {
            "gameNumber": 2,
            "title": "Minesweeper",
            "github": "https://github.com/LakshmanKishore/minesweeper",
            "live": "https://lakshman-minesweeper.surge.sh/",
            "image": "https://github.com/LakshmanKishore/minesweeper/blob/main/minesweeper.png?raw=true",
            "desc": "I used '#' as mines so be aware of it!",
        },
        {
            "gameNumber": 3,
            "title": "SnakeGame",
            "github": "https://github.com/LakshmanKishore/snakegame",
            "live": "https://lakshman-snakegame.surge.sh/",
            "image": "https://github.com/LakshmanKishore/snakegame/blob/main/snakegame.png?raw=true",
            "desc": "Play the classic mobile Snake game.Eat the food but don't hit your own tail.",
        },
        {
            "gameNumber": 4,
            "title": "Flappybird",
            "github": "https://github.com/LakshmanKishore/flappybird",
            "live": "https://lakshman-flappybird.surge.sh/",
            "image": "https://github.com/LakshmanKishore/flappybird/blob/main/flappybird.png?raw=true",
            "desc": "I use circle as bird and rectangles as pipes.Dont touch the rectangles!",
        },
        {
            "gameNumber": 5,
            "title": "Escape",
            "github": "https://github.com/LakshmanKishore/escape",
            "live": "https://lakshman-escape.surge.sh/",
            "image": "https://github.com/LakshmanKishore/escape/blob/main/escape.png?raw=true",
            "desc": "Move the square to top without touching the circles.",
        },
        {
            "gameNumber": 6,
            "title": "Numberclick",
            "github": "https://github.com/LakshmanKishore/numberclick",
            "live": "https://lakshman-numberclick.surge.sh/",
            "image": "https://github.com/LakshmanKishore/numberclick/blob/main/numberclick.png?raw=true",
            "desc": "This game test how fast you can click those numbers on screen.",
        },
        {
            "gameNumber": 7,
            "title": "Ninja Jump",
            "github": "https://github.com/LakshmanKishore/ninjaJump",
            "live": "https://lakshman-ninjajump.surge.sh/",
            "image": "https://github.com/LakshmanKishore/ninjaJump/blob/main/favicon.png?raw=true",
            "desc": "A simple clone of Ninja Jump game that was built under 3 hours",
        },
        {
            "gameNumber": 8,
            "title": "Pong",
            "github": "https://github.com/LakshmanKishore/pong",
            "live": "https://lakshman-pong.surge.sh/",
            "image": "https://github.com/LakshmanKishore/pong/blob/main/favicon.png?raw=true",
            "desc": "A simple clone of the famous game called Pong, that was built under 4 hours",
        },
        {
            "gameNumber": 9,
            "title": "Lost Bird",
            "github": "https://github.com/LakshmanKishore/lostBird",
            "live": "https://lakshman-lostbird.surge.sh/",
            "image": "https://github.com/LakshmanKishore/lostBird/blob/main/favicon.png?raw=true",
            "desc": "A clone of lumosity's (lost in migration) brain game.",
        }
    ]
    return (
        <div className="bg-black2">
            <div className="routeHeading">
                My Games
            </div>
            <Container className="mt-3">
                <Row className="justify-content-center">
                    {games.map(({ gameNumber, title, github, live, image, desc }) => {
                        return (
                            <Card bg="dark" className="mx-2 mb-3 cardStyle" key={gameNumber}>
                                <Card.Img variant="top" src={image} alt="GameImage" style={gameNumber===10?{background:"#dfd8c8"}:null} />
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Text>{desc}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="outline-light" target="_blank" rel="noopener noreferrer" href={github} >
                                        <span className="iconify" data-icon="bi:github"></span> {" "}
                                        Github
                                    </Button>
                                    {"   "}
                                    <Button variant="outline-light" target="_blank" rel="noopener noreferrer" href={live} >
                                        <span className="iconify" data-icon="fluent:live-20-filled"></span> {" "}
                                        Play Game
                                    </Button>
                                </Card.Footer>
                            </Card>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

