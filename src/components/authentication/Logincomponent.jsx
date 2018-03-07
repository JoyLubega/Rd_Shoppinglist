import React from 'react';
import { Link } from 'react-router-dom';


const LoginComponent = (props) => {
    const {handleSubmit, handleLogin} = props;
    console.log(handleLogin)

    return(
        <div className="Login">
            <form onSubmit={handleLogin} >
                <h2>Sign In</h2><br />
                       
                <label >Email:</label>
                <input type="email" name="email" onChange={handleSubmit} class="form-control" id="email" placeholder="Enter email" />
        
            
                <label >Password:</label>
                <input type="password" name="password" onChange={handleSubmit} class="form-control" id="pwd" placeholder="Enter password"/>
        

            
                <label className="form-check-label">
                    <input class="form-check-input" type="checkbox" name="remember"/> Remember me
                </label>
            
        
                <input type="submit" class="btn btn-primary" value="Submit"/>
                <Link className="btn btn-primary" to="register">
                Sign up
                </Link> 
            </form>
        </div>  
    )
}
export default LoginComponent;