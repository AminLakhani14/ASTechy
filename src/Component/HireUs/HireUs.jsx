import React, { useEffect, useState } from 'react';
import { ServiceCardList } from '../Services/ServiceChildCards/ServiceChildCards';
import './HireUs.css';
// import concept from '../Assets/icons8-concept-64.png';
// import design from '../Assets/icons8-design-50.png';
// import dev from '../Assets/icons8-developer-50.png';
// import deployment from '../Assets/icons8-deployment-64.png';
// import testing from '../Assets/icons8-testing-50.png';
// import maintain from '../Assets/icons8-wrench-as-a-maintenance-logotype-for-computer-operating-system-24.png';

export const HireUs = () => {
    const [devTitleDesc, setDevTitleDesc] = useState({ title: '', desc: '' });
    const PageRoute = window.location.pathname.replace(/^\//, '');
    useEffect(() => {
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
                        desc: 'Forge your ideal graphics design team by enlisting our seasoned graphic designers. Our dedicated graphics design team excels in crafting captivating visuals, perfecting layouts, and more, guaranteeing your visual content shines amidst competition in the market.'
                    })
                    break;
                case 'web-application-development-services':
                    setDevTitleDesc({
                        title: 'Web Application',
                        desc: 'Finding the right talent for your project is easy with Ropstam. Our talented in-house team has decade of experience successfully designing, developing, and launching custom web apps. This expertise allows us to efficiently handle any type of web app project:'
                    });
                    break;
                case 'seo-services':
                    setDevTitleDesc({
                        title: 'SEO',
                        desc: "Seeking adept SEO specialists to augment your team? At SSTech, we provide flexible hiring solutions, granting you access to top-tier talent seamlessly. Whether you require a single specialist or an entire team, we've got you covered."
                    });
                    break;
                case 'ui-ux-design-services':
                    setDevTitleDesc({
                        title: 'UI/UX ',
                        desc: 'Ready to bring your digital vision to life? Our expert UI/UX designers are ready to help you create transformative digital products that convert and engage users.'
                    });
                    break;
                case 'wordpress-development-services':
                    setDevTitleDesc({
                        title: 'WordPress',
                        desc: 'Our WordPress development team is well-versed in the latest technologies and tools, ensuring your website is built using the most advanced and efficient methods.'
                    });
                    break;
                case 'social-media-marketing-services':
                    setDevTitleDesc({
                        title: 'Social Media Marketing',
                        desc: "Interested in recruiting a dedicated Social Media Marketing team? SSTech offers flexible engagement models to expand your team effortlessly:"
                    });
                    break;
                case '3d-animation-services':
                    setDevTitleDesc({
                        title: '3D Animation',
                        desc: 'Exploring options to hire expert 3D animators for your project? SSTech offers a team of seasoned professionals poised to bring your vision to life. Our skilled 3D animators excel in animation development, ensuring your project receives the expertise it deserves.'
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

    const serviceCardList1 = [
        { icon: { undefined }, title: 'Fast Hiring', description: 'With our fast and efficient hiring process, you can add a new team member with just a click of a button and have them onboarded within 24-48 hours.' },
        { icon: { undefined }, title: 'Top Talent', description: 'Our team is dedicated to sourcing and managing the top talent available, while also providing ongoing training and development to ensure they remain the best in their field.' },
        { icon: { undefined }, title: 'Time Zone Aligned', description: 'We’ve equipped our team with collaborative skills using advanced scheduling tools to ensure that all meetings and deadlines align with the client’s time zones.' },
    ];

    const serviceCardList2 = [
        { icon: { undefined }, title: 'Daily Progress Report', description: 'Our daily progress reports keep you informed and involved throughout the project, providing a clear understanding of our team’s activities for peace of mind.' },
        { icon: { undefined }, title: 'Fully Managed Team', description: 'Our team of dedicated project managers goes above and beyond to ensure you are paired with the most suitable team members for your project.' },
        { icon: { undefined }, title: 'Agile Meetings', description: 'Regular meetings are held to maintain clear communication and keep everyone informed about the progress and status of the project.' },
    ];
    return (
        <>
            <div className='margintop'>
                <div className='text-center d-flex flex-column align-items-center'>
                    <h1 className='heading4034' style={{ fontWeight: "700" }}>Hire <span className='changecolor'>{devTitleDesc.title} {PageRoute === 'ui-ux-design-services' ? 'Designers' : 'Developers'}<br></br>
                    </span> with <span className='changecolor'>SSTech</span></h1>
                    <p className='font2014 w-50 mt-3'>{devTitleDesc.desc}</p>
                </div>
                <div className='row justify-content-center margintop'>
                    <div className='col-lg-10'>
                        <ServiceCardList ServiceCardList={serviceCardList1} />
                    </div>
                </div>
                <div className='row justify-content-center mt-4'>
                    <div className='col-lg-10'>
                        <ServiceCardList ServiceCardList={serviceCardList2} />
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <button className="HireUsButton margintop" style={{ marginBottom: '70px' }}>
                        Hire MVP Developers
                    </button>
                </div>
            </div>
        </>
    );
};

export default HireUs;
