import React from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    return(
        <div className="leftSide-container">
            <div className="title">
                <p>TELECARDIO APPLICATION</p>
            </div>
            <div className="leftSide-logo">
                <p className="tc-letter">TC</p>
            </div>
            <div className="home-btn">
                <Link to='/home'>
                    <button type="button">Accueil</button>
                </Link>
            </div>
        </div>
    );
};

export default LeftSide;