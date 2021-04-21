import React from 'react';
import { Works } from './Works';

export const About = () => {
    return (
        <div className="container">
            <div className="my-3">
                <div style={{ display: "flex" }}>
                    <h1 className="pt-4">About Me</h1>
                    <img src="/about-me.png" alt="About me" />
                </div>
                <p>I am Lakshman still studying.</p>
                <ul>
                    <li><p>I'm a Math lover.</p></li>
                    <li><p>I love building mini games and interested in Insectphotography.</p></li>
                    <li><p>I am good at C, Javascript, Python programming languages.</p></li>
                    <li><p>I like to learn and share my knowledge with many people.</p></li>
                </ul>
            </div>
            <hr />
            <Works />
        </div>
    )
}
