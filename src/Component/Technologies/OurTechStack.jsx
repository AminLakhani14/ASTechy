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
import etherium from '../Assets/icons8-solana-64.png'
import metamask from '../Assets/icons8-metamask-48.png'
import ripple from '../Assets/icons8-ripple-50.png'
import solidity from '../Assets/icons8-solidity-48.png'

const TechnologyStack = () => {
  const [activeTab, setActiveTab] = useState('Web');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Web':
        return (
          <div className="">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={html5} className='imageclass' alt='' />
              <img src={css3} className='imageclass' alt='' />
              <img src={js} className='imageclass' alt='' />
              <img src={php} className='imageclass' alt='' />

            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }} className='mt-5'>
              <img src={webflow} className='imageclass' alt='' />
              <img src={wordpress} className='imageclass' alt='' />
              <img src={laravel} className='imageclass' alt='' />
              <img src={shopify} className='imageclass' alt='' height={'55px'} width={'55px'} />

            </div>
          </div>
        );
      case 'Mobile':
        return (
          <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={andriod} className='imageclass' alt='' />
              <img src={flutter} className='imageclass' alt='' />
              <img src={ios} className='imageclass' alt='' />
              <img src={react} className='imageclass' alt='' />

            </div>
          </div>
        );
      case 'Blockchain':
        return (
          <div className="">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={bitcoin} className='imageclass' alt='' />
              <img src={solana} className='imageclass' alt='' />
              <img src={etherium} className='imageclass' alt='' />

            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }} className='mt-5'>
              <img src={metamask} className='imageclass' alt='' />
              <img src={ripple} className='imageclass' alt='' />
              <img src={solidity} className='imageclass' alt='' />

            </div>
          </div>
        );
      case 'UI/UX Design':
        return (
          <div className="content">
          </div>
        );
      case 'Database':
        return (
          <div className="content">
          </div>
        );
      case 'Testing':
        return (
          <div className="Testing">
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <h2 style={{
        textAlign: 'center', fontSize: '34px',
        lineHeight: '1.4em', fontWeight: '700'
      }}>Our <span style={{ color: '#2693fa', marginTop: '10px' }}>Technology</span> Stack</h2>

      <div className="tabs">
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
