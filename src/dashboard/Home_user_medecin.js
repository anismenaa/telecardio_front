import React from 'react';
import Header from './Header';
//admin
import Admin_dashboard from './Admin/dashboard/Admin_dashboard';
import Consulter_patient from './Medecin/consultation/Dossier';
import View_users from './Admin/View_users/View_users';
import Consulte_user from './Admin/View_users/Consulte_user'

//medecin 
import Medecin_nav from './Medecin_nav';
import Ordonnance from './Medecin/dashboard/Ordonnance'
import Pdf_ordonnance from './Medecin/dashboard/Pdf_ordonnance';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';

import './Home_user.css';
import Medecin_dashboard from './Medecin/dashboard/Medecin_dashboard';

class Home_user extends React.Component {

    state = {
        currentUser_information: ''
    }
    componentDidMount = () => {
        if (localStorage.getItem('currentUser') !== null) {
            this.setState({
                currentUser_information: localStorage.getItem('currentUser')
            })
        }else {
            this.setState({
                currentUser_information : this.props.location.state.data
            })
            localStorage.setItem('currentUser', JSON.stringify(this.state.currentUser_information));
        }
      
        // we add the current user to the localStorage
        
    }

    render() {
        console.log('rani hna')
        return (
            <div className="Home_user">
                <Header />
                <div className="sections">
                    <div className="userLeft_section">
                        <Medecin_nav/>
                    </div>
                    <div className="userRight_section">
                            <Switch>
                                <Route path='/medecin/dashboard'> <Medecin_dashboard /></Route>
                                <Route path='/medecin/consulter_patient'> <Consulter_patient /> </Route>
                                <Route path='/medecin/ordonnance'> <Ordonnance /> </Route>
                                {/* <Route path='/admin/pdf'><Pdf_ordonnance/></Route> */}
                            </Switch>
                        
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Home_user;