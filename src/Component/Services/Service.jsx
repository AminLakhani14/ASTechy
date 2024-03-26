import React, { useState, useEffect } from 'react';
import { CardList } from './cards';
import ComputerIcon from '@mui/icons-material/Computer';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import InsightsIcon from '@mui/icons-material/Insights';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import '../../CSS/style.css'
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
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
        { title: <DesignServicesIcon fontSize={'large'} />, description: 'Graphics Designing', index: '01', route: '/graphics-development-services' },
        { title: <AssignmentTurnedInIcon fontSize={'large'} />, description: 'UI/UX Designing', index: '02', route: '/ui-ux-design-services' },
        { title: <InsightsIcon fontSize={'large'} />, description: 'SEO', index: '03', route: '/seo-services' },
        { title: <TabletAndroidIcon fontSize={'large'} />, description: 'Social Media Marketing', index: '04', route: '/social-media-marketing-services' },
    ];

    const cardData1 = [
        { title: <ComputerIcon fontSize={'large'} />, description: 'Web Development', index: '05', route: '/web-application-development-services' },
        { title: <ThreeDRotationIcon fontSize={'large'}  />, description: '3D Animation', index: '06', route: '/3d-animation-services' },
        { title: <DeveloperModeIcon fontSize={'large'} />, description: 'WordPress Development', index: '07', route: '/wordpress-development-services' },
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
            <div><p className='text-center'>Accelerate your business success with our innovative digital solutions.</p></div>
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
