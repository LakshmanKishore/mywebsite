import React from 'react'
import "../App.css";

export const Footer = () => {
    let d = new Date();
    let currentYear = d.getFullYear();
    return (
        <div align="center" className="py-4 footer-div">
            <footer>
                <div className="d-lg-none">
                    <p className="mb-0">You can find me here</p>
                    <div>
                        <a href="mailto:lakshmankishore17@gmail.com">
                            <span className="iconify icons" data-icon="feather:mail" data-inline="false"></span>
                        </a>
                        <a href="https://github.com/LakshmanKishore">
                            <span className="iconify icons" data-icon="eva:github-outline" data-inline="false"></span>
                        </a>
                        <a href="https://www.sololearn.com/profile/15282029">
                            <span className="iconify icons" data-icon="simple-icons:sololearn" data-inline="false"></span>
                        </a>
                        <a href="https://www.codewars.com/users/Lakshman321">
                            <span className="iconify icons" data-icon="cib:codewars" data-inline="false"></span>
                        </a>
                        <a href="https://leetcode.com/Lakshman_kishore/">
                            <span className="iconify icons" data-icon="cib:leetcode" data-inline="false"></span>
                        </a>
                        <a href="https://www.linkedin.com/in/lakshman-kishore-s-v-43a980224">
                            <span className="iconify icons" data-icon="eva:linkedin-outline" data-inline="false"></span>
                        </a>
                    </div>
                </div>
                <small>Copyright &copy; {currentYear} Lakshman</small>
            </footer>
        </div>
    )
}
