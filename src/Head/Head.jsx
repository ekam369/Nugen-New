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

        return (  
            <div className="head-container">
                <div className="tab-container">
                    <div onClick={this.rotateCross} >
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