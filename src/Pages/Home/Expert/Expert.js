import React from 'react';
import './Expert.css'

const Expert = ({ expert }) => {
    const { img, name, expertize } = expert;
    return (
        <div className='col-lg-4 col-sm-6 col-12 image'>
            <img src={img} alt="" />
            <h3>Name:{name}</h3>
            <h5 className='text-danger'>expertize:{expertize}</h5>

        </div>
    );
};

export default Expert;