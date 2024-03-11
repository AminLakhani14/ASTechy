import React, { useState } from 'react';
import './OurTechStack.css';
import html5 from '../Assets/icons8-html.svg'
import css3 from '../Assets/icons8-css3.svg'
import js from '../Assets/icons8-js.svg'
import php from '../Assets/icons8-php.svg'
import webflow from '../Assets/icons8-webflow.svg'
import wordpress from '../Assets/icons8-html.svg'
import laravel from '../Assets/icons8-laravel-64.png'
import shopify from '../Assets/shopify-svgrepo-com.svg'

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
            <html5 fontSize='large' />
            <css3 fontSize='large' />
            <js fontSize='large' />
            <php fontSize='large' />
            <webflow fontSize='large' />
            <wordpress fontSize='large' />
            <laravel fontSize='large' />
            <shopify fontSize='large' />
          </div>
        );
      case 'Mobile':
        return (
          <div className="content">
          </div>
        );
      case 'Blockchain':
        return (
          <div className="content">
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
      case 'Mobile':
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
      }}>Our <span style={{ color: '#2693fa',marginTop: '10px' }}>Technology</span> Stack</h2>

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
