import React from 'react';
import './Intro.css';
import GitHub from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';

const Intro = () => {
    return (
        <div className='intro'>
            <div className='i-left'>
                <div className='i-name'>
                    <span>Hi! I Am</span>
                    <span>Rajesh K</span>
                    <span>
                        Full Stack Developer with high level of experience in
                        web development, producting the Quality work
                    </span>
                </div>
                <button className='button i-button'>Hire me</button>
                <div className='i-icons'>
                    <img src={GitHub} alt='GitHub' />
                    <img src={LinkedIn} alt='LinkedIn' />
                    <img src={Instagram} alt='Instagram' />
                </div>
            </div>
            <div className='i-right'>
                <img src={Vector1} alt='' />
                <img src={Vector2} alt='' />
                <img src={boy} alt='' />
                <img src={glassesimoji} alt='' />
                <div style={{ top: '-3%', left: '46%' }}>
                    <FloatingDiv image={crown} txt1='Web' txt2='Developer' />
                </div>
                <div style={{ top: '18rem', left: '1rem' }}>
                    <FloatingDiv image={thumbup} txt1='Best' txt2='Design' />
                </div>
                {/* Blur divs */}
                <div
                    className='blur'
                    style={{ backgroud: 'rgb(238 210 255)' }}
                ></div>
                <div
                    className='blur'
                    style={{
                        background: '#C1F5FF',
                        top: '10rem',
                        width: '20rem',
                        height: '25rem',
                        left: '-9rem',
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Intro;
