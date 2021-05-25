import React from 'react'
import "../App.css";
import { Icon } from '@iconify/react';
import sololearnIcon from '@iconify-icons/simple-icons/sololearn';
import codewarsIcon from '@iconify-icons/simple-icons/codewars';

export const Footer = () => {
    return (
        <div align="center" className="pb-4">
            <footer>
                <p>You can find me here</p>
                <div>
                    <a href="https://github.com/LakshmanKishore" className="fa fa-github" />
                    <a href="https://lakshmankishore17@gmail.com" className="fa fa-envelope" />
                    <a href="https://www.sololearn.com/profile/15282029"><Icon className="icons" icon={sololearnIcon} /></a>
                    <a href="https://www.codewars.com/users/Lakshman321"><Icon className="icons" icon={codewarsIcon} /></a>
                </div>
                <small>Copyright © 2021 Lakshman</small>
            </footer>
        </div>
    )
}
