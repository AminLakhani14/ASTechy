import React from 'react'
import { CardList } from './cards';
import ComputerIcon from '@mui/icons-material/Computer';
import wordpress from '../Assets/icons8-wordpress.svg'
import clone from '../Assets/clone-svgrepo-com.svg'
import shopify from '../Assets/shopify-svgrepo-com.svg'
import tablet from '../Assets/screen-tablet-svgrepo-com.svg'
import mvp from '../Assets/tablet-ipad-svgrepo-com.svg'

const Service = () => {
    const cardData = [
        { title: <ComputerIcon fontSize={'large'}/>, description: 'Blockchain Development', index: '01', route: '/blockchain' },
        { title: <ComputerIcon fontSize={'large'} />, description: 'Web Applications', index: '02', route: '/webapplications' },
        { title: <img src={tablet} height={'30px'} width={'30px'} />, description: 'Mobile Applications', index: '03', route: '/mobile' },
        { title: <img src={clone} height={'30px'} width={'30px'} />, description: 'UI/UX Designing', index: '04', route: '/uiux' },
    ];
    const cardData1 = [
        { title: <img src={wordpress} height={'30px'} width={'30px'} />, description: 'WordPress Development', index: '05', route: '/wordpress-development-services/' },
        { title: <img src={shopify} height={'30px'} width={'30px'} />, description: 'Shopify Development', index: '06', route: '/shopify-development-services/' },
        { title: <img src={mvp} height={'30px'} width={'30px'} />, description: 'MVP Development', index: '07', route: '/mvp-development-services/' },
        { title: <div className='mt-5'></div>, description: 'Explore Our Solutions', color: '#fa7226',textColor:'#fff', route: '/services/' }
    ];
    const pageData = [
        { route: '/blockchain-development-services', title: 'Blockchain Development Services', description: 'Detailed description for Blockchain Development Services.' },
        { route: '/mobile', title: 'Mobile Applications Services', description: 'Detailed description for Mobile Applications Services.' },
        { route: '/web-application-development-services', title: 'Web Applications Services', description: 'Detailed description for Web Applications Services.' },
        { route: '/uiux', title: 'UI/UX Designing Services', description: 'Detailed description for UI/UX Designing Services.' },
    ];
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', fontSize: '35px', fontWeight: 500 }}><span style={{
                color: '#000'
                , marginTop: '70px'
            }}>Our</span>
                <span
                    style={{ color: '#2693fa', marginTop: '70px', marginLeft: '10px' }}>Services</span></div>
            <div><p className='d-flex justify-content-center'>Accelerate your business success with our innovative digital solutions.</p></div>
            <div className=''>
                <CardList cardData={cardData} pageData={pageData} />
            </div>
            <div className=''>
                <CardList cardData={cardData1} pageData={pageData} />
            </div>
        </>
    )
}

export default Service