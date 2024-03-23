import React, { useState } from 'react';
import './OurTechStack.css';
import html5 from '../Assets/icons8-html.svg'
import css3 from '../Assets/icons8-css3.svg'
import js from '../Assets/icons8-js.svg'
import php from '../Assets/icons8-php.svg'
import webflow from '../Assets/icons8-webflow.svg'
import wordpress from '../Assets/icons8-wordpress.svg'
import laravel from '../Assets/icons8-laravel-64.png'
import shopify from '../Assets/shopify-svgrepo-com.svg'
import andriod from '../Assets/icons8-android.svg'
import flutter from '../Assets/icons8-flutter.svg'
import ios from '../Assets/icons8-ios.svg'
import react from '../Assets/icons8-react.svg'
import bitcoin from '../Assets/icons8-bitcoin.svg'
import solana from '../Assets/icons8-solana-64.png'
import etherium from '../Assets/icons8-ethereum-58.png'
import metamask from '../Assets/icons8-metamask-48.png'
import ripple from '../Assets/icons8-ripple-50.png'
import solidity from '../Assets/icons8-solidity-48.png'
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

  const renderContent = () => {
    switch (activeTab) {
      case 'Web':
        return (
          <div className="content">
            <div className='d-flex justify-content-center'>
              <div className='text-center'>
                <img src={html5} className='imageclass' alt='' />
                <p style={{ fontSize: '18px', fontWeight: 400 }}>HTML 5</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '5%' }}>
                <img src={css3} className='imageclass' alt='' />
                <p style={{ fontSize: '18px', fontWeight: 400 }}>CSS 3</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '5%' }}>
                <img src={js} className='imageclass' alt='' />
                <p style={{ fontSize: '18px', fontWeight: 400 }}>JavaScript</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '5%' }}>
                <img src={mern} className='imageclass' alt='' />
                <p style={{ fontSize: '18px', fontWeight: 400 }}>MERN</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '5%' }}>
                <img src={php} className='imageclass' alt='' />
                <p style={{ fontSize: '18px', fontWeight: 400 }}>PHP</p>
              </div>
            </div>
            <div className='mt-5 d-flex justify-content-center pt-4'>
              <div style={{ flexDirection: 'column', textAlign: 'center' }}>
                <img src={webflow} className='imageclass' alt='' />
                <p style={{ fontSize: '18px', fontWeight: 400 }}>Webflow</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '5%' }}>
                <img src={wordpress} className='imageclass' alt='' />
                <p style={{ fontSize: '18px', fontWeight: 400 }}>WordPress</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '5%' }}>
                <img src={laravel} className='imageclass' alt='' />
                <p style={{ fontSize: '18px', fontWeight: 400 }}>Laravel</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '5%' }}>
                <img src={shopify} className='imageclass' alt='' color='#5E8E3E' height={'60px'} width={'55px'} />
                <p style={{ fontSize: '18px', fontWeight: 400 }}>shopify</p>
              </div>
            </div>
          </div>
        );
      case 'Mobile':
        return (
          <div className='content d-flex justify-content-center'>
            <div style={{ flexDirection: 'column', textAlign: 'center' }}>
              <img src={andriod} className='imageclass' alt='' />
              <p style={{ fontSize: '18px', fontWeight: 400 }}>Andriod</p>
            </div>
            <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '5%' }}>
              <img src={flutter} className='imageclass' alt='' />
              <p style={{ fontSize: '18px', fontWeight: 400 }}>Flutter</p>
            </div>
            <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '5%' }}>
              <img src={ios} className='imageclass' alt='' />
              <p style={{ fontSize: '18px', fontWeight: 400 }}>IOS</p>
            </div>
            <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '5%' }}>
              <img src={react} className='imageclass' alt='' />
              <p style={{ fontSize: '18px', fontWeight: 400 }}>React Native</p>
            </div>
          </div>
        );
      case 'Blockchain':
        return (
          <div className="content">
            <div className='d-flex justify-content-center'>
              <div className='text-center'>
                <img src={bitcoin} className='imageclass' alt='' />
                <p style={{ fontSize: '18px', fontWeight: 400 }}>Bitcoin</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '10%' }}>
                <img src={solana} className='imageclass' alt='' />
                <p style={{ fontSize: '18px', fontWeight: 400 }}>Solana</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '10%' }}>
                <img src={etherium} className='imageclass' alt='' />
                <p style={{ fontSize: '18px', fontWeight: 400 }}>Ethereum</p>
              </div>
            </div>
            <div className='mt-5 d-flex justify-content-center pt-4'>
              <div className='text-center'>
                <img src={metamask} className='imageclass' alt='' />
                <p style={{ fontSize: '18px', fontWeight: 400 }}>Metamask</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '10%' }}>
                <img src={ripple} className='imageclass' alt='' />
                <p style={{ fontSize: '18px', fontWeight: 400 }}>Ripple</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '10%' }}>
                <img src={solidity} className='imageclass' alt='' />
                <p style={{ fontSize: '18px', fontWeight: 400 }}>Solidity</p>
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
                <p style={{ fontSize: '18px', fontWeight: 400 }}>Adobe AE</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '10%' }}>
                <img src={adobeil} className='imageclass' alt='' />
                <p style={{ fontSize: '18px', fontWeight: 400 }}>Adobe Illustrator</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '10%' }}>
                <img src={adobeph} className='imageclass' alt='' />
                <p style={{ fontSize: '18px', fontWeight: 400 }}>Adobe Photshop</p>
              </div>
            </div>
            <div className='mt-5 pt-4 d-flex justify-content-center'>
              <div className='text-center'>
                <img src={adobexd} className='imageclass' alt='' />
                <p style={{ fontSize: '18px', fontWeight: 400 }}>Adobe XD</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '10%' }}>
                <img src={adobefi} className='imageclass' alt='' />
                <p style={{ fontSize: '18px', fontWeight: 400 }}>Figma</p>
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
                <p style={{ fontSize: '18px', fontWeight: 400 }}>Redis</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '10%' }}>
                <img src={mongodb} className='imageclass' alt='' />
                <p style={{ fontSize: '18px', fontWeight: 400 }}>MongoDB</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '10%' }}>
                <img src={mysql} className='imageclass' alt='' />
                <p style={{ fontSize: '18px', fontWeight: 400 }}>MySQL</p>
              </div>
            </div>
            <div className='mt-5 pt-4 d-flex justify-content-center '>
              <div className='text-center'>
                <img src={PostgreSQL} className='imageclass' alt='' />
                <p style={{ fontSize: '18px', fontWeight: 400 }}>PostgreSQL</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '10%' }}>
                <img src={SQLite} className='imageclass' alt='' />
                <p style={{ fontSize: '18px', fontWeight: 400 }}>SQLite</p>
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
                <p style={{ fontSize: '18px', fontWeight: 400 }}>Apprium</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '10%' }}>
                <img src={jira} className='imageclass' alt='' />
                <p style={{ fontSize: '18px', fontWeight: 400 }}>Jira</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '10%' }}>
                <img src={jmeter} className='imageclass' alt='' />
                <p style={{ fontSize: '18px', fontWeight: 400 }}>JMeter</p>
              </div>
            </div>
            <div  className='mt-5 d-flex justify-content-center'>
              <div className='text-center'>
                <img src={postman} className='imageclass' alt='' />
                <p style={{ fontSize: '18px', fontWeight: 400 }}>Postman</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '10%' }}>
                <img src={selenium} className='imageclass' alt='' />
                <p style={{ fontSize: '18px', fontWeight: 400 }}>Selenium</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '10%' }}>
                <img src={trello} className='imageclass' alt='' />
                <p style={{ fontSize: '18px', fontWeight: 400 }}>Trello</p>
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
        textAlign: 'center',lineHeight: '1.4em', fontWeight: '700'
      }}>Our <span style={{ color: '#2693fa', marginTop: '10px' }}>Technology</span> Stack</h1>

      <div className="tabs pt-4">
        <span
          className={activeTab === 'Web' ? 'active' : ''}
          onClick={() => handleTabClick('Web')}
        >
          Web
        </span>
        <span
          className={activeTab === 'Mobile' ? 'active' : ''}
          onClick={() => handleTabClick('Mobile')}
        >
          Mobile
        </span>
        <span
          className={activeTab === 'Blockchain' ? 'active' : ''}
          onClick={() => handleTabClick('Blockchain')}
        >
          Blockchain
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

      {renderContent()}
    </div>
  );
};

export default TechnologyStack;
