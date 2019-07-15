import React from 'react';
import './Loader.css';

const loader = (props) => {
    if(props.show){
        return(
            <div className="loader-cont">
                <div className="loader"></div>
            </div>
        )
    }
    return null;
}


export default loader;