import React from 'react'
import { Image } from 'react-bootstrap';
import '../App.css';

export const Welcome = () => {
    return (
        <div className="bg-black homePage">
            <div className="pt-3">
                <h5 className="mb-2" style={{ color: "#007bff" }}>Hi, my name is</h5>
                <h1 className="big-heading">Lakshman.</h1>
                <h3 className="big-sub-heading" style={{ color: "#636e78" }}>Welcome to my Website.</h3>
                <p className="welcomePara">
                    I'm an Undergraduate Student in Computer Science field.
                    I Love Building things using my knowledge.
                    I love to learn more about new technologies.
                </p>
                <div className="d-flex justify-content-end">
                    <Image className="customhero mr-sm-3" src="customhero.png" />
                </div>
            </div>
        </div>
    )
}
