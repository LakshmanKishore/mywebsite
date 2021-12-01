import React from 'react'
import { About } from './About'
import { GetInTouch } from './GetInTouch'
import { Welcome } from './Welcome'

export const HomePage = () => {
    return (
        <div>
            <Welcome />
            <About />
            <GetInTouch />
        </div>
    )
}
