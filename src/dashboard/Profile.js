import './Profile.css';
import React from 'react';
import Profile_pic from './images/admin/doooc.jpg';
import Status from './images/admin/status_online.png';
import Faker from 'faker';

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__informations">
                <img src={Faker.image.avatar()} className="profile__picture"/>
                <div className="profile__generals">
                    <span className="profile__name">Anis MENAA</span>
                    <span className="profile__profession">Admin</span>
                </div>
            </div>
            <div className="profile__status">
                <img src={Status} className='profile_statusImg'/>
                <p> : actif</p>
            </div>
        </div>
    );
}

export default Profile;