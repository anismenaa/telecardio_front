import './Profile.css';
import React, { useState, useEffect   } from 'react';
import Profile_pic from './images/admin/doooc.jpg';
import Status from './images/admin/status_online.png';
import Faker from 'faker';


class Profile extends React.Component {
    state = {
        nom: '',
        prenom: '',
        nomComplet:'',
        role: ''
    }

    componentDidMount = () => {
        const currentUser_information = JSON.parse(localStorage.getItem('currentUser'));
        console.log('profile infroamtiON : ', currentUser_information)
        this.setState({
            nom: currentUser_information.nom,
            prenom: currentUser_information.prenom,
            nomComplet: currentUser_information.nom+' '+currentUser_information.prenom,
            role: currentUser_information.roles[0]
        })
       
    }

    render() {
        return (
            <div className="profile">
                <div className="profile__informations">
                    <img src={Faker.image.avatar()} className="profile__picture"/>
                    <div className="profile__generals">
                        <span className="profile__name">{this.state.nomComplet}</span>
                        <span className="profile__profession">{this.state.role}</span>
                    </div>
                </div>
                <div className="profile__status">
                    <img src={Status} className='profile_statusImg'/>
                    <p> : actif</p>
                </div>
            </div>
        );
    }
} 

   


export default Profile;