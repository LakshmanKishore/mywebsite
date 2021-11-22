import React from 'react';
import "../App.css";
import { ReactNative } from './projectsComponents/ReactNative';
import { WebML } from './projectsComponents/WebML';

export const Projects = () => {
    return (
        <div className="pt-5 bg-black2">
            <div className="pt-2 ">
                <div className="responsiveText">
                    -<span className="iconify" data-icon="ant-design:star-outlined"></span>-
                    Projects
                    -<span className="iconify" data-icon="ant-design:star-outlined"></span>-
                </div>
                <WebML />
                <hr style={{ width: "90%" }} />
                <ReactNative />
            </div>
        </div>
    )
}

