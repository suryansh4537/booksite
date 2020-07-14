import React from 'react';
import './login.css';

function Signin(){
    return(
    <div className="container loginbox">
        <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" />
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Sign In</button>
</form>
    </div>
    );
}

export default Signin;