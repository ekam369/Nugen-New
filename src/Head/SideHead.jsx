import React, { Component } from 'react';
import "./css/SideHead.css";

class SideHead extends Component {
    render() { 
        return (  
            <div id="bar" className="bar">
                    <div className="tabs">
                        <div className="tab">
                            <div className="tab-cover">
                                <div className="tab-tex">Dashboard</div><i className="fa fa-home ico"></i>
                            </div>
                        </div>
                        <div className="tab">
                            <div className="tab-cover">
                                <div className="tab-tex">Attendance</div><i className="fas fa-hand-paper ico"></i>
                            </div>
                        </div>
                        <div className="tab">
                            <div className="tab-cover">
                                <div className="tab-tex">Batches</div><i className='fas fa-user-graduate ico'></i>
                            </div>
                        </div>
                        <div className="tab">
                            <div className="tab-cover">
                                <div className="tab-tex">Courses</div><i className='fas fa-book-reader ico'></i>
                            </div>
                        </div>
                        <div className="tab">
                            <div className="tab-cover">
                                <div className="tab-tex">Personal Details</div><i className="fa fa-file-text ico"></i>
                            </div>
                        </div>
                        <div className="tab">
                            <div className="tab-cover">
                                <div className="tab-tex">Assignments</div><i className='fas fa-book-open ico'></i>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
 
export default SideHead;