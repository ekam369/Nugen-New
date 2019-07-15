import React from 'react';
import './Error.css';

const error = (props) => (
    <div className="error" 
        style={props.show? {display: 'flex'}: {display: 'none'}}>Email or Password is incorrect!</div>
)

export default error;