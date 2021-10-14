import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/error/error.jpg'

const NotFound = () => {
    return (
        <div>
            <img src={notFound} alt="" /><br /><br />
            <Link to='/'><button>Go Back</button></Link>
        </div>
    );
};

export default NotFound;
