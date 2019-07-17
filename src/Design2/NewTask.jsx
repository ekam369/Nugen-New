import React, { Component } from 'react';
import './css/NewTask.css';
import { Link } from 'react-router-dom';

class NewTask extends Component {
    render(){
        return (  
            <div>
                 
                <Link to="/design">
                    <div className="cross-cont">
                        <div className="cross c1"></div>
                        <div className="cross c2"></div>
                    </div>
                </Link>
                <div id="task-par" className="new-task-par">
                <div className="new-task-cont">
                    <div className="new-today-task">TODAY'S TASK</div>
                    <div className="hint-box"></div>
                    <div className="new-task-name">Move Eyes</div>
                    <div className="new-task-desc">Your task is to move eyes of a face by using mouse hover. That is it will move where the mouse moves. You have to write it in HTML and use javascript.</div>
                    <div className="gen">
                        <div className="rating">Rating: 
                        <div className="rate">5.0</div>
                        </div>
                        <div className="language">Language
                            <div className="lang">HTML|CSS|JS</div>
                        </div>
                    </div>
                    <div className="choose">Choose File</div>
                    <div className="chosen-file">
                        No files chosen yet.
                    </div>
                </div>
            </div>
            </div>
        );
    }

    }
 
export default NewTask;