import React, { Component } from 'react';
import './css/Head.css'

import Photo from './Photo';

class Head extends Component {

    rotateCross = () => {
         document.getElementById("bar1").style.marginTop = "34px";
         document.getElementById("bar1").style.transform = "rotate(45deg)";
         document.getElementById("bar2").style.visibility = "hidden";
         document.getElementById("bar3").style.marginTop = "34px";
         document.getElementById("bar3").style.transform = "rotate(135deg)";
    }

    render() { 

        const style1 = {
            display: 'inline-block',
            cursor: 'pointer'
        }
        const style2 = {
            width: '35px',
            height: '5px',
            background: '#333',
            margin: '6px 0',
            transition: '0.4s'
        }

        return (  
            <div className="head-container">
                <div className="tab-container">
                    <div onClick={this.rotateCross} classname="container">
                        <div id="bar1" className="bars bar1"></div>
                        <div id="bar2" className="bars bar2"></div>
                        <div id="bar3" className="bars bar3"></div>
                    </div>

                        <div className="tabs">
                            <div className="tab">Dashboard</div>
                            <div className="tab">Attendance</div>
                            <div className="tab">Batches</div>
                            <div className="tab">Courses</div>
                            <div className="tab">Assignments</div>
                        </div>
                </div>
                <Photo />
            </div>
        );
    }
}
 
export default Head;