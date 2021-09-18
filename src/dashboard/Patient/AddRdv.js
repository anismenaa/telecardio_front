import React from 'react';
import axios from 'axios';
import View_medecin from './View_medecin';
import {Form} from 'react-bootstrap';

class AddRdv extends React.Component {

    // 1 recuperer les medecins 
    // input date w heure 
    // subject 
    state = {
        liste_medecins: [],
        rdvToPost : {
           cas: '',
           date: '',
           doc_name: '',
           id_doc: '',
           notes: '',
           patient_id: '',

        }
    }
    

    doctors = [];
    getMeAllDoctors = () => {
        axios.get("http://localhost:8090/gestion-compte-service/api/auth/users")
            .then(response => {
                console.log(response)
                response.data.forEach(user => {
                    console.log()
                    if(user.roles[0].name === 'ROLE_Medecin') {
                        this.doctors.push(user)
                    }
                     
                    
                });

                this.setState({
                    ...this.state,
                    liste_medecins: this.doctors
                })
                console.log('doctors : ', this.doctors)
                
            })
            
    }

    inputChange = (event) => {
        this.setState({
            ...this.state,
            rdvToPost : {
                ...this.state.rdvToPost,
                [event.target.name]: event.target.value
            }
        })

        console.log('date : ', this.state.date_rdv)
    }

    componentDidMount = () => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser')).id;
        console.log('myCurrentUser id : ',currentUser)
        this.getMeAllDoctors();
        this.getMeTheMinimum();
        this.setState({
            ...this.state,
            rdvToPost:{
                ...this.state.rdvToPost,
                patient_id: currentUser
            }
        })

    }

    getMeTheMinimum = () => {
        
    }

    style = {
        'background' :{
            padding: '100px',
            height: '100vh',
        },
        'addRdv':{
            display:'flex',
           
            width: '100%',
            height: '100%',
            justifyContent: 'space-between',
            
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            borderRadius: '20px'


        },
        'addRdv__leftSection' :{
           
            width: '50%',
            

        },
        'addRdv__rightSection' : {
            border: 'none',
            width: '50%'
        },

        'inputRdv':{
            width: '80%',
            margin: 'auto',
         
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'center',
            height: '100%'
        },
        'inputRdvField':{
            width: '100%',
            height: '60px',
   
        }

    }

    setMeIdAndName= (id, nom) => {
        this.setState({
            ...this.state,
            rdvToPost: {
                ...this.state.rdvToPost,
                id_doc: id,
                doc_name: nom
            }
        })
    }

    submitFormRdv = () => {
        alert('you will submit');
        axios.post('http://localhost:8084/add-appointment', this.state.rdvToPost)
            .then(result => {
                if(result.data == true){  
                    console.log(result)
                    }  
                    else{  
                        return    alert("I am an alert box!");
                    }  
                
            }
            
            
            )
    }

   


    render() {
        console.log('zebiii ',this.state)
        return(
            <div className='background' style={this.style.background} >
                <div className='addRdv' style={this.style.addRdv}>
                    <div className='addRdv__leftSection' style={this.style.addRdv__leftSection}>
                        <div className='inputRdv' style={this.style.inputRdv}>
                        <input
                            className = 'inputRdvField'
                            name='notes'
                            type='text'
                            onChange={this.inputChange}
                            value={this.state.rdvToPost.notes}
                            placeholder='notes'
                            style= {
                                this.style.inputRdvField
                            }
                        />
                        <input
                            className = 'inputRdvField'
                            type='datetime-local'
                            name='date'
                            onChange={this.inputChange}
                            value={this.state.rdvToPost.date}
                            style= {
                                this.style.inputRdvField
                            }
                        />
                        </div>
                        <button onClick={this.submitFormRdv}>valider</button>
                    </div>
                    <div className='addRdv__rightSection' style={this.style.addRdv__rightSection}>
                        <View_medecin users={this.state.liste_medecins} setMeId ={(id, nom)=>{this.setMeIdAndName(id, nom)}}/>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default AddRdv;