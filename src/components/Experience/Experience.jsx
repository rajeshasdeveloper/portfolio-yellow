import React from 'react';
import './Experience.css';

const Experience = () => {
    return (
        <div className='experience'>
            <div className='achievement'>
                <div className='circle'>3+</div>
                <span>years</span>
                <span>Experience</span>
            </div>
            <div className='achievement'>
                <div className='circle'>10+</div>
                <span>projects</span>
                <span>Completed</span>
            </div>
            <div className='achievement'>
                <div className='circle'>2+</div>
                <span>companies</span>
                <span>worked</span>
            </div>
        </div>
    );
};

export default Experience;