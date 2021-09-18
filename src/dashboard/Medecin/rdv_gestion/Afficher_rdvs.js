import React from 'react';
import axios from 'axios';
import View_users from './View_users'

class Afficher_rdvs extends React.Component {

    state = {
        id_doc: '',
        liste_approuvedApp: [],
        liste_noapprouvedApp: []
    }

    componentDidMount = ()=> {
        const id_doc = JSON.parse(localStorage.getItem('currentUser')).id;
        console.log(id_doc)
        // get request to get all the approuved app
        axios.get('http://localhost:8084/get-new-appointment/'+id_doc)
            .then ( res => {
                console.log('app response : ',res)
                this.setState({
                    liste_noapprouvedApp: res.data
                })
            })
        // get request to get all the disapprouved app
        axios.get('http://localhost:8084/get-approved-appointment/'+id_doc)
            .then ( res => {
                console.log('app response : ',res)
                this.setState({
                    liste_approuvedApp: res.data
                })
            })
    }
    render() {
        console.log('state final : ',this.state)
        return(
            <div className='afficher_rdvs'>
                ici on affiche les rdvs
                <View_users approved={this.state.liste_approuvedApp} disapproved={this.state.liste_noapprouvedApp}/>
            </div>
        )
    }
}

export default Afficher_rdvs;