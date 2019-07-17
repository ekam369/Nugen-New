import React, { Component } from 'react';
import './css/Head.css';
import Photo from './Photo';
import { Link } from 'react-router-dom';

class Head extends Component {

    rotateCross = () => {
         document.getElementById("bar1").style.marginTop = "34px";
         document.getElementById("bar1").style.transform = "rotate(45deg)";
         document.getElementById("bar2").style.visibility = "hidden";
         document.getElementById("bar3").style.marginTop = "34px";
         document.getElementById("bar3").style.transform = "rotate(135deg)";
    }

    render() { 

        const style = {
            background: "#e25383"
        }

        return (  
            <div className="head-container">
                <div className="tab-container">
                    <div onClick={this.rotateCross} >
                        <div id="bar1" className="bars bar1"></div>
                        <div id="bar2" className="bars bar2"></div>
                        <div id="bar3" className="bars bar3"></div>
                    </div>

                        <div className="tabs">
                            <div className="tab">
                                <div className="tab-tex">
                                    Dashboard
                                </div>
                            </div>
                            <div className="tab">
                                <div className="tab-tex">Attendance</div>
                            </div>
                            <div className="tab">
                                <div className="tab-tex">Batches</div>
                            </div>
                            <div className="tab">
                                <div className="tab-tex">Courses</div>
                            </div>
                            <div className="tab" style={this.props.clicked?style:null}>
                                <Link className="Link" to="/design">Assignments</Link>
                            </div>
                        </div>
                </div>
                <Photo />
            </div>
        );
    }
}
 
export default Head;