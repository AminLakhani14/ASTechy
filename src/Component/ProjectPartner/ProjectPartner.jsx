import React from 'react';
import './ProjectPartner.css';

const ProjectPartner = ({ mainText, subText, buttonText }) => {
    return (
        <div className="container">
            <div className="left-side">
                <h2 className='partnerheading'>Why Choose Ropstam as Your <span className='changecolor'>{mainText} Company</span></h2>
                <p className='partnerpara'>{subText}</p>
                <h3 className='togetherpara'>Let’s Start a New {buttonText} Project Together</h3>
                <a to='/contact' href='/contact'>
                    <button className="contactUsButton"><b>Contact Us</b></button>
                </a>
            </div>
            <div className="right-side">
                <div className="card-container">
                    <div style={{ display: 'flex' }}>
                        <div className="card">
                            <div className='subcontentcard'>
                                <img src="image1.jpg" alt="Image 1" />
                                <div className="content">
                                    <h4 className="row1">14+</h4>
                                    <p className="row">Year of Experience</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className='subcontentcard'>
                                <img src="image2.jpg" alt="Image 2" />
                                <div className="content">
                                    <h4 className="row1">100+</h4>
                                    <p className="row">Talented Squad</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className='subcontentcard'>
                                <img src="image3.jpg" alt="Image 3" />
                                <div className="content">
                                    <h4 className="row1">100+</h4>
                                    <p className="row">Projects Delivered</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div className="card">
                            <div className='subcontentcard'>
                                <img src="image4.jpg" alt="Image 4" />
                                <div className="content">
                                    <h4 className="row1">300+</h4>
                                    <p className="row">Designs Build</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className='subcontentcard'>
                                <img src="image5.jpg" alt="Image 5" />
                                <div className="content">
                                    <h4 className="row1">30+</h4>
                                    <p className="row">Countries Served</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className='subcontentcard'>
                                <img src="image6.jpg" alt="Image 6" />
                                <div className="content">
                                    <h4 className="row1">100%</h4>
                                    <p className="row">Client Satisfaction</p>
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
