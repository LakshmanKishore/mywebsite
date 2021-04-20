import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Singlegame } from './Singlegame';
import { GamesList } from './GamesList';

export const Games = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path={`/games/:singlegame/index.html`}>
                        <Singlegame />
                    </Route>
                    <Route path='/games/'>
                        <GamesList />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
