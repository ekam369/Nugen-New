import React, { Component } from 'react';
import './css/Sidebar.css';
import Aux from '../hoc/Aux';
import { Link } from 'react-router-dom';

class Sidebar extends Component {

    render() { 
        return (
            <Aux>
                <div className="arrow">
                    <i className='fas fa-angle-double-right side-right'></i>
                </div>
                <div className="side-par">
                    <Link to="/design/newtask">
                        <div onClick={this.showTaskHandler} className="new-task-cicle">
                            <div className="plus p1"></div>
                            <div className="plus p2"></div>
                        </div>
                    </Link>
                    <div className="logo-cont">
                        <div className="logo lo1"></div>
                        <div className="logo lo2"></div>
                        <div className="logo lo3"></div>
                        <div className="logo lo4"></div>
                        <div className="logo lo5"></div>
                        <div className="logo lo6"></div>
                    </div>
                </div>
            </Aux>  
        );
    }
}
 
export default Sidebar;