import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import '../App.css';

export const Welcome = () => {
    return (
        <div>
            {/* d2414b */}
            <Jumbotron fluid style={{backgroundColor:'white'}} className="mb-2 pb-3">
                <Container>
                    <h1>Hi, I'm Lakshman,
                     an enthusiastic learner always looking for self improvement.</h1>
                    <p>
                        Welcome to my website.
                        This was created to showcase some of my mini games and Insectphotography.
                    </p>
                </Container>
            </Jumbotron>
        </div>
    )
}
