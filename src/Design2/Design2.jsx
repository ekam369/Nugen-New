import React, { Component } from 'react';
import Design2js from './Design2js';
import './css/Design2.css';
import Aux from '../hoc/Aux';
import Head from '../Head/Head';
import Sidebar from './Sidebar';
import NewTask from './NewTask';
import { BrowserRouter as Route, } from 'react-router-dom';

class Design2 extends Component {

    state = {
        show: true
    }

    render() { 
        return (  
            <Aux>
                <Head clicked={true}/>
                <Sidebar />
                <div className="tasks-container">
                    <div className="my-tasks">MY TASKS</div>
                    <div className="language">HTML/CSS</div>
                    <Design2js />
                    <div className="language">JAVASCRIPT</div>
                    <Design2js />
                    <div className="language">REACT</div>
                    <Design2js />
                    <div className="language">C++</div>
                    <Design2js />
                    <div className="language">PYTHON</div>
                    <Design2js />
                </div>
                <Route path="/design/newtask" component={NewTask} />
            </Aux>
        );
    }
}
 
export default Design2;