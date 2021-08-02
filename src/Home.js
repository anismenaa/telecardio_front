import React from 'react';
import HomePage from './homeComponents/HomePage';
import SignUp from './auth/SignUp';
import SignIn from './auth/Signin';
import Verify from './auth/Verify';
import DashoardPatient from './usersDashboard/patient/components/Dashboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = () => {

    return(
            <Router>
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/signin" component={SignIn}/>
                    <Route path="/user/patient/dahsboard" component={DashoardPatient} />
                    <Route path="/verify" component={Verify} />
                </Switch>
            </Router>
    );
};

export default Home;