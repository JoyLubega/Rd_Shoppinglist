import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import {registerUser} from '../actions/register';
import RegisterComponent from '../components/authentication/Registercomponent';

export class RegisterContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            registerData:{name:'', email:'', password:''}
        }
    }
    
    handleSubmit=(e)=>{
        e.preventDefault()
        let field = e.target.name
        let registerData = this.state.registerData
        registerData[field]=e.target.value
        
    }
    handleRegister = (e) => {
        e.preventDefault()
        this.props.registerUser(this.state.registerData)
        console.log("I am here")
    }  

    render(){
        return(
            <div>
                <RegisterComponent handleRegister={this.handleRegister} handleSubmit={this.handleSubmit} />
            </div>  
        )
    }
}

export default connect(null, {registerUser} )(RegisterContainer);
