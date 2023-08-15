import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Card from 'react-bootstrap/Card';
import '../App.css';

export const Insect = () => {
    let a = [];
    for (let index = 0; index < 15; index++) {
        a[index] = index + 1;
    }
    return (
        <div className="bg-black2">
            <div className="container">
                <div className="routeHeading">
                    Insectphotography
                </div>
                <p className="mb-0 mt-4">Welcome to my insect photography page!</p>
                <p className="mb-0">
                    I am a passionate insect photographer who takes stunning photos of insects with my Realme 3 pro mobile phone. The 10x zoom on my phone allows me to capture even the smallest details of insects, and I am often asked if my photos are real.
                </p>
                <p className="mb-0">
                    I have been taking insect photos for many years, and I have a deep appreciation for the beauty and diversity of these creatures. I hope you enjoy my photos
                </p>
                <p>
                    Below images are some my samples, to see my Insectphotography album click <a href='https://photos.app.goo.gl/vLitde2QnuHMoFuz7' target="_blank">here</a>.
                </p>
                <br />
                <Container>
                    <Row className="justify-content-center">
                        {a.map((index) => {
                            return (
                                <Card key={index}>
                                    <Card.Img className="responsive" variant="top" src={`/insects1/${index}.jpg`} alt="GameImage" />
                                </Card>
                            )
                        })}
                    </Row>
                    <Row className="justify-content-center">
                        {a.map((index) => {
                            return (
                                <Card key={index}>
                                    <Card.Img className="responsive" variant="top" src={`/insects2/${index}.jpg`} alt="GameImage" />
                                </Card>
                            )
                        })}
                    </Row>
                    <br />
                </Container>
            </div>
        </div>
    )
}
