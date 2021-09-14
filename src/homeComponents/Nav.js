import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar_homepage">
            <h2>TELECARDIO APPLICATION</h2>
            <ul>
                <Link to="/home" className="navbar-link">
                    <li>Home</li>
                </Link>
                <li>About</li>
                <Link to="/signup" className="navbar-link">
                    <li>Sign In</li>
                </Link>
                
            </ul>      
        </nav>
    );
}

export default Nav;