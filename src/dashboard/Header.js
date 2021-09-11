import './Header.css'

import React from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link to='/home'>
                <div className="header__logo">
                    <p className="logo">TL</p>
                </div>
            </Link>
            <div className="header__nav">
                <div className="header__option">
                    <span className="headerOption__firstLine"><NotificationsIcon /></span>
                    <span className="headerOption__secondLine">Notifications</span>
                </div>
                <div className="header__option">
                    <span className="headerOption__firstLine"><SettingsIcon /></span>
                    <span className="headerOption__secondLine">Settings</span>
                </div>
                <div className="header__option">
                    {/* this image will be by default for now, we will use props */}
                    <img src="../images/admin/doooc.jpg" alt="profile pic"/>
                </div>
            </div>
        </div>
    );
};

export default Header;