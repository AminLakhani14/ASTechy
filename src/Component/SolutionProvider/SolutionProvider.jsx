import React, { useEffect, useState } from 'react';
import './SolutionProvider.css';
// import webdev from '../Assets/icons8-website-50.png';

const SolutionProvider = ({ mainText, subText, buttonText }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className={"spcontainer mt-4"}>
            <div className="spleft-side">
                
            </div>
            <div className="spright-side">
                <div className="spcard-container">
                    <h2 className='partnerheading'><span className='changecolor'>{mainText} Development</span> Solutions for Industries</h2>
                    <p className='partnerpara'>{subText}</p>
                    {/* <tabs/> */}
                    <h3 className='togetherpara'>Let’s Start a New {buttonText} Project Together</h3>
                </div>
            </div>
        </div>
    );
};

export default SolutionProvider;
