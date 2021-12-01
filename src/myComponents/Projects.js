import React from 'react';
import "../App.css";
import { ReactNative } from './projectsComponents/ReactNative';
import { WebML } from './projectsComponents/WebML';

export const Projects = () => {
    return (
        <div className="bg-black">
            <div className="pt-1">
                <div className="routeHeading">
                    Projects
                </div>
                <WebML />
                <hr style={{ width: "90%" }} />
                <ReactNative />
            </div>
        </div>
    )
}

