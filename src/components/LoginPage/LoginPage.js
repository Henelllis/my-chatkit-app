import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../store/actions/index';

//Maybee Try and figure it out
class LoginPage extends Component {
    
    state = {
        controls:{
            control:null
        },
        userNameField:''
    };

    componentDidUpdate(){

    }

    // shouldComponentUpdate( nextProps, nextState){
    //     // console.log(nextProps)
    //     // if(nextProps.user !== undefined && nextProps.user !== this.state.user){
    //     //     console.log('WE GOT A CHANGE');
    //     // }
    // }

    onConfirmLogin = () =>{
        // this.props.history.push('/message');
        this.props.onLogin(this.state.userNameField);

    };

    onHandleChange = event => {
        this.setState({
            userNameField: event.target.value
        })

    };

    
    render() {

        if(this.props.user){
            return <Redirect  push to={{pathname: '/chat'}}/>
        }

        return (
            <div className="login">
                
                <div className="login-header-area">
                    <h1 className="login-header">My ChatKit Demo </h1>
                </div>
                <div className="login-input-area">
                <form>
                    <input className="login-input" 
                        onChange={this.onHandleChange} 
                        placeholder="Please Enter Username"
                        value={this.state.userNameField}
                        type="text"/>
                </form>
                </div>
                <div className="login-info-area">
                    <h3 className="login-info-header"> 
                        Use userName Frogger or Pippin for Demo
                    </h3> 
                </div>
                <div className="login-button-area">
                    <button className="login-button"
                            onClick={this.onConfirmLogin}> 
                            Login 
                    </button>
                </div>
            </div>
        )
    };
};

const mapStateToProps = state => {
    return{
        user: state.login.currentUser,
        loading: state.login.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (userName) => dispatch(actions.login(userName))
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(LoginPage);