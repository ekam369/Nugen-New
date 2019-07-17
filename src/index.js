import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Head from './Head/Head';
import Design2 from './Design2/Design2';
import cookie from 'react-cookies';

const checkAuth = () => {
    const token = cookie.load('token');
    if(!token){
        return false;
    }


    return true;
}

const AuthRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render={ props => (
        checkAuth() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/' }} />
        )
    )
    }
    />
)

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <AuthRoute path="/head" component={Head} />
            <AuthRoute path="/design" component={Design2} />
        </Switch>
    </Router>
    , document.getElementById('root'));

serviceWorker.unregister();
