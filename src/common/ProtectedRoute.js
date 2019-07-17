import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import cookie from 'react-cookies';

const checkAuth = () => {
    const token = cookie.load('token');
    if(!token){
        return false;
    }
    return true;
}

const AuthRoute = ({ component: Component, ...rest}) => {
    console.log(Component);
    return (<Route {...rest} render={ props => (
        checkAuth() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ 
                pathname: '/',
                state: {from: props.location}
            }
        }  />
        )
    )}
    />)
}


export default AuthRoute;