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
                        src="/insects1/6.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block responsive"
                        src="/insects1/14.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
