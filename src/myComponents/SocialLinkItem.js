import React from 'react'
import "../App.css";

export const SocialLinkItem = ({ liClassNames, name, href, icon }) => {
    return (
        <li className={liClassNames}>
            <a href={href} target="_blank" rel="noreferrer">
                <span className="iconify icons" data-icon={icon} data-inline="false"></span>
                <span className="sr-only">{name}</span>
            </a>
        </li>
    )
}
