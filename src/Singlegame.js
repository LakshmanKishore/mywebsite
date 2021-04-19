import React from 'react';
import {
    useParams
} from "react-router-dom";

export const Singlegame = () => {
    let { singlegame } = useParams();
    return (
        <div>
            {/* <h3>Requested Game: {singlegame}</h3> */}
            <h3>Redirecting to</h3>
            {window.location.href=`https://lakshman-${singlegame.toLowerCase()}.surge.sh`}
        </div>
    )
}
