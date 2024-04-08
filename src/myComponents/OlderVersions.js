import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import "../App.css";
import { Row, Col } from 'react-bootstrap';

export const OlderVersions = () => {
    const versions = [
        {
            version: 1,
            description: "Welcome to the first version of my website, a humble attempt at creating a portfolio during my student days. Admittedly, the design might make you cringe a bit (I know it does for me!), but hey, we all have to start somewhere, right? Consider this a glimpse into my early coding adventures and a reminder of how far I've come since then. Enjoy the trip down memory lane!",
        },
        {
            version: 2,
            description: "Added background image and featured my work on the homepage. Spent ages on CSS for responsive background and carousel.",
        },
        {

            version: 3,
            description: `Wasn't thrilled with the background image, so spent months searching for the perfect one. Finally stumbled upon "Abstract Background Dots Lines Network" and felt somewhat satisfied. Also, added a footer with my social links.`,
        },
        {
            version: 4,
            description: "Bid farewell to the background image as it still didn't meet my expectations. Discovered clipart featuring a man working on a laptop and decided to go for a simple black and white background instead.",
        },
        {
            version: 5,
            description: "Finally found inspiration for my portfolio design from <a href='https://brittanychiang.com/' target='_blank' rel='noopener noreferrer'>Brittany Chiang</a>. After browsing through countless websites, I was drawn to Brittany's design and decided to use it as a template for my own. Made some tweaks to personalize it. Big shoutout to Brittany for her amazing design, which served as the foundation for my portfolio!",
        }
    ]
    return (
        <Container fluid="md">
            <h2>Older Versions</h2>
            <p>Welcome to the Archive of Past Versions! Take a trip down memory lane and explore the evolution of my portfolio website. Each version represents a step in my journey as a developer, from humble beginnings to the current iteration. Enjoy reminiscing!</p>
            {versions.map(({version, description}) => (
                <Row key={version} className="py-3 mb-" xs={1} md={2} >
                    <Col md={4} >
                        <h4>{version}</h4>
                        <div dangerouslySetInnerHTML={{__html: description}} />
                    </Col>
                    <Col md={8}>
                        <img src={`/older-version-screenshots/version${`0${version}`.slice(-2)}.png`}
                            alt={`Version ${`0${version}`.slice(-2)}`}
                            style={{width: "100%", border: "1px solid white"}}
                        />
                    </Col>
                </Row>
            ))}
        </Container>
    )
}
