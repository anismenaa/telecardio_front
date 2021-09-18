import '../../Admin/View_users/View_users.css'
import React from 'react';
import axios from 'axios';
import List_users from './List_user'


class View_users extends React.Component{
    // we will first of all get all the users using ComponentDidMount
    // then we will separate users by Role in 4 lists variables
 
    state = {
        divElementId: null,
        liste_approved: [],
        liste_disapproved: []
    }
    

    componentDidMount = () => {
        // here we will make an axios get request to get the approuved app  ! 
            
            this.setState({
                ...this.state,
                liste_approved: this.props.disapproved,
                liste_disapproved: this.props.approved
            })
    }
    
    clickedElement = (event)=>{
        //remove the active class
        const divs = document.querySelectorAll('.switch__btn');
        divs.forEach(div => {
            div.classList.remove('active_')
        });
        this.setState({
            divElementId: event.target.id
        })
        const div = document.getElementById(event.target.id)
        div.classList.add('active_')
    }

    

    render() {
        const myState = this.state;
        console.log('mt state : ', myState)
        function getMeUsers(divElementId) {
            if(divElementId==1){
                return <List_users listUser = {myState.liste_approved}/>
            }
            if(divElementId==0){
                return <List_users listUser = {myState.liste_disapproved}/>
            }
           

        }

        return(
            
            <div className='View_users'>
                <div className='switch_buttons'>
                        <div className='switch__btn btn btn-outline-secondary rounded-0' id='0' onClick={this.clickedElement}>
                           approved
                        </div>
                    
                  
                        <div className='switch__btn btn btn-outline-secondary rounded-0' id='1'  onClick={this.clickedElement}>
                            disapproved
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
