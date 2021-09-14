import React from 'react';
import Header from './Header';
//admin
import Admin_nav from './Admin_nav.js';
import Admin_dashboard from './Admin/dashboard/Admin_dashboard';
import Add_medecin from './Admin/add_medecin/Add_medecin';
import View_users from './Admin/View_users/View_users';
import Consulte_user from './Admin/View_users/Consulte_user'

//medecin 
// import Medecin_nav from './Medecin_nav'
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';

import './Home_user.css';

class Home_user extends React.Component {
    componentDidMount = () => {
        console.log(this.props.location.state.data)
        // we add the current user to the localStorage
        const currentUser_information = this.props.location.state.data
        localStorage.setItem('currentUser', JSON.stringify(currentUser_information));
    }
    render() {
        console.log('rani hna')
        return (
            <div className="Home_user">
                <Header />
                <div className="sections">
                    <div className="userLeft_section">
                        <Admin_nav/>
                    </div>
                    <div className="userRight_section">
                            <Switch>
                                <Route path='/admin/dashboard'> <Admin_dashboard /></Route>
                                <Route path='/admin/add_medecin'> <Add_medecin /> </Route>
                                <Route path='/admin/view_users'><View_users /></Route>
                                <Route path='/admin/consulte_user'><Consulte_user /></Route>
                            </Switch>
                        
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Home_user;