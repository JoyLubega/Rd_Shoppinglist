import React from 'react';
import { Link } from 'react-router-dom';


const RegisterComponent = (props) => {
    const {handleSubmit, handleRegister} = props;
    console.log(handleRegister)


    return(
        <div className="Register">
            <form onSubmit={handleRegister} >
                <h2>Sign In</h2><br />

                <label >Name:</label>
                <input type="text" name="name" onChange={handleSubmit} class="form-control" id="name" placeholder="Enter Name" />
                       
                <label >Email:</label>
                <input type="email" name="email" onChange={handleSubmit} class="form-control" id="email" placeholder="Enter email" />
        
            
                <label >Password:</label>
                <input type="password" name="password" onChange={handleSubmit} class="form-control" id="pwd" placeholder="Enter password"/>
        

            
                <label className="form-check-label">
                    <input class="form-check-input" type="checkbox" name="remember"/> Remember me
                </label>
            
        
                <input type="submit" class="btn btn-primary" value="Submit"/>
                <Link className="btn btn-primary" to="/login">
                Sign in
                </Link> 
            </form>
        </div>  
    )
}
export default RegisterComponent;