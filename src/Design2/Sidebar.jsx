import React, { Component } from 'react';
import './css/Sidebar.css';

class Sidebar extends Component {

    show = () => {
        // document.getElementById("newtask").style.visibility = "visible";
        // document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
    }

    render() { 
        return (
            <div>
                <div className="arrow">
                    <i class='fas fa-angle-double-right side-right'></i>
                </div>
                <div className="side-par">
                <div onClick={this.show} className="new-task-cicle">
                    <div className="plus p1"></div>
                    <div className="plus p2"></div>
                </div>
                <div className="logo-cont">
                    <div className="logo lo1"></div>
                    <div className="logo lo2"></div>
                    <div className="logo lo3"></div>
                    <div className="logo lo4"></div>
                    <div className="logo lo5"></div>
                    <div className="logo lo6"></div>
                </div>
            </div>
            </div>  
        );
    }
}
 
export default Sidebar;