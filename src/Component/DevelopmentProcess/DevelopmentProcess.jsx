import React, { useEffect, useState } from 'react';
import './DevelopmentProcess.css';
import concept from '../Assets/icons8-concept-64.png';
import design from '../Assets/icons8-design-50.png';
import dev from '../Assets/icons8-developer-50.png';
import deployment from '../Assets/icons8-deployment-64.png';
import testing from '../Assets/icons8-testing-50.png';
import maintain from '../Assets/icons8-wrench-as-a-maintenance-logotype-for-computer-operating-system-24.png';

export const DevelopmentProcess = () => {
    const [devTitleDesc, setDevTitleDesc] = useState({ title: '', desc: '' });
    const PageRoute = window.location.pathname.replace(/^\//, '');
    useEffect(() => {
        debugger;
        getDevTexts();
    }, []);
    const getDevTexts = () => {
        const route = window.location.pathname.replace(/^\//, '');
        const validRoutes = ['blockchain-development-services',
            'web-application-development-services', 'mobile-app-development-services',
            'ui-ux-design-services', 'wordpress-development-services',
            'shopify-development-services', 'mvp-development-services', 'services'];
        if (validRoutes.includes(route)) {
            switch (route) {
                case 'blockchain-development-services':
                    setDevTitleDesc({
                        title: 'Blockchain',
                        desc: 'Our blockchain development process enables us to deliver highly secure and decentralized blockchain networks and applications tailored to your business needs and streamlining business workflows. Our Blockchain team architects a tailored solution to match your needs, incorporating the ideal technologies and features.'
                    })
                    break;
                case 'web-application-development-services':
                    setDevTitleDesc({
                        title: 'Web Application',
                        desc: 'We follow a streamlined agile development process to deliver high-quality web apps on time and budget. This iterative approach allows us to deliver web apps tailored to your specific needs, with continuous improvements based on user feedback.'
                    });
                    break;
                case 'mobile-app-development-services':
                    setDevTitleDesc({
                        title: 'Mobile App',
                        desc: 'At Ropstam, we follow a meticulous and proven mobile app development process to ensure that your project is executed flawlessly from concept to launch. Here’s an overview of our process:'
                    });
                    break;
                case 'ui-ux-design-services':
                    setDevTitleDesc({
                        title: 'UI/UX ',
                        desc: 'At Ropstam, we follow a rigorous 6-step user-centered design process to create experiences that truly resonate with your users. By following this well-defined methodology, we ensure that every design we craft is user-centered, efficient, and optimized for your target audience and matches expected user behavior.'
                    });
                    break;
                case 'wordpress-development-services':
                    setDevTitleDesc({
                        title: 'WordPress',
                        desc: 'Our WordPress website development process ensures each project meets the highest standards. We thoroughly understand your business, target audience, and project goals. Our WordPress team architects a tailored solution to match your needs, incorporating the ideal technologies and features.'
                    });
                    break;
                case 'shopify-development-services':
                    setDevTitleDesc({
                        title: 'Shopify Store',
                        desc: 'Our Shopify website development process is a well-defined journey that ensures your e-commerce success. From concept to launch, we work closely with you to create a flawless and visually stunning online store. We follow the following agile development approach in order to reduce the time-to-market:'
                    });
                    break;
                case 'mvp-development-services':
                    setDevTitleDesc({
                        title: 'MVP',
                        desc: 'Achieve success with seamless MVP support – Let us handle the technicalities so you can focus on growth.'
                    });
                    break;
                // case 'services':
                // setDevTitleDesc({
                //   title: 'Our Custom Mobile App Development Services',
                //   desc: 'We offer end-to-end mobile app development services, from conceptualization and user experience design to development, testing and launch. Our core services include:'
                // });
                // break;
                default:
                    setDevTitleDesc({ title: '', desc: '' })
                    break;
            }
        } else {
            setDevTitleDesc({ title: '', desc: '' })
        }
    };

    return (
        <>
            <div className='mt-4 devpromain' style={{ padding: '0% 10% 0% 6%', height: '550px' }}>
                <div className='pt-4' style={{ width: '100%' }}>
                    <h2>Our <span className='changecolor'>{devTitleDesc.title}</span> {PageRoute === 'ui-ux-design-services' ? 'Design' : 'Development'} Process</h2>
                    <p>{devTitleDesc.desc}</p>
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                    <div style={{ width: '50%', display: 'flex' }}>
                        <div>
                            <img src={concept} alt='' />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }} className='mt-4'>
                            <span className='changecolor'>Concept</span>
                            <span>This involves understanding the client’s needs, defining project goals and
                                requirements and creating a project plan.</span>
                        </div>
                    </div>
                    <div style={{ width: '50%', display: 'flex' }}>
                        <div>
                            <img src={design} alt='' />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }} className='mt-2'>
                            <span className='changecolor'>Design</span>
                            <span>Develop wireframes, mockups, and prototypes to create a visual
                                representation of the {devTitleDesc.title} website or Apps UI/UX for perfect user experience.</span>
                        </div>
                    </div>
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }} className='mt-5'>
                    <div style={{ width: '50%', display: 'flex' }}>
                        <div>
                            <img src={dev} alt='' />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }} className='mt-2'>
                            <span className='changecolor'>Development</span>
                            <span>Code the {devTitleDesc.title} solution and integrate necessary third-party ?tools or APIs for enhanced
                                functionality and performance.</span>
                        </div>
                    </div>
                    <div style={{ width: '50%', display: 'flex' }}>
                        <div>
                            <img src={testing} alt='' />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }} className='mt-2'>
                            <span className='changecolor'>Testing</span>
                            <span>Conduct various tests to ensure the security and functionality of the {devTitleDesc.title} solution.</span>
                        </div>
                    </div>
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }} className='mt-5'>
                    <div style={{ width: '50%', display: 'flex' }}>
                        <div>
                            <img src={deployment} alt='' />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }} className='mt-2'>
                            <span className='changecolor'>Deployment</span>
                            <span>Launch the {devTitleDesc.title} solution and monitor its performance, making necessary updates to ensure optimal functionality.</span>
                        </div>
                    </div>
                    <div style={{ width: '50%', display: 'flex' }}>
                        <div>
                            <img src={maintain} alt='' width={'30px'} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }} className='mt-2'>
                            <span className='changecolor'>Maintenance</span>
                            <span>Ensure optimal performance and security through maintenance, quality assurance, upgrades, and new feature additions.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DevelopmentProcess;
