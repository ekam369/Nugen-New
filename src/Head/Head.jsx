import React, { Component } from 'react';
import './Head.css'

import Photo from './Photo';

class Head extends Component {
    state = {  }
    render() { 
        return (  
            <div className="head-container">
                <div className="tab-container">
                    <div className="tabs">
                        <div className="tab">Dashboard</div>
                        <div className="tab">Attendance</div>
                        <div className="tab">Batches</div>
                        <div className="tab">Courses</div>
                        <div className="tab">Assignments</div>
                    </div>
                    <Photo />
                </div>
            </div>
        );
    }
}
 
export default Head;