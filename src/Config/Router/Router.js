import React, { Component } from 'react';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import { Home, Signup, Login, Main, Profile, ForgetPassword, Verification, Notfound } from '../../Containers'
import history from '../../Containers/History/History'
import firebase from '../Firebase/Firebase'
// import Notfound from '../../components/';




function PrivateRoute({ component: Component, authed, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
        />
    )
}

function PrivateRoute2({ component: Component, authed, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
        />
    )
}

function PublicRoute({ component: Component, authed, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => authed === false
                ? <Component {...props} />
                : <Redirect to='/home' />}
        />
    )
}

class Routers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authed: false
        }

    }
    componentDidMount() {
        let that = this
        firebase.auth().onAuthStateChanged(function (user) {
            if (user && user.emailVerified) {
                that.setState({
                    authed: true
                })
            } else {
                that.setState({
                    authed: false
                })
            }
        });
    }



    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path='/forget' component={ForgetPassword} />
                    <PrivateRoute authed={this.state.authed} path="/home" component={Home} />
                    <PublicRoute authed={this.state.authed} path="/login" component={Login} />
                    <PublicRoute authed={this.state.authed} path="/Signup" component={Signup} />
                    <PublicRoute authed={this.state.authed} path="/verify" component={Verification} />
                    <PrivateRoute2 authed={this.state.authed} path="/profile" component={Profile} />

                </Switch>
            </Router>
        )
    }


}



export default Routers;

