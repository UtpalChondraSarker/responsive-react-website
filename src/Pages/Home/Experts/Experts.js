import React from 'react';

import mechanic1 from '../../../images/mechanice/mechanic-1.jpg'
import mechanic2 from '../../../images/mechanice/mechanic-2.jpg'
import mechanic3 from '../../../images/mechanice/mechanic-3.jpg'
import mechanic4 from '../../../images/mechanice/mechanic-4.jpg'
import mechanic5 from '../../../images/mechanice/mechanic-5.jpg'
import Expert from '../Expert/Expert';

const experts = [
    {
        img: mechanic1,
        name: 'Andrew Smith',
        expertize: 'engine Expert'
    },
    {
        img: mechanic2,
        name: 'Andrew Smith',
        expertize: 'engine Expert'
    },
    {
        img: mechanic3,
        name: 'Andrew Smith',
        expertize: 'engine Expert'
    },
    {
        img: mechanic4,
        name: 'Andrew Smith',
        expertize: 'engine Expert'
    },
    {
        img: mechanic5,
        name: 'Andrew Smith',
        expertize: 'engine Expert'
    },
]

const Experts = () => {
    return (
        <div className='container' id='experts'>
            <h2 className='text-primary mt-5'>Our Experts</h2>
            <div className='row'>
                {
                    experts.map(expert => <Expert expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;