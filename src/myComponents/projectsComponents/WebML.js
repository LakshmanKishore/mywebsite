import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import "../../App.css";

export const WebML = () => {
    let projects = [
        {
            "projectNumber": 0,
            "title": "Color Name Prediction",
            "github": "https://github.com/LakshmanKishore/colorNamePrediction",
            "live": "https://lakshman-colorname.herokuapp.com/",
            "image": "https://raw.githubusercontent.com/LakshmanKishore/colorNamePrediction/main/static/favicon.ico",
            "desc": "A Color Name prediciton application which gets the color Name of a particular region of the image.",
        },
        {
            "projectNumber": 1,
            "title": "Digit Recognition",
            "github": "https://github.com/LakshmanKishore/digitRecognition",
            "live": "https://lakshman-digitrecognition.surge.sh/",
            "image": "https://github.com/LakshmanKishore/digitRecognition/blob/main/favicon.jpeg?raw=true",
            "desc": "This is a Single Digit Recognition app. This is my first Neural Network project.",
        },
        {
            "projectNumber": 2,
            "title": "Loan Prediction",
            "github": "https://github.com/LakshmanKishore/loanPrediction",
            "live": "https://lakshman-loanprediction.herokuapp.com/",
            "image": "https://raw.githubusercontent.com/LakshmanKishore/loanPrediction/main/static/favicon.ico",
            "desc": "Loan Prediction app which takes input from user and predicts whether they will get Loan or not based on the trained Data.",
        },
        {
            "projectNumber": 3,
            "title": "Full battery Prediction",
            "github": "https://github.com/LakshmanKishore/fullBatteryPrediction",
            "live": "https://lakshman-loanprediction.herokuapp.com/",
            "image": "https://github.com/LakshmanKishore/fullBatteryPrediction/blob/main/batteryImage.png?raw=true",
            "desc": "This app was made to understand the concept of Linear Regression(Ordinary Least Square) algorithm.",
        },
        {
            "projectNumber": 4,
            "title": "Todo App",
            "github": "https://github.com/LakshmanKishore/todoApp",
            "live": "https://lakshman-todoapp.surge.sh/",
            "image": "https://github.com/LakshmanKishore/todoApp/blob/main/todo.jpg?raw=true",
            "desc": "A simple todo application with localStorage. Built for personal use and to learn about LocalStorage.",
        },
    ]
    return (
        <div className="container">
            <Container className="mt-4">
                <h3 align="center"> Web + Machine Learning projects </h3>
                <Row className="justify-content-center">
                    {projects.map(({ projectNumber, title, github, live, image, desc }) => {
                        return (
                            <Card bg="dark" className="mx-2 mb-3 cardStyle" key={projectNumber}>
                                <Card.Img className="cardImage" variant="top" src={image} alt="GameImage" />
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Text>{desc}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="outline-light" target="_blank" href={github} >
                                        <span className="iconify" data-icon="bi:github"></span> {" "}
                                        Github
                                    </Button>
                                    {"   "}
                                    <Button variant="outline-light" target="_blank" href={live} >
                                        <span className="iconify" data-icon="fluent:live-20-filled"></span> {" "}
                                        View Live
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
