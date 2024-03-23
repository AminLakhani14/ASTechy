import React, { useEffect, useState } from 'react';
import './OurClient.css';
import CustomCarousel from '../CustomSlider/CustomSlider';
import images from '../../Images/sliderData';
import AutoPlay from '../../Global/DCSlider';
// import experience from '../Assets/icons8-customer-insight-48.png';
// import talented from '../Assets/icons8-multiplayer-64.png';
// import webdev from '../Assets/icons8-website-50.png';
// import projectdel from '../Assets/icons8-project-50.png';
// import countries from '../Assets/icons8-middle-east-48.png';
// import satisfaction from '../Assets/icons8-satisfaction-50.png';

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
                <a to='/contact' href='/contact'>
                    <button className="HireUsButton mt-4">Contact Us</button>
                </a>
            </div>
            <div className="ocright-side">
                <div className="occard-container">
                    <AutoPlay />
                </div>
            </div>
        </div>
    );
};

export default OurClient;
