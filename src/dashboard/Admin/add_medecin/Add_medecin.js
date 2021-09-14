import './Add_medecin.css';
import React from 'react';
import axios from 'axios';

class Add_medecin extends React.Component {

    constructor (props) {
        super(props);
        this.status = this.initialInformations;
    }

    initialInformations = {
        username:'',
        nom:'',
        prenom:'',
        dateNaissance:'',
        lieuNaissance:'',
        adresse:'',
        sex:'',
        email:'',
        numTelephone:'',
        activiteProf:'',
        password:'',
        numeroSecuriteSocial:'',
        groupeSanguin:'',
        role:[]
    }

    

    inputOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    inputOnChangeRole = (event) => {
        const role = [event.target.value];
        this.setState({
            role: role
        });
    }

    submitInformationsForm = (event)=>{
        event.preventDefault();
        console.log(this.state);
        axios.post("http://localhost:8083/api/auth/signup", this.state)
            .then((result)=>{
                console.log(result)
            })
            .catch((err)=>{
                console.log({errorAdding: err})
            })
    }
    render() {

        return(
            <div className='addMedecin_background'>
                <div className="Add_medecin">
                    <form onSubmit={this.submitInformationsForm}>
                        <div className='name'>
                            <div className='nom'>
                                <input type='text' placeholder='Nom de famille' name='nom' onChange={this.inputOnChange}/>
                            </div>
                            <div className='prenom'>
                                <input type='text' placeholder='prenom' name='prenom' onChange={this.inputOnChange}/>
                            </div>        
                        </div>
                        <div className='naissance'>
                            <div className='date_naissance'>
                                <input type='date' name='dateNaissance' onChange={this.inputOnChange}/>
                            </div>
                            <div className='lieu_naissance'>
                                <input type='text' placeholder='lieu de naissance' name='lieuNaissance' onChange={this.inputOnChange}/>
                            </div>        
                        </div>
                        <div className="address">
                            <input type='text' name='adresse' placeholder='adresse' onChange={this.inputOnChange}/>
                        </div>
                        <div className="address">
                            <input type='text' name='numTelephone' placeholder='numTelephone' onChange={this.inputOnChange}/>
                        </div>
                        <div className="address">
                            <input type='text' name='numeroSecuriteSocial' placeholder='numeroSecuriteSocial' onChange={this.inputOnChange}/>
                        </div>
            
                        <div className='selectClass'>
                            <select className="sex" name="sex" onChange={this.inputOnChange}>
                                <option disabled selected>sexe</option>
                                <option value='Homme' >homme</option>
                                <option value='FEMME'>femme</option>
                            </select>
                            <select className="groupeSanguin" name="groupeSanguin" onChange={this.inputOnChange}>
                                <option disabled selected>groupe sanguin</option>
                                <option value='O+' >O+</option>
                                <option value='A+' >A+</option>
                                <option value='B+' >B+</option>
                                <option value='O-' >O-</option>
                                <option value='A-' >A-</option>
                                <option value='AB+' >AB+</option>
                                <option value='B-' >B-</option>
                                <option value='AB-'>AB-</option>
                            </select>
                            <select className="role" name="role" onChange={this.inputOnChangeRole}>
                                <option disabled selected>role</option>
                                <option value='admin' >admin</option>
                                <option value='medecin'>medecin</option>
                                <option value='infermier'>infermier</option>
                            </select>
                        </div>
                        <div className='connexion_information'>
                            <div className='username'>
                                <input type='text' placeholder='username' name='username' onChange={this.inputOnChange}/>
                            </div>
                            <div className='email'>
                                <input type='text' placeholder='email' name='email' onChange={this.inputOnChange}/>
                            </div>
                            <div className='mot_de_passe'>
                                <input type='password' placeholder='mot de passe' name='password' onChange={this.inputOnChange}/>
                            </div>
                        </div>
                        <div className='btn_actions'>
                            <button type="reset" className='reset_btn'>Reset</button>
                            <button type="button" className='validate_btn' data-bs-toggle="modal" data-bs-target="#exampleModal">Valider</button>
                        </div>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Etes vous sur ?</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            en cliquant sur "enregistrer" vous aller confirmer vos saisi .
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">fermer</button>
                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">enregistrer</button>
                        </div>
                        </div>
                    </div>
                </div>
                    </form>
                </div>
                
            </div>

            
            
        );
    };
};

export default Add_medecin;