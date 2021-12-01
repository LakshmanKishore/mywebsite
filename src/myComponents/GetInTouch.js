import React from 'react';
import "../App.css";

export const GetInTouch = () => {
    return (
        <div className="homePage justify-content-center align-items-center">
            <div align="center">
                <div className="h5 my-0">
                    What's Next?
                </div>
                <div className="getInTouch">
                    Get In Touch
                </div>
                <p style={{width:"90%"}}>
                    My inbox is always open. 
                    Whether you have a question or just want to say hi, 
                    I’ll try my best to get back to you!
                </p>
                <br />
                <a href="mailto:lakshmankishore17@gmail.com" className="helloButton">Say Hello</a>
            </div>
        </div>
    )
}
