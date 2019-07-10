import React, { Component } from 'react';
import './css/Photo.css';

class Photo extends Component {
    render() { 
        return (  
            <div className="right-cover">
                <div className="photo"></div>
                <div className="message">
                    <i className='fas fa-comment-alt message-icon'></i>
                </div>
            </div>
        );
    }
}
 
export default Photo;