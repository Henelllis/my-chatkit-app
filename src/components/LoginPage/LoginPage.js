import React, { Component } from 'react';

//Maybee Try and figure it out
class LoginPage extends Component {
    
    state = {
        controls:{
            control:null
        }
    }
    
    render() {
        return (
            <div className="login">
                
                <div className="login-header-area">
                    <h1 className="login-header">My ChatKit Demo</h1>
                </div>
                <div className="login-input-area">
                <form>
                    <input className="login-input" placeholder="Please Enter Username"/>
                </form>
                </div>
                <div className="login-info-area">
                    <h3 className="login-info-header"> 
                        Use userName Frogger or Pippin for Demo
                    </h3> 
                </div>
                <div className="login-button-area">
                    <button className="login-button"> Login </button>
                </div>
            </div>
        )
    };
}; 

export default LoginPage;