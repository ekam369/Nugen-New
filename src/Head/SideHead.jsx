import React, { Component } from 'react';
import "./css/SideHead.css";

class SideHead extends Component {
    render() { 
        return (  
            <div id="bar" className="bar">
                    <div className="tabs">
                        <div className="tab">
                            <div className="tab-cover">
                                <div className="tab-tex">Dashboard</div><i class="fa fa-home ico"></i>
                            </div>
                        </div>
                        <div className="tab">
                            <div className="tab-cover">
                                <div className="tab-tex">Attendance</div><i class="fas fa-hand-paper ico"></i>
                            </div>
                        </div>
                        <div className="tab">
                            <div className="tab-cover">
                                <div className="tab-tex">Batches</div><i class='fas fa-user-graduate ico'></i>
                            </div>
                        </div>
                        <div className="tab">
                            <div className="tab-cover">
                                <div className="tab-tex">Courses</div><i class='fas fa-book-reader ico'></i>
                            </div>
                        </div>
                        <div className="tab">
                            <div className="tab-cover">
                                <div className="tab-tex">Personal Details</div><i class="fa fa-file-text ico"></i>
                            </div>
                        </div>
                        <div className="tab">
                            <div className="tab-cover">
                                <div className="tab-tex">Assignments</div><i class='fas fa-book-open ico'></i>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
 
export default SideHead;