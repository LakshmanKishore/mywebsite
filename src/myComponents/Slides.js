import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../App.css';

export const Slides = () => {
    return (
        <div align="center">
            <Carousel className="responsive" fade interval={2000} >
                <Carousel.Item>
                    <img
                        className="d-block responsive"
                        src="/insects1/1.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block responsive"
                        src="/insects1/2.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block responsive"
                        src="/insects1/3.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <a variant="primary" href="/insectphotography">Click here for more</a>
        </div>
    )
}
