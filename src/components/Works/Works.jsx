import React from 'react';
import './Works.css';
import Upwork from '../../img/Upwork.png';
import Facebook from '../../img/Facebook.png';
import amazon from '../../img/amazon.png';
import fiverr from '../../img/fiverr.png';
import Shopify from '../../img/Shopify.png';

const Works = () => {
    return (
        <div className='works'>
            {/* left-side */}
            <div className='awesome'>
                <span>Works for All these</span>
                <span>Brands & Clients</span>
                <span>
                    Lorem ispum is simpley dummy text of printing of printing
                    Lorem
                    <br />
                    ispum is simpley dummy text of printing
                    <br />
                    ispum is simpley dummy text of printing
                    <br />
                    ispum is simpley dummy text of printing
                </span>
                <button className='button s-button'>Hire me</button>
                <div
                    className='blur s-blur1'
                    style={{ background: '#C1F5FF' }}
                ></div>
            </div>
            {/* right-side */}
            <div className='w-right'>
                <div className='w-mainCircle'>
                    <div className='w-secCircle'>
                        <img src={Upwork} alt='' />
                    </div>
                    <div className='w-secCircle'>
                        <img src={fiverr} alt='' />
                    </div>
                    <div className='w-secCircle'>
                        <img src={amazon} alt='' />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Shopify} alt='' />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Facebook} alt='' />
                    </div>
                </div>
                {/* background-circles */}
                <div className='w-backCircle blueCircle'></div>
                <div className='w-backCircle yellowCircle'></div>
            </div>
        </div>
    );
};

export default Works;
