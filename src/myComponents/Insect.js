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
        <div className="container">
            <div className="responsiveInsectText">
                    -<span className="iconify" data-icon="ant-design:star-outlined"></span>-
                    Insectphotography
                    -<span className="iconify" data-icon="ant-design:star-outlined"></span>-
                </div>
            <p className="mb-0 mt-4">Welcome to my insectphotography page.</p>
            <p className="mb-0">I use Realme 3 pro mobile to take insect photos.Its 10x zoom makes the insects big!</p>
            <p className="mb-0">Here are some of the photos</p>
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
    )
}
