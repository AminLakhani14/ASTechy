import React, { useEffect, useState } from 'react';
import './OurTechStack.css';
import html5 from '../Assets/icons8-html.svg'
import css3 from '../Assets/icons8-css3.svg'
import js from '../Assets/icons8-js.svg'
import php from '../Assets/icons8-php.svg'
import webflow from '../Assets/icons8-webflow.svg'
import wordpress from '../Assets/icons8-wordpress.svg'
import laravel from '../Assets/icons8-laravel-64.png'
import canva from '../Assets/icons8-canva-64.png'
import andriod from '../Assets/icons8-android.svg'
import flutter from '../Assets/icons8-flutter.svg'
import ios from '../Assets/icons8-ios.svg'
import react from '../Assets/icons8-react.svg'
import hubspot from '../Assets/icons8-hubspot-a-developer-and-marketer-of-software-products-24.png'
import solana from '../Assets/icons8-solana-64.png'
import etherium from '../Assets/icons8-ethereum-58.png'
import metamask from '../Assets/icons8-metamask-48.png'
import ripple from '../Assets/icons8-ripple-50.png'
import bitly from '../Assets/icons8-bitly-32.png'
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import adobeae from '../Assets/after-effects.png'
import adobeil from '../Assets/illustrator.png'
import adobefi from '../Assets/icons8-figma-48.png'
import adobeph from '../Assets/icons8-adobe-photoshop-48.png'
import adobexd from '../Assets/icons8-adobe-xd-48.png'
import SQLite from '../Assets/database.png'
import PostgreSQL from '../Assets/icons8-postgresql-100.png'
import redis from '../Assets/icons8-redis-48.png'
import mongodb from '../Assets/icons8-mongodb-a-cross-platform-document-oriented-database-program-24.png'
import mysql from '../Assets/icons8-mysql-48.png'
import trello from '../Assets/icons8-trello-48.png'
import selenium from '../Assets/selenium.png'
import postman from '../Assets/icons8-postgresql-100.png'
import jira from '../Assets/icons8-jira-48.png'
import jmeter from '../Assets/apachejmeter-svgrepo-com.svg'
import apprium from '../Assets/appium.svg'
import mern from '../Assets/mern.svg'

const TechnologyStack = () => {
  const [activeTab, setActiveTab] = useState('Web');
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);
  
  const renderContent = () => {
    switch (activeTab) {
      case 'Web':
        return (
          <div className="content">
            <div className='d-flex justify-content-center'>
              <div className='text-center'>
                <img src={html5} className='imageclass' alt='' />
                <p className='ot_iconpara'>HTML 5</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '5%' }}>
                <img src={css3} className='imageclass' alt='' />
                <p className='ot_iconpara'>CSS 3</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '5%' }}>
                <img src={js} className='imageclass' alt='' />
                <p className='ot_iconpara'>JavaScript</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '5%' }}>
                <img src={mern} className='imageclass' alt='' />
                <p className='ot_iconpara'>MERN</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '5%' }}>
                <img src={php} className='imageclass' alt='' />
                <p className='ot_iconpara'>PHP</p>
              </div>
            </div>
            <div className='mt-5 d-flex justify-content-center ociconpaddingtop'>
              <div style={{ flexDirection: 'column', textAlign: 'center' }}>
                <img src={webflow} className='imageclass' alt='' />
                <p className='ot_iconpara'>Webflow</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '5%' }}>
                <img src={wordpress} className='imageclass' alt='' />
                <p className='ot_iconpara'>WordPress</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '5%' }}>
                <img src={laravel} className='imageclass' alt='' />
                <p className='ot_iconpara'>Laravel</p>
              </div>
              {/* <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '5%' }}>
                <img src={shopify} className='imageclass' alt='' color='#5E8E3E' height={'60px'} width={'55px'} />
                <p className='ot_iconpara'>shopify</p>
              </div> */}
            </div>
          </div>
        );
      // case 'Mobile':
      //   return (
      //     <div className='content d-flex justify-content-center'>
      //       <div style={{ flexDirection: 'column', textAlign: 'center' }}>
      //         <img src={andriod} className='imageclass' alt='' />
      //         <p className='ot_iconpara'>Andriod</p>
      //       </div>
      //       <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '5%' }}>
      //         <img src={flutter} className='imageclass' alt='' />
      //         <p className='ot_iconpara'>Flutter</p>
      //       </div>
      //       <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '5%' }}>
      //         <img src={ios} className='imageclass' alt='' />
      //         <p className='ot_iconpara'>IOS</p>
      //       </div>
      //       <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '5%' }}>
      //         <img src={react} className='imageclass' alt='' />
      //         <p className='ot_iconpara'>React Native</p>
      //       </div>
      //     </div>
      //   );
      case 'Social Media Marketing':
        return (
          <div className="content">
            <div className='d-flex justify-content-center'>
              <div className='text-center'>
                <img src={canva} className='imageclass' alt='' />
                <p className='ot_iconpara'>Canva</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '10%' }}>
                <img src={hubspot} className='imageclass' alt='' />
                <p className='ot_iconpara'>HubSpot</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '10%' }}>
                <img src={bitly} className='imageclass' alt='' />
                <p className='ot_iconpara'>Bitly</p>
              </div>
            </div>
          </div>
        );
      case 'UI/UX Design':
        return (
          <div className="content">
            <div className='d-flex justify-content-center'>
              <div className='text-center'>
                <img src={adobeae} className='imageclass' alt='' />
                <p className='ot_iconpara'>Adobe AE</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '10%' }}>
                <img src={adobeil} className='imageclass' alt='' />
                <p className='ot_iconpara'>Adobe Illustrator</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '10%' }}>
                <img src={adobeph} className='imageclass' alt='' />
                <p className='ot_iconpara'>Adobe Photshop</p>
              </div>
            </div>
            <div className='mt-5 pt-4 d-flex justify-content-center'>
              <div className='text-center'>
                <img src={adobexd} className='imageclass' alt='' />
                <p className='ot_iconpara'>Adobe XD</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '10%' }}>
                <img src={adobefi} className='imageclass' alt='' />
                <p className='ot_iconpara'>Figma</p>
              </div>
            </div>
          </div>
        );
      case 'Database':
        return (
          <div className="content">
            <div className='d-flex justify-content-center'>
              <div className='text-center'>
                <img src={redis} className='imageclass' alt='' />
                <p className='ot_iconpara'>Redis</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '10%' }}>
                <img src={mongodb} className='imageclass' alt='' />
                <p className='ot_iconpara'>MongoDB</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '10%' }}>
                <img src={mysql} className='imageclass' alt='' />
                <p className='ot_iconpara'>MySQL</p>
              </div>
            </div>
            <div className='mt-5 pt-4 d-flex justify-content-center '>
              <div className='text-center'>
                <img src={PostgreSQL} className='imageclass' alt='' />
                <p className='ot_iconpara'>PostgreSQL</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '10%' }}>
                <img src={SQLite} className='imageclass' alt='' />
                <p className='ot_iconpara'>SQLite</p>
              </div>
            </div>
          </div>
        );
      case 'Testing':
        return (
          <div className="content">
            <div className='d-flex justify-content-center'>
              <div className='text-center'>
                <img src={apprium} className='imageclass' alt='' />
                <p className='ot_iconpara'>Apprium</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '10%' }}>
                <img src={jira} className='imageclass' alt='' />
                <p className='ot_iconpara'>Jira</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '10%' }}>
                <img src={jmeter} className='imageclass' alt='' />
                <p className='ot_iconpara'>JMeter</p>
              </div>
            </div>
            <div className='mt-5 d-flex justify-content-center'>
              <div className='text-center'>
                <img src={postman} className='imageclass' alt='' />
                <p className='ot_iconpara'>Postman</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '10%' }}>
                <img src={selenium} className='imageclass' alt='' />
                <p className='ot_iconpara'>Selenium</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '10%' }}>
                <img src={trello} className='imageclass' alt='' />
                <p className='ot_iconpara'>Trello</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className='mb-4 pb-5'>
      <h1 className='font4834 margintop marginbottom pt-5 pb-4' style={{
        textAlign: 'center', lineHeight: '1.4em', fontWeight: '700'
      }}>Our <span style={{ color: '#2693fa', marginTop: '10px' }}>Technology</span> Stack</h1>
      {windowWidth < 472 ?
        <>
          <div className="tabs col-lg-12 pt-4">
            <span
              className={activeTab === 'Web' ? 'active' : ''}
              onClick={() => handleTabClick('Web')}
            >
              Web
            </span>
            {/* <span
          className={activeTab === 'Mobile' ? 'active' : ''}
          onClick={() => handleTabClick('Mobile')}
        >
          Mobile
        </span> */}
            <span
              className={activeTab === 'Social Media Marketing' ? 'active' : ''}
              onClick={() => handleTabClick('Social Media Marketing')}
            >
              Social Media Marketing
            </span>
            <span
              className={activeTab === 'UI/UX Design' ? 'active' : ''}
              onClick={() => handleTabClick('UI/UX Design')}
            >
              UI/UX Design
            </span>
            <span
              className={activeTab === 'Database' ? 'active' : ''}
              onClick={() => handleTabClick('Database')}
            >
              Database
            </span>
          </div>
          <div className="tabs col-lg-12">
            <span
              className={activeTab === 'Testing' ? 'active' : ''}
              onClick={() => handleTabClick('Testing')}
            >
              Testing
            </span>
          </div>
        </>
        :
        <>
          <div className="tabs pt-4">
            <span
              className={activeTab === 'Web' ? 'active' : ''}
              onClick={() => handleTabClick('Web')}
            >
              Web
            </span>
            <span
              className={activeTab === 'Social Media Marketing' ? 'active' : ''}
              onClick={() => handleTabClick('Social Media Marketing')}
            >
              Social Media Marketing
            </span>
            <span
              className={activeTab === 'UI/UX Design' ? 'active' : ''}
              onClick={() => handleTabClick('UI/UX Design')}
            >
              UI/UX Design
            </span>
            <span
              className={activeTab === 'Database' ? 'active' : ''}
              onClick={() => handleTabClick('Database')}
            >
              Database
            </span>
            <span
              className={activeTab === 'Testing' ? 'active' : ''}
              onClick={() => handleTabClick('Testing')}
            >
              Testing
            </span>
          </div>
        </>}

      {renderContent()}
    </div>
  );
};

export default TechnologyStack;
