import React from 'react'

export const Leftbar = () => {
    return (
        <div className="leftbar d-none d-lg-block">
            <div className="bg-black">
                <ul className="leftbarul">
                    <li>
                        <a href="https://github.com/LakshmanKishore">
                            <span className="iconify icons" data-icon="eva:github-outline" data-inline="false"></span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.sololearn.com/profile/15282029">
                            <span className="iconify icons" data-icon="simple-icons:sololearn" data-inline="false"></span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.codewars.com/users/Lakshman321">
                            <span className="iconify icons" data-icon="cib:codewars" data-inline="false"></span>
                        </a>
                    </li>
                    <li>
                        <a href="https://leetcode.com/Lakshman_kishore/">
                            <span className="iconify icons" data-icon="cib:leetcode" data-inline="false"></span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/lakshman-kishore-s-v-43a980224">
                        <span className="iconify icons" data-icon="eva:linkedin-outline" data-inline="false"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
