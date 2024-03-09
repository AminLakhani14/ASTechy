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
        { title: <ComputerIcon />, description: 'Blockchain Development', index: '01', route: '/' },
        { title: <ComputerIcon />, description: 'Web Applications', index: '02', route: '/' },
        { title: <img src={tablet} height={'20px'} width={'20px'} />, description: 'Mobile Applications', index: '03', route: '/' },
        { title: <img src={clone} height={'20px'} width={'20px'}/>, description: 'UI/UX Designing', index: '04', route: '/' },
    ];
    const cardData1 = [
        { title: <img src={wordpress} height={'20px'} width={'20px'} />, description: 'WordPress Development', index: '05', route: '/' },
        { title: <img src={shopify} height={'20px'} width={'20px'} />, description: 'Shopify Development', index: '06', route: '/' },
        { title: <img src={mvp} height={'20px'} width={'20px'} />, description: 'MVP Development', index: '07', route: '/' },
        { title: <div className='mt-5'></div>, description: 'Explore Our Solutions', color: '#ff0000' }
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
                <CardList cardData={cardData} />
            </div>
            <div className=''>
                <CardList cardData={cardData1} />
            </div>
        </>
    )
}

export default Service