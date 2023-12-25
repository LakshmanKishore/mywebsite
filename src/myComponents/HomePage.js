import React from 'react'
import { About } from './About'
import { GetInTouch } from './GetInTouch'
import { Welcome } from './Welcome'
import { Credits } from './Credits'

export const HomePage = () => {
    return (
        <div>
            <Welcome />
            <About />
            <Credits />
            <GetInTouch />
        </div>
    )
}
