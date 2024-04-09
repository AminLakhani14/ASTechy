import React, { useEffect, useState } from 'react';
import './OurTechStack.css';
import html5 from '../Assets/icons8-html.svg'
import css3 from '../Assets/icons8-css3.svg'
import js from '../Assets/icons8-js.svg'
import php from '../Assets/icons8-php.svg'
import webflow from '../Assets/icons8-webflow.svg'
import wordpress from '../Assets/icons8-wordpress.svg'
import laravel from '../Assets/icons8-laravel-64.png'
import Snapchat from '../Assets/icons8-snapchat.svg'
import facebook from '../Assets/icons8-facebook.svg'
import Instagram from '../Assets/icons8-instagram.svg'
import adobeae from '../Assets/after-effects.png'
import adobeil from '../Assets/illustrator.png'
import adobefi from '../Assets/icons8-figma-48.png'
import adobeph from '../Assets/icons8-adobe-photoshop-48.png'
import adobexd from '../Assets/icons8-adobe-xd-48.png'
import googleanalytics from '../Assets/icons8-google-analytics.svg'
import abodech from '../Assets/icons8-character-animator-400.png'
import Blender from '../Assets/icons8-blender-480.png'
import yoast from '../Assets/icons8-yoast-is-a-search-optimization-firm-wordpress-plugin-96.png'
import bing from '../Assets/icons8-bing.svg'
import Google from '../Assets/icons8-google-480.png'
import mern from '../Assets/mern.svg'
import linkedin from '../Assets/icons8-linkedin.svg'
import twitter from '../Assets/icons8-twitter-480.svg'

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
            </div>
          </div>
        );
      case 'Digital Marketing':
        return (
          <div className="content">
            <div className='d-flex justify-content-center'>
              <div className='text-center'>
                <img src={facebook} className='imageclass' alt='' />
                <p className='ot_iconpara'>Facebook</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '10%' }}>
                <img src={Snapchat} className='imageclass' alt='' />
                <p className='ot_iconpara'>Snapchat</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '10%' }}>
                <img src={Instagram} className='imageclass' alt='' />
                <p className='ot_iconpara'>Instagram</p>
              </div>
            </div>
            <div className='mt-5 pt-4 d-flex justify-content-center'>
              <div className='text-center'>
                <img src={linkedin} className='imageclass' alt='' />
                <p className='ot_iconpara'>LinkedIn</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '10%' }}>
                <img src={twitter} className='imageclass' alt='' />
                <p className='ot_iconpara'>Twitter</p>
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
      case '3D Animation':
        return (
          <div className="content">
            <div className='d-flex justify-content-center'>
              <div className='text-center'>
                <img src={Blender} className='imageclass' alt='' />
                <p className='ot_iconpara'>Blender</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '10%' }}>
                <img src={adobeil} className='imageclass' alt='' />
                <p className='ot_iconpara'>Adobe Illustrator</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '10%' }}>
                <img src={adobeae} className='imageclass' alt='' />
                <p className='ot_iconpara'>Adobe AE</p>
              </div>
            </div>
            <div className='mt-5 d-flex justify-content-center '>
              <div className='text-center'>
                <img src={abodech} className='imageclass' alt='' />
                <p className='ot_iconpara'>Adobe Character Animator</p>
              </div>
            </div>
          </div>
        );
      case 'SEO':
        return (
          <div className="content">
            <div className='d-flex justify-content-center'>
              <div className='text-center'>
                <img src={Google} className='imageclass' alt='' />
                <p className='ot_iconpara'>Google Console</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '10%' }}>
                <img src={yoast} className='imageclass' alt='' />
                <p className='ot_iconpara'>Yoast</p>
              </div>
              <div style={{ flexDirection: 'column', textAlign: 'center', marginLeft: '10%' }}>
                <img src={bing} className='imageclass' alt='' />
                <p className='ot_iconpara'>
                  Bing Webmaster Tools</p>
              </div>
            </div>
            <div className='mt-5 d-flex justify-content-center'>
              <div className='text-center'>
                <img src={googleanalytics} className='imageclass' alt='' />
                <p className='ot_iconpara'>
                  Google Analytics</p>
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
      <h2 className='ots_mainhead margintop  pb-4'>Our <span style={{ color: '#2693fa', marginTop: '10px' }}>Technology</span> Stack</h2>
      {windowWidth < 472 ?
        <>
          <div className="tabs col-lg-12 pt-4">
            <span
              className={activeTab === 'Web' ? 'active' : ''}
              onClick={() => handleTabClick('Web')}
            >
              Web
            </span>
            <span
              className={activeTab === 'Digital Marketing' ? 'active' : ''}
              onClick={() => handleTabClick('Digital Marketing')}
            >
              Digital Marketing
            </span>
            <span
              className={activeTab === 'UI/UX Design' ? 'active' : ''}
              onClick={() => handleTabClick('UI/UX Design')}
            >
              UI/UX Design
            </span>
          </div>
          <div className="tabs col-lg-12 ">
            <span
              className={activeTab === '3D Animation' ? 'active' : ''}
              onClick={() => handleTabClick('3D Animation')}
            >
              3D Animation
            </span>
            <span
              className={activeTab === 'SEO' ? 'active' : ''}
              onClick={() => handleTabClick('SEO')}
            >
              SEO
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
              className={activeTab === 'Digital Marketing' ? 'active' : ''}
              onClick={() => handleTabClick('Digital Marketing')}
            >
              Digital Marketing
            </span>
            <span
              className={activeTab === 'UI/UX Design' ? 'active' : ''}
              onClick={() => handleTabClick('UI/UX Design')}
            >
              UI/UX Design
            </span>
            <span
              className={activeTab === '3D Animation' ? 'active' : ''}
              onClick={() => handleTabClick('3D Animation')}
            >
              3D Animation
            </span>
            <span
              className={activeTab === 'SEO' ? 'active' : ''}
              onClick={() => handleTabClick('SEO')}
            >
              SEO
            </span>
          </div>
        </>}

      {renderContent()}
    </div>
  );
};

export default TechnologyStack;
