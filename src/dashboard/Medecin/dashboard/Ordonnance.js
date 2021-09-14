import React from 'react';
import CoeurLogo from '../../../images/ordonnance/coeur_logo.jpg';
import List_medicament from './List_medicament';
import jsPDF from 'jspdf';
import SearchMedic from './SearchMedic';
import Pdf_ordonnance from './Pdf_ordonnance';
import {Link } from 'react-router-dom'

class Ordonnance extends React.Component{

    styles = {
        'Ordonnance': {
            padding: '20px',
            width: '100%',
            height: '100vh',
            overflow: 'scroll',
              /* IE and Edge */

        },
        'ordonnance_form': {
            margin: 'margin-auto',
            width:'80%',
            margin:'auto',
            padding: '50px',
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'

        },
        'ordonnance_header': {
            display: 'flex',
            justifyContent: 'space-between'
        },
        'docteur_informations':{
            width: '90%',
        },
        'ordonnance_logo':{
            height: '100px',
            width: '30%'

        },
        'ordonnance_body':{
            padding:'50px'
        },
        'ordonnance_bigTitle':{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '1.8em',
            marginBottom: '50px'
        },
        'ordonnance_medicament':{
            textAlign:'center',
            display:'flex',
            flexDirection: 'column',
        },
        'ordonnance_addInput':{
            display: 'flex',
            justifyContent: 'space-between',
            width: '50%',
            margin: 'auto'
        },
        'medicament_addBTN': {
            textAlign: 'center',
            margin: 'auto',
            marginTop: '10px',
            marginBottom: '30px',
            padding: '2px',
            width: '30%',
            fontSize: '0.8em',
            backgroundColor: '#515782',
            color: 'white'
        },
        'medicament_nom': {
            width: '70%'
        },
        'medicament_dosage': {
            width: '25%'
        },
        'ordonnance_footer': {
            width: '30%',
            marginTop: '50px'
        }
        
    }

    state = {
        informationDocteur : '',
        medicamentInput:'',
        dosageInput: '',
        listMedicaments : []
    }
    componentDidMount=()=>{
        const docteur = JSON.parse(localStorage.getItem('currentUser'));
        this.setState({
            ...this.state,
            informationDocteur: docteur
        })
        

    }
    medicaments_ajoutes = [];

    getMeMedicament =(event) => {
        this.setState({
            medicamentInput: event.target.value,
        })

        
    }
    getMeDosage =(event) => {
        this.setState({
            dosageInput: event.target.value,
        })
    }

    addMedicament = (event) => {
        event.preventDefault();
        const medoc = {
            nom: this.state.medicamentInput,
            dosage: this.state.dosageInput
        }
        // we add this medoc to listMedicament array
        this.medicaments_ajoutes.push(medoc);
        this.setState({
            listMedicaments: this.medicaments_ajoutes,
            medicamentInput: '',
            dosageInput: ''
        })  
    }

    generatePdf = () => {
        var maListeMedicament = this.state.listMedicaments;
        var doc = new jsPDF('portrait', 'px', 'a4', 'false');
        // docteur information
        doc.setFont('Helvertica','bold')
        doc.text(10,30, 'Dr : ');
        doc.setFont('Helvertica','normal')
        doc.text(40,30, this.state.informationDocteur.nom);
        doc.text(100,30, this.state.informationDocteur.prenom);
        doc.setFont('Helvertica','bold')
        doc.text(10,45, 'Email : ');
        doc.setFont('Helvertica','normal')
        doc.text(50,45, this.state.informationDocteur.email);
        doc.setFont('Helvertica','bold')
        doc.text(10,60, 'TelNum : ');
        doc.setFont('Helvertica','normal')
        doc.text(70,60, this.state.informationDocteur.numTelephone);
        doc.addImage(CoeurLogo, 'PNG', 320, 5, 80,80)
        // big title ordonnance
        doc.setFont('Helvertica','bold')
        doc.text(170, 180, 'ORDONNANCE')
        doc.setFont('Helvertica','normal')
        console.log('liste des medicament : ',this.state.listMedicaments);
        var pxDown = 20;
        var pxDebut = 250;
        maListeMedicament.forEach((medicament)=>{
            var location = pxDebut+pxDown;
            doc.text(85, location, medicament.nom)
            pxDown+=20;
        })

        // signature 
        doc.setFont('Helvertica','bold')
        doc.text(10,500, 'Signature : ')
        doc.save('a.pdf')

    }
    render() {
        return(
            <div className='Ordonnance' style={this.styles.Ordonnance}>
                <div className='ordonnance_form' style={this.styles.ordonnance_form}>
                    <form className='ordonnance_form_body' id='myForm'>
                        <div className='ordonnance_header' style={this.styles.ordonnance_header}>
                            <div className='docteur_informations' style={this.styles.docteur_informations}>
                                <h2>Dr {this.state.informationDocteur.nom} {this.state.informationDocteur.prenom}</h2>
                                <label><strong style={{color: 'black'}}>email : </strong></label>&nbsp;<input type='text' value={this.state.informationDocteur.email} disabled/><br/>
                                <label><strong style={{color: 'black'}}>numeroTel : </strong></label>&nbsp;<input type='text' value={this.state.informationDocteur.numTelephone} disabled/>
                            </div>
                            <div className='ordonnance_logo' style={this.styles.ordonnance_logo}>
                                <img src={CoeurLogo} alt='logo_ordonnace' style={{width:'80%', height:'100%'}}/>
                            </div>
                        </div>
                        <div className='ordonnance_body' style={this.styles.ordonnance_body}>
                            <div className='ordonnance_bigTitle' style={this.styles.ordonnance_bigTitle}>
                                ORDONNANCE
                            </div>
                            <div className='ordonnance_medicament' style={this.styles.ordonnance_medicament}>
                                <div className='ordonnance_listMedicament'>
                                    <List_medicament liste_medicament = {this.state.listMedicaments}/>
                                </div>
                                <div className='ordonnance_addInput' style={this.styles.ordonnance_addInput}>
                                    <input type='text' name='medicament' placeholder='saisissez un médicament...' value={this.state.medicamentInput} className='medicament_nom' style={this.styles.medicament_nom} onChange={this.getMeMedicament} autoComplete='false'/>
                                    <input type='text' name='dosage' placeholder='dosage' min={1} max={10} className='medicament_dosage' value={this.state.dosageInput} style={this.styles.medicament_dosage} onChange={this.getMeDosage}/>
                                </div> 
                                {/* <div className='search__suggestion'>
                                    <SearchMedic searchItem = {this.state.medicamentInput}/>
                                </div> */}
                                
                                    <button onClick={this.addMedicament} type='button' className='medicament_addBTN' style={this.styles.medicament_addBTN}>ajouter un medicament</button>
                                
                            </div>
                            <div className='ordonnance_footer' style={this.styles.ordonnance_footer}>
                                <h4>Signature : </h4>
                                <img src='' alt='signature' />
                            </div>
                        </div>
                    </form>

                    <div className='btn-impression' onClick={this.generatePdf}>
                            <button>imprimer</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default Ordonnance;