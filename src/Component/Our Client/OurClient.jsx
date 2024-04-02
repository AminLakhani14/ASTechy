import React, { useEffect, useState } from 'react';
import './OurClient.css';
import { Link } from "react-router-dom";

const OurClient = () => {
    return (
        <div className={"occontainer"}>
            <div className="ocleft-side">
                <h2 className='ourclientheading'>Why <span className='changecolor'>our clients</span> love us?</h2>
                <p className='ourclientpara'>Our clients love us because we prioritize effective communication and are committed to delivering high-quality software solutions that meet the highest standards of excellence.</p>
                <Link to='/contact' href='/contact' className='contactusac'>
                    <button className="HireUsButton mt-4">Contact Us</button>
                </Link>
            </div>
            <div className="ocright-side">
                <div className="occard-container">
                    <h5>Our comprehensive suite of services, including WordPress development, UI/UX design, 3D 
                        animation, graphics design, SEO, social media marketing etc, has consistently met and 
                        surpassed expectations. The tangible results, such as increased downloads and monthly 
                        users, underscore our dedication to excellence across all facets of your project.</h5>
                </div>
            </div>
        </div>
    );
};

export default OurClient;
