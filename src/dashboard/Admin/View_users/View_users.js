import './View_users.css'
import React from 'react';
import List_users from './List_user';
import Nav from 'react-bootstrap/Nav';

class View_users extends React.Component{
    // we will first of all get all the users using ComponentDidMount
    // then we will separate users by Role in 4 lists variables
    cons
    state = {
        divElementId: null,
        listAdmins:'',
        listMedecins:'',
        listPatients:'',
        listInfermiers:'',
    }

    componentDidMount = () => {
        this.setState({
            divElementId: 0,
            listAdmins:['anis','issam','moh','anis','issam','moh','anis','issam','moh'],
            listMedecins:['samir','islam','ilyas','samir','islam','ilyas','samir','islam','ilyas'],
            listPatients:['anfel','karim','samira','samir','islam','ilyas','samir','islam','ilyas'],
            listInfermiers:['halim','ali','oussama','halim','ali','oussama','halim','ali','oussama'],
        })
    }
    

    clickedElement = (event)=>{
        //remove the active class
        const divs = document.querySelectorAll('.switch__btn');
        divs.forEach(div => {
            div.classList.remove('active')
        });
        console.log(divs);
        this.setState({
            divElementId: event.target.id
        })
        const div = document.getElementById(event.target.id)
        div.classList.add('active')
    }

    

    render() {
    
        console.log('divel : ', this.state)
        const myState = this.state;
        function getMeUsers(divElementId) {
            console.log(myState)
            if(divElementId==0){
                return <List_users listUser = {myState.listAdmins}/>
            }
            if(divElementId==1){
                return <List_users listUser = {myState.listMedecins}/>
            }
            if(divElementId==2){
                return <List_users listUser = {myState.listInfermiers}/>
            }
            if(divElementId==3){
                return <List_users listUser = {myState.listPatients}/>
            }

        }

        return(
            
            <div className='View_users'>
                <div className='switch_buttons'>
                        <div className='switch__btn btn btn-outline-secondary active rounded-0' id='0' onClick={this.clickedElement}>
                            Admins
                        </div>
                    
                  
                        <div className='switch__btn btn btn-outline-secondary rounded-0' id='1'  onClick={this.clickedElement}>
                            Medecins
                        </div>
                   
                   
                        <div className='switch__btn btn btn-outline-secondary rounded-0' id='2' onClick={this.clickedElement}>
                            Infermiers
                        </div>
            
                    
                        <div className='switch__btn btn btn-outline-secondary rounded-0' id='3' onClick={this.clickedElement}>
                            Patients
                        </div>
              
                </div>
            
                <div className='view_Lists' id='viewLists'>
                   {getMeUsers(this.state.divElementId)}
                </div>
            </div>
        );
    };
};

export default View_users;
