import React, { Component } from 'react';
import './Photo.css';

class Photo extends Component {
    render() { 
        return (  
            <div className="right-cover">
                <div className="tab"></div>
                <div className="photo"></div>
                <div className="message">
                    <i class='fas fa-comment-alt message-icon'></i>
                </div>
            </div>
        );
    }
}
 
export default Photo;