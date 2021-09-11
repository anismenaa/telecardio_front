import React from 'react';
import HomePage from './homeComponents/HomePage';
import SignUp from './auth/SignUp';
import SignIn from './auth/Signin';
 import Verify from './auth/Verify';
import Home_user from './dashboard/Home_user';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = () => {

    return(
            <Router>
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/signin" component={SignIn}/>
                    <Route path="/verify" component={Verify} />   
                    <Route path="/admin" component={Home_user}/>
                     {/* <Route path='/medecin' component={Home_user} /> */}
                </Switch>
            </Router>
    );
};

export default Home;