import React, { useState, useEffect } from 'react';
import { CardList } from './cards';
import ComputerIcon from '@mui/icons-material/Computer';
import wordpress from '../Assets/icons8-wordpress.svg';
import clone from '../Assets/clone-svgrepo-com.svg';
import shopify from '../Assets/shopify-svgrepo-com.svg';
import tablet from '../Assets/screen-tablet-svgrepo-com.svg';
import mvp from '../Assets/tablet-ipad-svgrepo-com.svg';

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
        { title: <ComputerIcon fontSize={'large'} />, description: 'Blockchain Development', index: '01', route: '/blockchain-development-services' },
        { title: <ComputerIcon fontSize={'large'} />, description: 'Web Applications', index: '02', route: '/web-application-development-services' },
        { title: <img src={tablet} height={'30px'} width={'30px'} />, description: 'Mobile Applications', index: '03', route: '/mobile-app-development-services' },
        { title: <img src={clone} height={'30px'} width={'30px'} />, description: 'UI/UX Designing', index: '04', route: '/ui-ux-design-services' },
    ];

    const cardData1 = [
        { title: <img src={wordpress} height={'30px'} width={'30px'} />, description: 'WordPress Development', index: '05', route: '/wordpress-development-services/' },
        { title: <img src={shopify} height={'30px'} width={'30px'} />, description: 'Shopify Development', index: '06', route: '/shopify-development-services/' },
        { title: <img src={mvp} height={'30px'} width={'30px'} />, description: 'MVP Development', index: '07', route: '/mvp-development-services/' },
        { title: <div className='mt-5'></div>, description: 'Explore Our Solutions', color: '#fa7226', textColor: '#fff', route: '/services/' }
    ];

    const pageData = [
        { route: '/blockchain-development-services', title: 'Blockchain Development Services', description: 'Detailed description for Blockchain Development Services.' },
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
            <div style={{ display: 'flex', justifyContent: 'center', fontSize: '35px', fontWeight: 500 }}>
                <span style={{ color: '#000', marginTop: '70px' }}>Our</span>
                <span style={{ color: '#2693fa', marginTop: '70px', marginLeft: '10px' }}>Services</span>
            </div>
            <div><p className='text-center' style={{ padding: '0% 1%' }}>Accelerate your business success with our innovative digital solutions.</p></div>
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
