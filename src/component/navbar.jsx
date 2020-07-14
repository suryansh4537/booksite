import React from 'react';

function Navbar(){
    return(
<div className>
<nav className="navbar navbar-dark bg-dark">
<a className="navbar-brand">bOOK</a>
<form className="form-inline">
    
    <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Sign in</button>
    <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Sign up</button>
  </form>
</nav>
</div>
    );
}

export default Navbar;