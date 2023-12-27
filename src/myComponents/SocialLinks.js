import React from 'react'
import "../App.css";

export const SocialLinks = ({ulClassNames, liClassNames}) => {
    return (
        <ul className={ulClassNames}>
            <li className={liClassNames}>
                <a href="https://github.com/LakshmanKishore">
                    <span className="iconify icons" data-icon="eva:github-outline" data-inline="false"></span>
                </a>
            </li>
            <li className={liClassNames}>
                <a href="mailto:lakshmankishore17@gmail.com">
                    <span className="iconify icons" data-icon="feather:mail" data-inline="false"></span>
                </a>
            </li>
            <li className={liClassNames}>
                <a href="https://codepen.io/Lakshman17/">
                    <span className="iconify icons" data-icon="simple-icons:codepen" data-inline="false"></span>
                </a>
            </li>
            <li className={liClassNames}>
                <a href="https://www.sololearn.com/profile/15282029">
                    <span className="iconify icons" data-icon="simple-icons:sololearn" data-inline="false"></span>
                </a>
            </li>
            <li className={liClassNames}>
                <a href="https://www.codewars.com/users/Lakshman321">
                    <span className="iconify icons" data-icon="cib:codewars" data-inline="false"></span>
                </a>
            </li>
            <li className={liClassNames}>
                <a href="https://www.linkedin.com/in/lakshman-kishore-s-v-43a980224">
                    <span className="iconify icons" data-icon="eva:linkedin-outline" data-inline="false"></span>
                </a>
            </li>
            <li className={liClassNames}>
                <a href="https://twitter.com/Lakshman_2001">
                    <span className="iconify icons" data-icon="pajamas:twitter" data-inline="false"></span>
                </a>
            </li>
        </ul>
    )
}
