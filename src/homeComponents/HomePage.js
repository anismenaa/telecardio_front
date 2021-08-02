import './css/home.css'
import React from 'react';
import Nav from './Nav';
import Footer from './Footer'
import Service from './Service'
import Contact from './Contact';
import adnImage from '../images/carousel/adn.jpg';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    
    render() {
        return(
            <div className="home-container">
                <Nav />
                <div className="background-image">
                    <img src={adnImage} alt="background" />
                    <div className="header">
                        <h1>Bienvenue sur notre plateforme</h1>
                        <h2>TELECARDIO</h2>
                        <Link to="/signup" className="create-doc-patient">
                            <a className="create-doc-patient-btn">Créer son propre dossier médical</a>
                        </Link>
                        
                    </div>
                </div>
                <div className="ourServices">
                    <div className="title">
                        <p>Nos Services</p>
                    </div>
                    <div className="services-items">
                        <Service 
                            srcName="../images/services/service1.jpeg"
                            cardTitle="notre service 1" 
                            cardDescription="cela est une toute petite description de notre service 1, merci de cliquer sur savoir plus pour encore plus d'informations"
                        />
                        <Service 
                            srcName="../images/services/service2.jpg"
                            cardTitle="notre service 2" 
                            cardDescription="cela est une toute petite description de notre service 2, merci de cliquer sur savoir plus pour encore plus d'informations"
                        />
                        <Service 
                            srcName="../images/services/service3.jpg"
                            cardTitle="notre service 3" 
                            cardDescription="cela est une toute petite description de notre service 3, merci de cliquer sur savoir plus pour encore plus d'informations"
                        />
                    </div>
                </div>

                <div className="contact">
                    <div className="title">
                        <p>Nous contacter</p>
                    </div>
                    <Contact />
                </div>
                <Footer />
            </div>
        );
    };
};


export default HomePage;