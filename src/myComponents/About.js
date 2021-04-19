import React from 'react';

export const About = () => {
    return (
        <div className="container">
            <div style={{ display: "flex" }}>
                <h1 className="pt-4">About Me</h1>
                <img src="/about-me.png" alt="About me" />
            </div>
            <p>I am Lakshman still studying.</p>
            <ul>
                <li>I'm a Math lover,</li>
                <li>I love building mini games and interested in Insectphotography.</li>
                <li>I like to learn and share my knowledge with many people.</li>
            </ul>
        </div>
    )
}
