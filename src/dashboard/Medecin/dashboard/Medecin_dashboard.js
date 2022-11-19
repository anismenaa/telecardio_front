import React from 'react';
import patients from '../../images/patient/patients.jpg'
import consultation from '../../images/patient/consultation.jpg'
import Chart from 'react-google-charts'
import axios from 'axios'
import { PieChart } from 'react-minimal-pie-chart';
import { ThreeSixtyOutlined } from '@material-ui/icons';
import RdvStatistics from './RdvStatistic';
import Ecg from './Ecg';
import SexStat from './SexStat';
import AgeStat from './AgeStat';

class Medecin_dashboard extends React.Component {

    styles = {
        'Medecin_dashboard':{
            height:'100vh',
            overflow: 'scroll',
        },
        'consultation_visualisation': {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '50px'
        },
        'consultaion_card':{
            marginTop: '20px',
            marginLeft:'50px',
            width: '50%',
            textAlign: 'center',
            borderRadius: '40px',
            boxShadow: "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)"
          
        },
        'img1':{
            height: '200px',
            width: '100%', 
            borderTopLeftRadius: '40px',
            borderTopRightRadius: '40px',
            
        },
        'consultation_card_btn':{
            float: 'right',
            width:'30%',
            borderRadius: '29px',
            background: '#515782',
            color: '#FFF',
            border: 'none',
            padding: '7px',
            marginRight: '20px',
            marginBottom: '10px'
        },
        'gender_statistics': {
            borderRadius: '40px',
            width: '90%',
            margin:'auto',
            boxShadow:
            "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)",
           
            overflow: 'hidden'
        },
        

    }

    state = {
        nbhomme: null,
        nbfemme:null,
        pourcentage : {
            hommePer : null,
            femmePer : null
        },
        ages: [],
        agesStatistics: [],
        
    }

    

    

    getMeNumberPatientPerCritereStat = async(users) => {
        console.log('these are mine : ', users)
        // let's get only the patients 
        const patients = users.filter((user) => user.roles[0].name=='ROLE_Patient');
        console.log('theses are my patients ' ,patients);
        console.log(patients[0])
        
    }

    getMeAppoinementByMonth = async() => {
        const doc_id = JSON.parse(localStorage.getItem('currentUser')).id;
        // get all the appoinements validated of the current medecin
        const rdvs_medecin = (await axios.get('http://localhost:8084/get-new-appointment/'+doc_id)).data;
        
    }
    componentDidMount = async()=> {
        //we gotta get all the users and then calculate the % 
        const response = await axios.get('http://localhost:8090/gestion-compte-service/api/auth/users');
        const numberOfUsers = response.data.length;
        const myUsers = response.data;
        // this.getMeGenderStatistics(myUsers)
        // this.getMeAgeStatistics(myUsers)
        this.getMeNumberPatientPerCritereStat(myUsers)
        //this.getMeAppoinementByMonth();
        // calculate the age 
        console.log('date of today : ', new Date().toISOString().slice(0, 10), ' birthday : ', myUsers[0].dateNaissance)
    }

    


    render(){
        return(
            <div className="Medecin_dashboard">
               <div className='consultation_visualisation' style={this.styles.consultation_visualisation}>
                    <div className='consultation_card' style={this.styles.consultaion_card}>
                        <img src={consultation} alt='consulation_card' style={this.styles.img1}/>
                        <div className='consultaion_card_text'>
                            <p>un racourci rapide qui vous permettera de consulter les document de vos patient</p>
                            <button className='consultation_card_btn' style={this.styles.consultation_card_btn}>consulter par ici</button>
                        </div>
                    </div>
                    <div className='medecin_patient_statistics'>
                        <div className='gender_statistics' style={this.styles.gender_statistics}>
                            <SexStat />
                        </div>
                    </div>
               </div>
               
               <div style={this.styles.gender_statistics}>
                    <AgeStat />
               </div>
               
               
               <div>
                   <RdvStatistics/>
               </div>

               <div>
                   <Ecg />
               </div>
            </div>
        );
    }
}

export default Medecin_dashboard;