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
            "live": false,
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
            "live": false,
            "image": "https://raw.githubusercontent.com/LakshmanKishore/loanPrediction/main/static/favicon.ico",
            "desc": "Loan Prediction app which takes input from user and predicts whether they will get Loan or not based on the trained Data.",
        },
        {
            "projectNumber": 3,
            "title": "Iris Classification",
            "github": "https://github.com/LakshmanKishore/irisClassification",
            "live": false,
            "image": "https://raw.githubusercontent.com/LakshmanKishore/irisClassification/main/static/SETOSA.png",
            "desc": "A simple end to end ML application for iris flower name classification.",
        },
        {
            "projectNumber": 4,
            "title": "Todo App",
            "github": "https://github.com/LakshmanKishore/todoApp",
            "live": "https://lakshman-todoapp.surge.sh/",
            "image": "https://github.com/LakshmanKishore/todoApp/blob/main/todo.jpg?raw=true",
            "desc": "A simple todo application with localStorage. Built for personal use and to learn about LocalStorage.",
        },
        {
            "projectNumber": 5,
            "title": "Movie Database Management System",
            "github": "https://github.com/LakshmanKishore/dbms-mini-project",
            "live": false,
            "image": "/movieImage.jpg",
            "desc": "A mini project on Database management system for academics.",
        },
    ]
    return (
        <div className="container">
            <Container className="mt-4">
                <h4 align="center" style={{opacity:"0.7"}}> Web + Machine Learning projects </h4>
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
                                    {live?
                                    <Button variant="outline-light" target="_blank" href={live} >
                                        <span className="iconify" data-icon="fluent:live-20-filled"></span> {" "}
                                        View Live
                                    </Button>
                                    :null}
                                </Card.Footer>
                            </Card>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}
