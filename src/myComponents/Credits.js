import React from 'react';
import "../App.css";
import { Image } from 'react-bootstrap';

export const Credits = () => {
    return (
        <div className="homePage pt-3">
            <div>
                <div className="h1 my-0 heading">
                    Credits... 🙇
                    <span></span>
                </div>
                <hr />
                <div>
                    <p>
                        Just want to say thanks to everyone and every service in this list..
                    </p>
                    <p>
                        This site wouldn't be possible (or would take me more time to build) without their help and/or services.. 🙂
                    </p>
                </div>
                <ul>
                    <li>Developed with ❤️ using <a href="https://react.dev/" target='_blank' rel="noopener noreferrer">React</a></li>
                    <li>Styled with <a href="https://react-bootstrap.netlify.app/" target='_blank' rel="noopener noreferrer">React Bootstrap</a> </li>
                    <li>Icons powered by <a href="https://iconify.design/" target='_blank' rel="noopener noreferrer">Iconify</a> </li>
                    <li>Version controlled with <a href="https://git-scm.com/">Git</a> and hosted on <a href="https://github.com/LakshmanKishore/mywebsite" target='_blank' rel='noopener noreferrer'>GitHub</a></li>
                    <li>Deployed seamlessly with <a href="https://vercel.com/" target='_blank' rel="noopener noreferrer">Vercel</a></li>
                </ul>
            </div>
            <div className='pt-5'>
                {/* Got the svg image from https://www.wordclouds.com/ */}
                <Image className='w-100' src='wordcloud.svg' alt='Word Cloud' />
            </div>
        </div>
    )
}
