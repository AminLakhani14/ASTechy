import React from 'react';
import './ProjectPartner.css';

const ProjectPartner = ({ mainText, subText, buttonText }) => {
    return (
        <div className="container">
            <div className="left-side">
                <h2>Why Choose Ropstam as Your <span className='changecolor'>{mainText} Company</span></h2>
                <p>{subText}</p>
                <p>Let’s Start a New {buttonText} Project Together</p>
                <a to='/contact' href='/contact'>
                    <button className="headerMenuButton"><b>Contact Us</b></button>
                </a>
            </div>
            <div className="right-side">
                <div className="card-container">
                    <div style={{ display: 'flex' }}>
                        <div className="card">
                            <img src="image1.jpg" alt="Image 1" />
                            <div className="content">
                                <div className="row">14+</div>
                                <div className="row">Year of Experience</div>
                            </div>
                        </div>
                        <div className="card">
                            <img src="image2.jpg" alt="Image 2" />
                            <div className="content">
                                <div className="row">15+</div>
                                <div className="row">Year of Experience</div>
                            </div>
                        </div>
                        <div className="card">
                            <img src="image3.jpg" alt="Image 3" />
                            <div className="content">
                                <div className="row">16+</div>
                                <div className="row">Year of Experience</div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div className="card">
                            <img src="image4.jpg" alt="Image 4" />
                            <div className="content">
                                <div className="row">17+</div>
                                <div className="row">Year of Experience</div>
                            </div>
                        </div>
                        <div className="card">
                            <img src="image5.jpg" alt="Image 5" />
                            <div className="content">
                                <div className="row">18+</div>
                                <div className="row">Year of Experience</div>
                            </div>
                        </div>
                        <div className="card">
                            <img src="image6.jpg" alt="Image 6" />
                            <div className="content">
                                <div className="row">19+</div>
                                <div className="row">Year of Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPartner;
