import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Dashboard extends React.Component{

    constructor(props) {
        super(props);

        this.state = this.initialState;

        this.myToken = "";
        this.role = "";
    }

    initialState = {
        access_token: '',
        role_connected: '', // to see which role is connected
        user_data:{},
        disconnected:false
    }

    componentDidMount = async (props) => {
        console.log({
            props: this.props
        })
        // on recupere le token from the props object
        const data_user = this.props.location.state.data;
        const accessToken = this.props.location.state.accessToken;
        
        if(accessToken) {
                // put the access token in the header
            axios.interceptors.request.use(
                config => {
                    config.headers.authorization = `Bearer ${accessToken}`
                    return config;
                },
                error => {
                    return Promise.reject(error);
                }
            )

            const role = await axios.get("http://localhost:8082/api/test/patient")
            .then(response => {
                return response.data; // il contient le role
            })
            .catch(error=>{
                console.log({
                    error: error.message
                })
            }) 
            
            //save the token in the state
            this.myToken = accessToken;
            this.setState({access_token: this.myToken, role_connected: role, user_data: data_user})
            localStorage.setItem('session',accessToken); // on store le token qui nous servera comme session, pour ne pas pouvoir signin tout le temps
        }
         
    }

    signOutBtn = () => {
        // we will remove the token from the localstorage 
        localStorage.removeItem('session');
        // and then make the state at its initial values
        this.setState(this.initialState);
        // and then it will redirect us to the home componetn
        console.log(!localStorage.getItem('session'))
        if (!localStorage.getItem('session')) {
            this.setState({disconnected: true})
        }
    }

    render() {
        if(this.state.disconnected === true) {
            return(
                <Redirect to="/home" />
            );
        }
        console.log(this.state)
        return(
            <div className="dashboard-container">
                <div>
                    <h1>welcome to the dashboard patient: </h1>
                    <p>{this.state.user_data.username}</p>
                </div>
                <div>
                    <button onClick={this.signOutBtn}>click here to disconnect</button>
                </div>
            </div>
            
        )
    }
}

export default Dashboard;