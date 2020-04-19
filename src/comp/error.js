import React from 'react';
import {Link }from 'react-router-dom';

const error =()=>{
    return(
        <div>
            <Link to="/">go home</Link>404!
        </div>
    )
}
export default error;