import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Head from './Head/Head';
import Design2 from './Design2/Design2';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/head" component={Head}/>
            <Route path="/head/design" component={Design2}/>
        </Switch>
    </Router>
    , document.getElementById('root'));

serviceWorker.unregister();
