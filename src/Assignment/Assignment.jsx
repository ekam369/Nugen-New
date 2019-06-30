import React, { Component } from 'react';
import './Assignment.css';
import CompletedAssignment from './Completed-Assignment';

class Assignment extends Component {
    render() { 
        return (  
            <div className="assign-par">
                <div className="prev-assign">
                    <div className="month-block">
                        <div className="month-cover">
                            <div className="month">Jan</div>
                        </div>
                        <div className="month-cover">
                            <div className="month">Feb</div>
                        </div>
                        <div className="month-cover">
                            <div className="month">Mar</div>
                        </div>
                        <div className="month-cover">
                            <div className="month">Apr</div>
                        </div>
                        <div className="month-cover">
                            <div className="month">May</div>
                        </div>
                    </div>

                    <CompletedAssignment />  
                </div>
                
            </div>
        );
    }
}
 
export default Assignment;