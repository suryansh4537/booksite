import React, { Component } from 'react';
import Signin from './component/login';
import Signup from './component/signup';
import Navbar from './component/navbar';
class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div >
                <Navbar/>
                <div className="container">
                <Signin/>
                <Signup/>
                </div>
            </div>
         );
    }
}
 
export default App;