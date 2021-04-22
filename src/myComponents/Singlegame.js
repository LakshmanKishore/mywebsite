import React from 'react';
import {
    useParams
} from "react-router-dom";

export const Singlegame = () => {
    let { singlegame } = useParams();
    return (
        <div>
            <h3>Redirecting to:</h3>
            <h2>{singlegame.toUpperCase()} Game</h2>
            {window.location.reload()}
        </div>
    )
}
