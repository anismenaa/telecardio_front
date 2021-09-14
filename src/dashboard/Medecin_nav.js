import './Admin_nav.css';
import React from 'react';
import Profile from './Profile';
import {Link} from 'react-router-dom';

class Medecin_nav extends React.Component {
    render() {
        return (
            <div className="Admin_nav">
                <div className="profile__section">
                    <Profile currentUser = {this.props.currentUser}/>
                </div>
                <div className='navigation__items'>
                    <Link to='/medecin/dashboard' className='dashboard_item'>
                        <div className="nav__item">
                            <span>Dashboard</span>
                        </div>
                    </Link>

                    <Link to='/medecin/consulter_patient' className='add_item'>
                        <div className="nav__item">
                            <span>Consulter patient</span>
                        </div>
                    </Link>
                    
                    <Link to='/medecin/view_patients'>
                        <div className="nav__item">
                            <a><span>Liste patients</span></a>
                        </div>
                    </Link>

                    <Link to='/medecin/ordonnance' className='dashboard_item'>
                        <div className="nav__item">
                            <span>Ordonnance</span>
                        </div>
                    </Link>
                </div>
            </div>
        );
    };
};

export default Medecin_nav;