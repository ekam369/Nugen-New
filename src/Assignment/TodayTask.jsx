import React, { Component } from 'react';
import './TodayTask.css';

class TodayTask extends Component {
    render() { 
        return (  
            <div className="today-par">
                <div className="today-date">
                    <div className="mon">July</div>
                    <div className="mon-date">1</div>
                </div>
                <div className="today-task-cover">
                    <div className="task-photo jsp"></div>
                    <div className="task-tex1-cover">
                        <div className="total-rating">Rating: 5.0</div>
                        <div className="tex1-b">Move Eyes</div>
                        <div className="task1-desc">Your task is to move the eyes of a face on the mouse hover. This should be done in javascript.</div>
                        <div className="upload-but">Upload</div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default TodayTask;