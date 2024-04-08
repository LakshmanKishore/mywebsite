import React from 'react'
import "../App.css";
import { SocialLinks } from './SocialLinks';

export const Footer = () => {
    let d = new Date();
    let currentYear = d.getFullYear();
    return (
        <div align="center" className="py-4 footer-div">
            <footer>
                <div className="d-lg-none">
                    <p className="mb-0">You can find me here</p>
                    <SocialLinks ulClassNames="m-0 p-0" liClassNames="d-inline" />
                </div>
                <small>Copyright &copy; {currentYear} Lakshman | Made with ❤️</small>
                <br></br>
                <a href="/older-versions">View Older Versions</a>
            </footer>
        </div>
    )
}
