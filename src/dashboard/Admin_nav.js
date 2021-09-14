import './Admin_nav.css';
import React from 'react';
import Profile from './Profile';
import {Link} from 'react-router-dom';

class Admin_nav extends React.Component {
   
    render() {
        return (
            <div className="Admin_nav">
                <div className="profile__section">
                    <Profile currentUser = {this.props.currentUser}/>
                </div>
                <div className='navigation__items'>
                    <Link to='/admin/dashboard' className='dashboard_item'>
                        <div className="nav__item">
                            <span>Dashboard</span>
                        </div>
                    </Link>

                    <Link to='/admin/add_medecin' className='add_item'>
                        <div className="nav__item">
                            <span>Ajouter médecin</span>
                        </div>
                    </Link>
                    
                    <Link to='/admin/view_users'>
                        <div className="nav__item">
                            <a><span>Liste médecins</span></a>
                        </div>
                    </Link>
                </div>
            </div>
        );
    };
};

export default Admin_nav;