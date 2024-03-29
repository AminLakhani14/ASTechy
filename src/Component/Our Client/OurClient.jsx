import React, { useEffect, useState } from 'react';
import './OurClient.css';
import CustomCarousel from '../CustomSlider/CustomSlider';
import images from '../../Images/sliderData';
import OurClientSlider from '../../Global/OurClientSlider';
import { Link } from "react-router-dom";

const OurClient = () => {
    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // useEffect(() => {
    //     const handleResize = () => {
    //         setWindowWidth(window.innerWidth);
    //     };

    //     window.addEventListener('resize', handleResize);

    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);
    return (
        <div className={"occontainer mt-4"}>
            <div className="ocleft-side">
                <h2 className='ourclientheading'>Why <span className='changecolor'>our clients</span> love us?</h2>
                <p className='ourclientpara'>Our clients love us because we prioritize effective communication and are committed to delivering high-quality software solutions that meet the highest standards of excellence.</p>
                <Link to='/contact' href='/contact' className='contactusac'>
                    <button className="HireUsButton mt-4">Contact Us</button>
                </Link>
            </div>
            <div className="ocright-side">
                <div className="occard-container">
                    {/* <OurClientSlider /> */}
                </div>
            </div>
        </div>
    );
};

export default OurClient;
