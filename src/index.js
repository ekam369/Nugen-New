import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Head from './Head/Head';
import Design2 from './Design2/Design2';
import NewTask from './Design2/NewTask';
import AuthRoute from './common/ProtectedRoute';
import cookie from 'react-cookies';
const checkAuth = () => {
    const token = cookie.load('token');
    if(!token){
        return false;
    }
    return true;
}

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/head" render={(props) =>
                checkAuth() ? <Head {...props} /> : <App {...props} />} />
            {/* <AuthRoute exact path="/head" component={Head} />
            <AuthRoute exact path="/design" component={Design2} /> */}
        </Switch>
    </Router>
    , document.getElementById('root'));

serviceWorker.unregister();
