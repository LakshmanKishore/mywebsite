import React from 'react'
import "../App.css";

export const Footer = () => {
    let d = new Date();
    let currentYear = d.getFullYear();
    return (
        <div align="center" className="pb-4">
            <footer>
                <p>You can find me here</p>
                <div>
                    <a href="mailto:lakshmankishore17@gmail.com">
                        <span className="iconify icons" data-icon="bytesize:mail" data-inline="false"></span>
                    </a>
                    <a href="https://github.com/LakshmanKishore">
                        <span className="iconify icons" data-icon="akar-icons:github-fill" data-inline="false"></span>
                    </a>
                    <a href="https://www.sololearn.com/profile/15282029">
                        <span className="iconify icons" data-icon="simple-icons:sololearn" data-inline="false"></span>
                    </a>
                    <a href="https://www.codewars.com/users/Lakshman321">
                        <span className="iconify icons" data-icon="simple-icons:codewars" data-inline="false"></span>
                    </a>
                </div>
                <small>Copyright &copy; {currentYear} Lakshman</small>
            </footer>
        </div>
    )
}
