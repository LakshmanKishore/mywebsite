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
                    I am a software engineer with a passion for learning, innovation, and open source. I am always excited to experiment with new technologies and to learn new ways to grow my skills.
                </p>
                <div className="d-flex justify-content-end">
                    <Image className="customhero mr-sm-3" src="customhero.png" />
                </div>
            </div>
        </div>
    )
}
