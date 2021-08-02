import { render } from '@testing-library/react';
import React from 'react';
import LeftSide from './LeftSide';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/auth.css';

class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = this.initialState;

        this.patientChange= this.patientChange.bind(this);
        this.submitPatientInformations = this.submitPatientInformations.bind(this);
    }

    initialState = {
        username:'',
        email:'', 
        dateNaissance: '', 
        numeroTel:'',
        sex:'', 
        sin:'', 
        mot_de_passe:''
    }

    submitPatientInformations = (event) => {
        alert(this.state.sex)
        event.preventDefault();

        const patient = {
             username : this.state.username,
             email : this.state.email,
             dateN : this.state.dateNaissance,
             sex:  this.state.sex,
             numTel: this.state.numeroTel,
             sin: this.state.sin,
             password: this.state.mot_de_passe
        }

        console.log(patient);

        axios.post("http://localhost:8082/api/auth/signup", patient)
            .then(response => {
               alert(response.data.message );
               this.setState(this.initialState);
            })
            .catch(err => {
                console.log(err)
                this.setState(this.initialState);
            });
    }

    patientChange = (event) => {
        this.setState({ 
            [event.target.name]: event.target.value
        })
    }

    render() {
        const {username, email, dateNaissance, numeroTel, sex, sin, mot_de_passe} = this.state;
        return (
            <div className="signUp-container">
                <div className="leftSide-section ">
                    <LeftSide />
                </div>
                <div className="rightSide-section">
                    <div className="title">
                        <p>Inscription patient</p>
                    </div>
                    <form onSubmit={this.submitPatientInformations} id="signUpForm" >
                        <i className="fas fa-user"></i><input type="text" placeholder="username" name="username" value={username} onChange={this.patientChange} autoComplete="off" required/><br/>
                        <i className="fas fa-envelope"></i><input type="email" placeholder="email" name="email" value={email} onChange={this.patientChange} autoComplete="off" required/><br/>
                        <i className="fas fa-birthday-cake"></i><input type="date" name="dateNaissance"  value={dateNaissance} onChange={this.patientChange} autoComplete="off" required/><br/>
                        <i className="fas fa-phone-volume"></i><input type="text" placeholder="numero de tel" name="numeroTel" value={numeroTel} onChange={this.patientChange} autoComplete="off" required />
                        <div className="sex-choice">
                            <select name="sex" value={sex} onChange={this.patientChange} required>
                                <option value="Homme">homme</option>
                                <option value="FEMME">femme</option>
                            </select>
                        </div>
                        <i className="fas fa-shield-check"></i><input type="text" placeholder="numero de sécurité" name="sin" value={sin} onChange={this.patientChange} autoComplete="off" required/><br/>
                        <i className="fas fa-unlock"></i><input type="password" placeholder="password" name="mot_de_passe" value={mot_de_passe} onChange={this.patientChange} autoComplete="off" required/>
                        <button type="submit" className="signup-btn ">valider</button>
                    </form>
                    <Link to="/signin">
                        <button type="button" className="signin-btn">s'authentifier</button>
                    </Link>
                    
                </div>
            </div>
        );
                
    };
};

export default SignUp;