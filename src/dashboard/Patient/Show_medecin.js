import React from 'react';
import faker from 'faker';

class Show_medecin extends React.Component{
    style = {
        'show_medecin':{
           
            display:'flex',
            padding: '10px',
            justifyContent: 'space-between',
            marginBottom: '20px',
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        },
        'showMedecin_img_avatar' :{
            height: '50px',
            width: '50px',
            borderRadius: '50%',
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        },

        'showMedecin_infos': {
            display:'flex',
            justifyContent: 'space-around'

        },
        'selection_doctor_btn': {
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'space-around',
            marginLeft: '20px',
            width:'60px',
            textAlign: 'center'
        },
        'showMedecin_infoName' :{
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'space-around',
        }
    }

    state = {
        idMedecinSelected : null,
        nomMedecinSelected : null
    }

    getMeMedecinInfo = () => {
    
        this.props.setMeIdAndName(this.props.user.id, this.props.user.prenom)
        console.log('info : ', this.props.user)
        
    }


    render() {
        return(
            <div className='show_medecin' style={this.style.show_medecin}>
                <div className='showMedecin_img'>
                    <img src={faker.image.avatar()} className='showMedecin_img_avatar' style={this.style.showMedecin_img_avatar}/>
                </div>
                <div className='showMedecin_infos' style={this.style.showMedecin_infos}>
                    <div className='showMedecin_infoName' >
                        <h5>Dr {this.props.user.nom}</h5>
                    </div>
                    <div 
                        className='selection_doctor_btn' 
                        style={this.style.selection_doctor_btn}
                        onClick={this.getMeMedecinInfo}

                        id='selectBtn'
                    >
                        select
                    </div>
                </div>
            </div>
        )
    }
}

export default Show_medecin;