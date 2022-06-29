import React from 'react';
import './Services.css';
import heartemoji from '../../img/heartemoji.png';
import humble from '../../img/humble.png';
import glasses from '../../img/glasses.png';
import Card from '../Card/Card';
import Resume from './resume.pdf';
const Services = () => {
    return (
        <div className='services'>
            {/* left-side */}
            <div className='awesome'>
                <span>My Awesome</span>
                <span>Services</span>
                <span>
                    Lorem ispum is simpley dummy text of printing of printing
                    Lorem
                    <br />
                    ispum is simpley dummy text of printing
                </span>
                <a href={Resume} download>
                    <button className='button s-button'>Download CV</button>
                </a>
                <div
                    className='blur-s-blur1'
                    style={{ background: '#ABF1FF94' }}
                ></div>
            </div>
            {/* right-side */}
            <div className='cards'>
                {/* first card */}
                <div style={{ left: '27rem' }}>
                    <Card
                        emoji={heartemoji}
                        heading={'Design'}
                        detail={'Figma, Sketch, Photoshop, Adobe, Adobe xd'}
                    />
                </div>
                {/* second card */}
                <div style={{ top: '12rem', left: '6rem' }}>
                    <Card
                        emoji={glasses}
                        heading={'Developer'}
                        detail={'Html, css, JavaScript, React'}
                    />
                </div>
                {/* third diiv */}
                <div style={{ top: '20rem', left: '24rem' }}>
                    <Card
                        emoji={humble}
                        heading={'UI/UX'}
                        detail={'lorem ispum.'}
                    />
                </div>
                <div
                    className='blur s-blur1'
                    style={{ background: '#C1F5FF' }}
                ></div>
                <div
                    className='blur s-blur2'
                    style={{ background: 'var(--purple)' }}
                ></div>
            </div>
        </div>
    );
};

export default Services;
