import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import {loginUser} from '../actions/login';
import LoginComponent from '../components/authentication/Logincomponent';

export class LoginContainer extends Component {
    constructor(props){
        console.log(props.loginUser)
        super(props)
        this.state={
            loginData:{email:'',password:''}
        }
    }
    
    handleSubmit=(e)=>{
        e.preventDefault()
        let field = e.target.name
        let loginData = this.state.loginData
        loginData[field]=e.target.value
        
    }
    handleLogin = (e) => {
        e.preventDefault()
        this.props.loginUser(this.state.loginData)
        this.props.history.push('/');
    }  

    render(){
        return(
            <div>
                <LoginComponent handleLogin={this.handleLogin} handleSubmit={this.handleSubmit} />
            </div>  
        )
    }
}

export default connect(null, {loginUser} )(LoginContainer);
