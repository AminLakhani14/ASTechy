import React, { useState, useEffect } from 'react';
import { CardList } from './cards';
import ComputerIcon from '@mui/icons-material/Computer';
import wordpress from '../Assets/icons8-wordpress.svg';
import clone from '../Assets/clone-svgrepo-com.svg';
import shopify from '../Assets/shopify-svgrepo-com.svg';
import tablet from '../Assets/screen-tablet-svgrepo-com.svg';
import '../../CSS/style.css'
const Service = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 980);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const cardData = [
        { title: <ComputerIcon fontSize={'large'} />, description: 'Graphics Designing', index: '01', route: '/graphics-development-services' },
        { title: <img src={clone} height={'30px'} width={'30px'} alt='' />, description: 'UI/UX Designing', index: '02', route: '/ui-ux-design-services' },
        { title: <img src={tablet} height={'30px'} width={'30px'} alt='' />, description: 'SEO', index: '03', route: '/seo-services' },
        { title: <img src={tablet} height={'30px'} width={'30px'} alt='' />, description: 'Social Media Marketing', index: '04', route: '/social-media-marketing-services' },
    ];

    const cardData1 = [
        { title: <ComputerIcon fontSize={'large'} />, description: 'Web Development', index: '05', route: '/web-application-development-services' },
        { title: <img src={shopify} height={'30px'} width={'30px'} alt='' />, description: '3D Animation', index: '06', route: '/3d-animation-services' },
        { title: <img src={wordpress} height={'30px'} width={'30px'} alt='' />, description: 'WordPress Development', index: '07', route: '/wordpress-development-services' },
        { title: <div className='mt-5'></div>, description: 'Explore Our Solutions', color: '#fa7226', textColor: '#fff', route: '/services' }
    ];

    const pageData = [
        { route: '/graphics-development-services', title: 'Blockchain Development Services', description: 'Detailed description for Blockchain Development Services.' },
        { route: '/mobile', title: 'Mobile Applications Services', description: 'Detailed description for Mobile Applications Services.' },
        { route: '/web-application-development-services', title: 'Web Applications Services', description: 'Detailed description for Web Applications Services.' },
        { route: '/uiux', title: 'UI/UX Designing Services', description: 'Detailed description for UI/UX Designing Services.' },
    ];

    const splitIntoTwo = (array) => {
        const halfLength = Math.ceil(array.length / 2);
        const firstHalf = array.slice(0, halfLength);
        const secondHalf = array.slice(halfLength);
        return [firstHalf, secondHalf];
    };

    const [cardDataFirstHalf, cardDataSecondHalf] = splitIntoTwo(cardData);
    const [cardData1FirstHalf, cardData1SecondHalf] = splitIntoTwo(cardData1);

    return (
        <>
            <div className='servicesMainHeading'>
                <span style={{ color: '#000' }}>Our </span>
                <span style={{ color: '#2693fa' }} className='mx-2'> Services</span>
            </div>
            <div><p className='text-center' style={{ padding: '0% 15  %' }}>Accelerate your business success with our innovative digital solutions.</p></div>
            <div className=''>
                {isMobile ? (
                    <>
                        <div className=''><CardList cardData={cardDataFirstHalf} pageData={pageData} /></div>
                        <div className=''><CardList cardData={cardDataSecondHalf} pageData={pageData} /></div>
                    </>
                ) : (
                    <div className=''><CardList cardData={cardData} pageData={pageData} /></div>
                )}
            </div>
            <div className=''>
                {isMobile ? (
                    <>
                        <div className=''><CardList cardData={cardData1FirstHalf} pageData={pageData} /></div>
                        <div className=''><CardList cardData={cardData1SecondHalf} pageData={pageData} /></div>
                    </>
                ) : (
                    <div className=''><CardList cardData={cardData1} pageData={pageData} /></div>
                )}
            </div>
        </>
    );
};

export default Service;
