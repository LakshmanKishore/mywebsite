import React from 'react'
import { SocialLinks } from './SocialLinks'

export const Leftbar = () => {
    return (
        <div className="leftbar d-none d-lg-block">
            <div className="bg-black">
                <SocialLinks ulClassNames="leftbarul" />
            </div>
        </div>
    )
}
