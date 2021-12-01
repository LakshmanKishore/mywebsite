import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import "../../App.css";

export const ReactNative = () => {
    let projects = [
        {
            "projectNumber": 0,
            "title": "Random Number Generator",
            "github": "https://github.com/LakshmanKishore/randomNumber",
            "image": "https://github.com/LakshmanKishore/randomNumber/blob/main/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png?raw=true",
            "desc": "A Random Number generator mobile app with specified range.",
        },
        {
            "projectNumber": 1,
            "title": "Any Notification",
            "github": "https://github.com/LakshmanKishore/anyNotification",
            "image": "https://github.com/LakshmanKishore/anyNotification/blob/main/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png?raw=true",
            "desc": "A Notification mobile app, built for my personal use and to learn ReactNative.",
        },
    ]
    return (
        <div className="container">
            <Container className="mt-4">
                <h4 align="center" style={{opacity:"0.7"}}> React Native Apps </h4>
                <Row className="justify-content-center">
                    {projects.map(({ projectNumber, title, github, image, desc }) => {
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
                                </Card.Footer>
                            </Card>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}
