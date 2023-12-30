import React from 'react'
import "../App.css";
import { SocialLinkItem } from './SocialLinkItem';

export const SocialLinks = ({ ulClassNames, liClassNames }) => {
    return (
        <ul className={ulClassNames}>
            <SocialLinkItem liClassNames={liClassNames} name="GitHub" href="https://github.com/LakshmanKishore" icon="eva:github-outline" />
            <SocialLinkItem liClassNames={liClassNames} name="Mail" href="mailto:lakshmankishore17@gmail.com" icon="feather:mail" />
            <SocialLinkItem liClassNames={liClassNames} name="Codepen" href="https://codepen.io/Lakshman17/" icon="simple-icons:codepen" />
            <SocialLinkItem liClassNames={liClassNames} name="Sololearn" href="https://www.sololearn.com/profile/15282029" icon="simple-icons:sololearn" />
            <SocialLinkItem liClassNames={liClassNames} name="Codewars" href="https://www.codewars.com/users/Lakshman321" icon="cib:codewars" />
            <SocialLinkItem liClassNames={liClassNames} name="LinkedIn" href="https://www.linkedin.com/in/lakshman-kishore-s-v-43a980224" icon="eva:linkedin-outline" />
            <SocialLinkItem liClassNames={liClassNames} name="Twitter/X" href="https://twitter.com/Lakshman_2001" icon="pajamas:twitter" />
        </ul>
    )
}
