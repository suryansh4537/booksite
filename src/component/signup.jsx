import React from 'react';
import './login.css'
function Signup(){
    return(
        <div className="loginbox">
            <form>
            <div className="form-group">
            <label >First Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" />
            </div>
            <div className="form-group">
            <label >Last Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" />
            </div>
            <div className="form-group">
            <label >Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" />
            </div>
            <div className="form-group">
            <label >Set password</label>
            <input type="password" className="form-control" id="exampleInputEmail1" />
            </div>
            <button type="button" class="btn btn-primary">Signup</button>
            </form>
        </div>
    )
}

export default Signup;