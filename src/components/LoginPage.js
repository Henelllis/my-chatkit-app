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
                <div className="login-input-area">
                <form>
                    <input className="login-input" placeholder="Please Enter Username"/>
                </form>
                </div>

                <div className="login-button-area">
                    <button className="login-button"> Login </button>
                </div>
            </div>
        )
    };
}; 

export default LoginPage;