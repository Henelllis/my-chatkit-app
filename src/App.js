import React, {state}from 'react';
import { connect } from 'react-redux';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';

import * as actions from './store/actions/index';
import LoginPage from './components/LoginPage/LoginPage';
import Layout from './containers/Layout/Layout';


class App extends React.Component {

    render() {


        let routes = (
            <Switch>
                <Route exact path='/'      component={LoginPage}/>
                <Redirect to='/' />
            </Switch>
        );
        
        if(this.props.user){
            routes = (
                <Switch>
                    <Route exact path='/chat' component={Layout}/>
                    <Route exact path='/'      component={LoginPage}/>
                    <Redirect to='/' />
                </Switch>
            )
        }

        return (
            <div >
                {routes}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        user: state.login.currentUser,
        loading: state.login.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: () => dispatch(actions.login('Frogger'))
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps )(App));