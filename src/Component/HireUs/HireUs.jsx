import React, { useEffect, useState } from 'react';
import { ServiceCardList } from '../Services/ServiceChildCards/ServiceChildCards';
import './HireUs.css';
import hiring from '../Assets/icons8-hire-me-50.png';
import talent from '../Assets/icons8-talent-50.png';
import timezone from '../Assets/icons8-timezone-50.png';
import progress from '../Assets/icons8-progress-50.png';
import team from '../Assets/icons8-team-80.png';
import meeting from '../Assets/icons8-meeting-room-50.png';

export const HireUs = () => {
    const [devTitleDesc, setDevTitleDesc] = useState({
        title: '',
        desc: '',
        cardTitle1: '',
        cardDesc1: '',
        cardTitle2: '',
        cardDesc2: '',
        cardTitle3: '',
        cardDesc3: '',
        cardTitle4: '',
        cardDesc4: '',
        cardTitle5: '',
        cardDesc5: '',
        cardTitle6: '',
        cardDesc6: '',
    });
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
                        desc: 'Forge your ideal graphics design team by enlisting our seasoned graphic designers. Our dedicated graphics design team excels in crafting captivating visuals, perfecting layouts, and more, guaranteeing your visual content shines amidst competition in the market.',
                        cardTitle1: 'Creative Recruitment',
                        cardDesc1: 'Discover handpicked, creative graphic designers who excel in bringing visions to life.',
                        cardTitle2: 'Design Excellence',
                        cardDesc2: 'Experience visually stunning designs that perfectly align with your brand strategy and objectives.',
                        cardTitle3: 'Collaborative Workflow',
                        cardDesc3: 'Utilize collaborative tools for seamless communication, ensuring efficient project management across different time zones.',
                        cardTitle4: 'Creative Progress Updates',
                        cardDesc4: 'Stay informed with regular updates on creative milestones achieved, providing clarity and confidence throughout the project.',
                        cardTitle5: 'Tailored Design Teams',
                        cardDesc5: "Get matched with customized design teams, ensuring the perfect blend of skills for your project's success.",
                        cardTitle6: 'Design Collaboration',
                        cardDesc6: 'Foster a culture of collaboration through regular feedback meetings, enhancing creativity and ensuring client satisfaction.'
                    })
                    break;
                case 'web-application-development-services':
                    setDevTitleDesc({
                        title: 'Web Application',
                        desc: 'Finding the right talent for your project is easy with Ropstam. Our talented in-house team has decade of experience successfully designing, developing, and launching custom web apps. This expertise allows us to efficiently handle any type of web app project:'
                        , cardTitle1: 'Creative Recruitment',
                        cardDesc1: 'Discover handpicked, creative graphic designers who excel in bringing visions to life.',
                        cardTitle2: 'Design Excellence',
                        cardDesc2: 'Experience visually stunning designs that perfectly align with your brand strategy and objectives.',
                        cardTitle3: 'Collaborative Workflow',
                        cardDesc3: 'Utilize collaborative tools for seamless communication, ensuring efficient project management across different time zones.',
                        cardTitle4: 'Creative Progress Updates',
                        cardDesc4: 'Stay informed with regular updates on creative milestones achieved, providing clarity and confidence throughout the project.',
                        cardTitle5: 'Tailored Design Teams',
                        cardDesc5: "Get matched with customized design teams, ensuring the perfect blend of skills for your project's success.",
                        cardTitle6: 'Design Collaboration',
                        cardDesc6: 'Foster a culture of collaboration through regular feedback meetings, enhancing creativity and ensuring client satisfaction.'
                    });
                    break;
                case 'seo-services':
                    setDevTitleDesc({
                        title: 'SEO',
                        desc: "Seeking adept SEO specialists to augment your team? At SSTech, we provide flexible hiring solutions, granting you access to top-tier talent seamlessly. Whether you require a single specialist or an entire team, we've got you covered."
                        , cardTitle1: 'Creative Recruitment',
                        cardDesc1: 'Discover handpicked, creative graphic designers who excel in bringing visions to life.',
                        cardTitle2: 'Design Excellence',
                        cardDesc2: 'Experience visually stunning designs that perfectly align with your brand strategy and objectives.',
                        cardTitle3: 'Collaborative Workflow',
                        cardDesc3: 'Utilize collaborative tools for seamless communication, ensuring efficient project management across different time zones.',
                        cardTitle4: 'Creative Progress Updates',
                        cardDesc4: 'Stay informed with regular updates on creative milestones achieved, providing clarity and confidence throughout the project.',
                        cardTitle5: 'Tailored Design Teams',
                        cardDesc5: "Get matched with customized design teams, ensuring the perfect blend of skills for your project's success.",
                        cardTitle6: 'Design Collaboration',
                        cardDesc6: 'Foster a culture of collaboration through regular feedback meetings, enhancing creativity and ensuring client satisfaction.'
                    });
                    break;
                case 'ui-ux-design-services':
                    setDevTitleDesc({
                        title: 'UI/UX ',
                        desc: 'Ready to bring your digital vision to life? Our expert UI/UX designers are ready to help you create transformative digital products that convert and engage users.'
                        , cardTitle1: 'Creative Recruitment',
                        cardDesc1: 'Discover handpicked, creative graphic designers who excel in bringing visions to life.',
                        cardTitle2: 'Design Excellence',
                        cardDesc2: 'Experience visually stunning designs that perfectly align with your brand strategy and objectives.',
                        cardTitle3: 'Collaborative Workflow',
                        cardDesc3: 'Utilize collaborative tools for seamless communication, ensuring efficient project management across different time zones.',
                        cardTitle4: 'Creative Progress Updates',
                        cardDesc4: 'Stay informed with regular updates on creative milestones achieved, providing clarity and confidence throughout the project.',
                        cardTitle5: 'Tailored Design Teams',
                        cardDesc5: "Get matched with customized design teams, ensuring the perfect blend of skills for your project's success.",
                        cardTitle6: 'Design Collaboration',
                        cardDesc6: 'Foster a culture of collaboration through regular feedback meetings, enhancing creativity and ensuring client satisfaction.'
                    });
                    break;
                case 'wordpress-development-services':
                    setDevTitleDesc({
                        title: 'WordPress',
                        desc: 'Our WordPress development team is well-versed in the latest technologies and tools, ensuring your website is built using the most advanced and efficient methods.'
                        , cardTitle1: 'Creative Recruitment',
                        cardDesc1: 'Discover handpicked, creative graphic designers who excel in bringing visions to life.',
                        cardTitle2: 'Design Excellence',
                        cardDesc2: 'Experience visually stunning designs that perfectly align with your brand strategy and objectives.',
                        cardTitle3: 'Collaborative Workflow',
                        cardDesc3: 'Utilize collaborative tools for seamless communication, ensuring efficient project management across different time zones.',
                        cardTitle4: 'Creative Progress Updates',
                        cardDesc4: 'Stay informed with regular updates on creative milestones achieved, providing clarity and confidence throughout the project.',
                        cardTitle5: 'Tailored Design Teams',
                        cardDesc5: "Get matched with customized design teams, ensuring the perfect blend of skills for your project's success.",
                        cardTitle6: 'Design Collaboration',
                        cardDesc6: 'Foster a culture of collaboration through regular feedback meetings, enhancing creativity and ensuring client satisfaction.'
                    });
                    break;
                case 'social-media-marketing-services':
                    setDevTitleDesc({
                        title: 'Social Media Marketing',
                        desc: "Interested in recruiting a dedicated Social Media Marketing team? SSTech offers flexible engagement models to expand your team effortlessly:"
                        , cardTitle1: 'Creative Recruitment',
                        cardDesc1: 'Discover handpicked, creative graphic designers who excel in bringing visions to life.',
                        cardTitle2: 'Design Excellence',
                        cardDesc2: 'Experience visually stunning designs that perfectly align with your brand strategy and objectives.',
                        cardTitle3: 'Collaborative Workflow',
                        cardDesc3: 'Utilize collaborative tools for seamless communication, ensuring efficient project management across different time zones.',
                        cardTitle4: 'Creative Progress Updates',
                        cardDesc4: 'Stay informed with regular updates on creative milestones achieved, providing clarity and confidence throughout the project.',
                        cardTitle5: 'Tailored Design Teams',
                        cardDesc5: "Get matched with customized design teams, ensuring the perfect blend of skills for your project's success.",
                        cardTitle6: 'Design Collaboration',
                        cardDesc6: 'Foster a culture of collaboration through regular feedback meetings, enhancing creativity and ensuring client satisfaction.'
                    });
                    break;
                case '3d-animation-services':
                    setDevTitleDesc({
                        title: '3D Animation',
                        desc: 'Exploring options to hire expert 3D animators for your project? SSTech offers a team of seasoned professionals poised to bring your vision to life. Our skilled 3D animators excel in animation development, ensuring your project receives the expertise it deserves.'
                        , cardTitle1: 'Creative Recruitment',
                        cardDesc1: 'Discover handpicked, creative graphic designers who excel in bringing visions to life.',
                        cardTitle2: 'Design Excellence',
                        cardDesc2: 'Experience visually stunning designs that perfectly align with your brand strategy and objectives.',
                        cardTitle3: 'Collaborative Workflow',
                        cardDesc3: 'Utilize collaborative tools for seamless communication, ensuring efficient project management across different time zones.',
                        cardTitle4: 'Creative Progress Updates',
                        cardDesc4: 'Stay informed with regular updates on creative milestones achieved, providing clarity and confidence throughout the project.',
                        cardTitle5: 'Tailored Design Teams',
                        cardDesc5: "Get matched with customized design teams, ensuring the perfect blend of skills for your project's success.",
                        cardTitle6: 'Design Collaboration',
                        cardDesc6: 'Foster a culture of collaboration through regular feedback meetings, enhancing creativity and ensuring client satisfaction.'
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
        { icon: <img src={hiring} height={'35px'} width={'35px'} alt='' />, title: devTitleDesc.cardTitle1, description: devTitleDesc.cardDesc1 },
        { icon: <img src={talent} height={'35px'} width={'35px'} alt='' />, title: devTitleDesc.cardTitle2, description: devTitleDesc.cardDesc2 },
        { icon: <img src={timezone} height={'35px'} width={'35px'} alt='' />, title: devTitleDesc.cardTitle3, description: devTitleDesc.cardDesc3 },
    ];

    const serviceCardList2 = [
        { icon: <img src={progress} height={'35px'} width={'35px'} alt='' />, title: devTitleDesc.cardTitle4, description: devTitleDesc.cardDesc4 },
        { icon: <img src={team} height={'35px'} width={'35px'} alt='' />, title: devTitleDesc.cardTitle5, description: devTitleDesc.cardDesc5 },
        { icon: <img src={meeting} height={'35px'} width={'35px'} alt='' />, title: devTitleDesc.cardTitle6, description: devTitleDesc.cardDesc6 },
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
