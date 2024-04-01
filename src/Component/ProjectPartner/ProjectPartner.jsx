import React, { useEffect, useState } from 'react';
import './ProjectPartner.css';
import experience from '../Assets/icons8-customer-insight-48.png';
import talented from '../Assets/icons8-multiplayer-64.png';
import webdev from '../Assets/icons8-website-50.png';
import projectdel from '../Assets/icons8-project-50.png';
import countries from '../Assets/icons8-middle-east-48.png';
import satisfaction from '../Assets/icons8-satisfaction-50.png';
import { Link } from "react-router-dom";

const ProjectPartner = ({ mainText, subText, buttonText }) => {
    const PageRoute = window.location.pathname.replace(/^\//, "");
    return (
        <div className={"ppcontainer mt-4"}>
            <div className="ppleft-side">
                <h2 className='partnerheading'>Why Choose ASTECHY as Your <span className='changecolor'>{mainText} {PageRoute === 'graphics-development-services' ? '' : 'Development'} Company</span></h2>
                <p className='partnerpara'>{subText}</p>
                <h3 className='togetherpara'>Let’s Start a New {buttonText} Project Together</h3>
                <Link to='/contact' href='/contact' className='contactuspp'>
                    <button className="contactUsButton"><b>Contact Us</b></button>
                </Link>
            </div>
            <div className="ppright-side">
                <div className="ppcard-container">
                    <div style={{ display: 'flex' }}>
                        <div className="ppcard">
                            <div className='subcontentcard mt-3'>
                                <img src={experience} alt="Image 1" />
                                <div className="ppcontent">
                                    <h4 className="row1">14+</h4>
                                    <p className="row2">Year of Experience</p>
                                </div>
                            </div>
                        </div>
                        <div className="ppcard">
                            <div className='subcontentcard mt-3'>
                                <img src={talented} alt="Image 2" />
                                <div className="ppcontent">
                                    <h4 className="row1">100+</h4>
                                    <p className="row2">Talented Squad</p>
                                </div>
                            </div>
                        </div>
                        <div className="ppcard">
                            <div className='subcontentcard mt-3'>
                                <img src={projectdel} alt="Image 3" />
                                <div className="ppcontent">
                                    <h4 className="row1">100+</h4>
                                    <p className="row2">Projects Delivered</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div className="ppcard">
                            <div className='subcontentcard mt-3'>
                                <img src={webdev} alt="Image 4" />
                                <div className="ppcontent">
                                    <h4 className="row1">300+</h4>
                                    <p className="row2">--Designs Build--</p>
                                </div>
                            </div>
                        </div>
                        <div className="ppcard">
                            <div className='subcontentcard mt-3'>
                                <img src={countries} alt="Image 5" />
                                <div className="ppcontent mt-3">
                                    <h4 className="row1">30+</h4>
                                    <p className="row2">Countries Served</p>
                                </div>
                            </div>
                        </div>
                        <div className="ppcard">
                            <div className='subcontentcard mt-3'>
                                <img src={satisfaction} alt="Image 6" />
                                <div className="ppcontent mt-2">
                                    <h4 className="row1">100%</h4>
                                    <p className="row2">Client Satisfaction</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPartner;
