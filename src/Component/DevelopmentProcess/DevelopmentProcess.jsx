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
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    // Function to update the windowWidth state when the resize event occurs
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);
    useEffect(() => {
        // debugger;
        getDevTexts();
    }, []);
    const getDevTexts = () => {
        const route = window.location.pathname.replace(/^\//, '');
        const validRoutes = ['graphics-development-services',
            'web-application-development-services', 'seo-services',
            'ui-ux-design-services', 'wordpress-development-services',
            'social-media-marketing-services', '3d-animation-services', 'services'];
        if (validRoutes.includes(route)) {
            switch (route) {
                case 'graphics-development-services':
                    setDevTitleDesc({
                        title: 'Graphics Designing',
                        desc: "Our graphics design process guarantees the creation of captivating and personalized visual content, meticulously tailored to your audience's preferences and optimized for seamless integration. Our graphics design team crafts customized solutions aligned with your goals, incorporating cutting-edge features and technologies to amplify impact."
                    })
                    break;
                case 'web-application-development-services':
                    setDevTitleDesc({
                        title: 'Web Application Development',
                        desc: 'We follow a streamlined agile development process to deliver high-quality web apps on time and budget. This iterative approach allows us to deliver web apps tailored to your specific needs, with continuous improvements based on user feedback.'
                    });
                    break;
                case 'seo-services':
                    setDevTitleDesc({
                        title: 'SEO',
                        desc: "At ASTECHY, we adhere to a rigorous and proven SEO process to guarantee flawless execution of your project from inception to implementation. Here's an outline of our process:"
                    });
                    break;
                case 'ui-ux-design-services':
                    setDevTitleDesc({
                        title: 'UI/UX Designing',
                        desc: 'At ASTECHY, we follow a rigorous 6-step user-centered design process to create experiences that truly resonate with your users. By following this well-defined methodology, we ensure that every design we craft is user-centered, efficient, and optimized for your target audience and matches expected user behavior.'
                    });
                    break;
                case 'wordpress-development-services':
                    setDevTitleDesc({
                        title: 'WordPress Development',
                        desc: 'Our WordPress website development process ensures each project meets the highest standards. We thoroughly understand your business, target audience, and project goals. Our WordPress team architects a tailored solution to match your needs, incorporating the ideal technologies and features.'
                    });
                    break;
                case 'social-media-marketing-services':
                    setDevTitleDesc({
                        title: 'Social Media Marketing',
                        desc: "Our Social Media Marketing process is a meticulously planned journey designed to guarantee your brand's online success. From strategy development to implementation, we collaborate closely with you to craft engaging and impactful social media campaigns. We adhere to the following agile approach to minimize time-to-market and maximize results:"
                    });
                    break;
                case '3d-animation-services':
                    setDevTitleDesc({
                        title: '3D Animation',
                        desc: 'Unlock success with effortless 3D animation support - Allow us to manage the technical aspects while you concentrate on growth.'
                    });
                    break;
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
            <div className='margintop devpromain' style={{ padding: '3% 6% 3% 7%', height: 'auto' }}>
                <div className='col-lg-12'>
                    <h1 className='heading4034'>Our <span className='changecolor'>{devTitleDesc.title}</span> Process</h1>
                    <p className='font2014' style={{ width: "95%" }}>{devTitleDesc.desc}</p>
                    <div className='borderbottomdp'></div>
                </div>
                <div className={windowWidth <=1024 ?"d-flex w-100 justify-content-around margintop marginbottom flex-column gap-3":"d-flex w-100 justify-content-around margintop marginbottom"}>
                    <div className={windowWidth <=1024?"d-flex w-100":'d-flex w-50'}>
                        <div className=''>
                            <img src={concept} alt='' className='imagecutterdp' />
                        </div>
                        <div className='d-flex flex-column  mx-2'>
                            <span className='changecolor font26'>Concept</span>
                            <span  className={windowWidth <=1024?'font18 w-100':'font18 w-75'}>This involves understanding the client’s needs, defining project goals and
                                requirements and creating a project plan.</span>
                        </div>
                    </div>
                    <div className={windowWidth <=1024?"d-flex w-100":'d-flex w-50'}>
                        <div>
                            <img className='imagecutterdp' src={design} alt='' />
                        </div>
                        <div className='d-flex flex-column  mx-2'>
                            <span className='changecolor font26'>Design</span>
                            <span  className={windowWidth <=1024?'font18 w-100':'font18 w-75'}>Develop wireframes, mockups, and prototypes to create a visual
                                representation of the {devTitleDesc.title} website or Apps {devTitleDesc.title} for perfect user experience.</span>
                        </div>
                    </div>
                </div>
                <div className={windowWidth <=1024 ?"d-flex w-100 justify-content-around margintop marginbottom flex-column gap-3":"d-flex w-100 justify-content-around margintop marginbottom"}>
                <div className={windowWidth <=1024?"d-flex w-100":'d-flex w-50'}>
                        <div>
                            <img className='imagecutterdp' src={dev} alt='' />
                        </div>
                        <div className='d-flex flex-column  mx-2'>
                            <span className='changecolor font26'>Development</span>
                            <span  className={windowWidth <=1024?'font18 w-100':'font18 w-75'}>Code the {devTitleDesc.title} solution and integrate necessary third-party ?tools or APIs for enhanced
                                functionality and performance.</span>
                        </div>
                    </div>
                    <div className={windowWidth <=1024?"d-flex w-100":'d-flex w-50'}>
                        <div>
                            <img className='imagecutterdp' src={testing} alt='' />
                        </div>
                        <div className='d-flex flex-column  mx-2'>
                            <span className='changecolor font26'>Testing</span>
                            <span  className={windowWidth <=1024?'font18 w-100':'font18 w-75'}>Conduct various tests to ensure the security and functionality of the {devTitleDesc.title} solution.</span>
                        </div>
                    </div>
                </div>
                <div className={windowWidth <=1024 ?"d-flex w-100 justify-content-around margintop marginbottom flex-column gap-3":"d-flex w-100 justify-content-around margintop marginbottom"}>
                <div className={windowWidth <=1024?"d-flex w-100":'d-flex w-50'}>
                        <div>
                            <img className='imagecutterdp' src={deployment} alt='' />
                        </div>
                        <div className='d-flex flex-column  mx-2'>
                            <span className='changecolor font26'>Deployment</span>
                            <span  className={windowWidth <=1024?'font18 w-100':'font18 w-75'}>Launch the {devTitleDesc.title} solution and monitor its performance, making necessary updates to ensure optimal functionality.</span>
                        </div>
                    </div>
                    <div className={windowWidth <=1024?"d-flex w-100":'d-flex w-50'}>
                        <div>
                            <img className='imagecutterdp' src={maintain} alt='' width={'30px'} />
                        </div>
                        <div className='d-flex flex-column  mx-2'>
                            <span className='changecolor font26'>Maintenance</span>
                            <span  className={windowWidth <=1024?'font18 w-100':'font18 w-75'}>Ensure optimal performance and security through maintenance, quality assurance, upgrades, and new feature additions.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DevelopmentProcess;
