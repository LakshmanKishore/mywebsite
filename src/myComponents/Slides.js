import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../App.css';

export const Slides = () => {
    return (
        <div align="center">
            <Carousel className="responsive" fade interval={2500} >
                <Carousel.Item>
                    <a href="/insectphotography">
                        <img
                            className="d-block responsive"
                            src="/insects1/1.jpg"
                            alt="First slide"
                        />
                    </a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="/insectphotography">
                        <img
                            className="d-block responsive"
                            src="/insects1/6.jpg"
                            alt="Second slide"
                        />
                    </a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="/insectphotography">
                        <img
                            className="d-block responsive"
                            src="/insects1/14.jpg"
                            alt="Third slide"
                        />
                    </a>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
