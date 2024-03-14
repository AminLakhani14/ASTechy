import React, { useEffect, useState } from 'react';
import './ServiceProvider.css';
import { ServiceCardList } from '../ServiceChildCards/ServiceChildCards';
import TechnologyStack from '../../Technologies/OurTechStack';
import Heading from '../../../Global/Heading';

export const BlockchainPage = ({ route }) => {
  const [servicesCardsDesc, setServicesCardsDesc] = useState({ title: '', desc: '' });
  // const [servicesCardsDesc]

  useEffect(() => {
    debugger;
    getHeadingDesc();
    getHeadingDescforservice();
  }, [route]);
  const [title, setTitle] = useState('');
  const [description, setDesc] = useState('');
  const getHeadingDesc = () => {
    const route = window.location.pathname.replace(/^\//, '');
    const validRoutes = ['blockchain-development-services',
      'web-application-development-services', 'mobile-app-development-services',
      'ui-ux-design-services', 'wordpress-development-services',
      'shopify-development-services', 'mvp-development-services', 'services'];
    if (validRoutes.includes(route)) {
      switch (route) {
        case 'blockchain-development-services':
          setTitle('Blockchain Development Services');
          setDesc('Ropstam offers future-proof custom blockchain development services including private, public, and hybrid blockchain solutions, cryptocurrencies, smart contracts, dApps, tokenization, and more. Our blockchain experts design and build decentralized networks and applications on Ethereum, Hyperledger, Corda, and other platforms.')
          break;
        case 'web-application-development-services':
          setTitle('Web App Development Services');
          setDesc('At Ropstam, we are a leading custom web application development company dedicated to creating innovative web apps that solve real business problems. With years of experience designing, building and launching complex web applications, we have the proven expertise to handle any web app project.');
          break;
        case 'mobile-app-development-services':
          setTitle('Mobile App Development Services');
          setDesc('At Ropstam, we offer full-cycle mobile app development services to help businesses digitally transform and meet their goals through custom mobile apps. With over 10 years of experience building successful apps for startups, enterprises and leaders across industries, we are your trusted mobile app development partner.');
          break;
        case 'ui-ux-design-services':
          setTitle('UI/UX Development Services');
          setDesc('Unlock the potential of exceptional UI/UX design services at Ropstam. Elevate your digital presence with our holistic approach, latest technology stack, and industry-specific solutions. Discover why we’re the best UI/UX design company for your brand’s success.');
          break;
        case 'wordpress-development-services':
          setTitle('WordPress Development Services');
          setDesc('Our custom WordPress development services can be the one-stop solution for all your design and development needs. At Ropstam, we’re not just WordPress experts; we’re your trusted partners in crafting exceptional online experiences. Explore our comprehensive range of services for your business.');
          break;
        case 'shopify-development-services':
          setTitle('Shopify Development Services');
          setDesc('Unlock your e-commerce potential with Ropstam’s custom Shopify development services. Elevate your online business with expert Shopify web design and development. Partner with us to create a stunning, professional, and high-performing Shopify store.');
          break;
        case 'mvp-development-services':
          setTitle('MVP Development Services');
          setDesc('Ropstam is a leading MVP software development company providing end-to-end mvp development services to build your minimum viable product (MVP). With years of experience delivering successful MVP software for startups and enterprises, we are your ideal technology partner for MVP development.');
          break;
        case 'services':
          setTitle('Our Services');
          setDesc('Boosting Your Success through Advanced Technology and Client-Centric Solutions <br /> At Ropstam, we combine innovative service-driven architecture and state-of-the-art technology to create unparalleled digital products tailored to our clients’ requirements. Our unwavering commitment to customer satisfaction sets us apart in the industry.');
          break;
        default:
          setTitle('');
          setDesc('')
          break;
      }
    } else {
      setTitle('');
      setDesc('');
    }
  };
  const getHeadingDescforservice = () => {
    const route = window.location.pathname.replace(/^\//, '');
    const validRoutes = ['blockchain-development-services',
      'web-application-development-services', 'mobile-app-development-services',
      'ui-ux-design-services', 'wordpress-development-services',
      'shopify-development-services', 'mvp-development-services', 'services'];
    if (validRoutes.includes(route)) {
      switch (route) {
        case 'blockchain-development-services':
          setServicesCardsDesc({
            title: 'Our Custom Blockchain Development Services'
            , desc: 'Ropstam’s expertise spans from creating blockchain networks and nodes to developing custom blockchain solutions and providing blockchain consulting services. Explore our blockchain development services for your business.'
          })
          break;
        case 'web-application-development-services':
          setServicesCardsDesc({
            title: 'Our Custom Web App Development Services',
            desc: 'We offer full-cycle custom web application development services, from conceptualization and UX design to front- end development, back - end programming, testing and launch.Our key web app development services include:'
          });
          break;
        case 'mobile-app-development-services':
          setServicesCardsDesc({
            title: 'Our Custom Mobile App Development Services',
            desc: 'We offer end-to-end mobile app development services, from conceptualization and user experience design to development, testing and launch. Our core services include:'
          });
          break;
        case 'ui-ux-design-services':
          setServicesCardsDesc({
            title: 'Our Custom Mobile App Development Services',
            desc: 'We offer end-to-end mobile app development services, from conceptualization and user experience design to development, testing and launch. Our core services include:'
          });
          break;
        case 'wordpress-development-services':
          setServicesCardsDesc({
            title: 'Our Custom WordPress Development Services',
            desc: 'From WordPress theme customization and plugin development to complex WordPress integrations, Ropstam provides end-to-end WordPress website design and development, speed optimization, content implementation, security and maintenance, allowing you to focus on your business.'
          });
          break;
        case 'shopify-development-services':
          setServicesCardsDesc({
            title: 'Our Custom Shopify Development Services',
            desc: 'Trust Ropstam for custom Shopify development services to create high-converting online stores. With years of experience building ecommerce solutions on the Shopify platform, our team of experts specialize in the following services:'
          });
          break;
        case 'mvp-development-services':
          setServicesCardsDesc({
            title: 'Our Custom MVP Development Services',
            desc: 'At Ropstam, we offer a comprehensive suite of MVP development services to bring your innovative ideas to life. Our team of skilled developers specializes in MVP app development, MVP software development, and MVP project management.'
          });
          break;
        // case 'services':
        // setServicesCardsDesc({
        //   title: 'Our Custom Mobile App Development Services',
        //   desc: 'We offer end-to-end mobile app development services, from conceptualization and user experience design to development, testing and launch. Our core services include:'
        // });
        // break;
        default:
          setServicesCardsDesc({ title: '', desc: '' })
          break;
      }
    } else {
      setServicesCardsDesc({ title: '', desc: '' })
    }
  };

  const serviceCardList = [
    { icon: { undefined }, title: 'Smart Contract Development', description: 'Developing optimized smart contracts to automate processes and power blockchain solutions.' },
    { icon: { undefined }, title: 'Metaverse Development', description: 'Building immersive metaverse, virtual worlds and blockchain-based digital experiences.' },
  ];
  const serviceCardList1 = [
    { icon: { undefined }, title: 'NFT Marketplace Development', description: 'Building feature-rich NFT (Non-Fungible Token) marketplaces for digital collectibles and assets.' },
    { icon: { undefined }, title: 'DeFi Development', description: 'Designing DeFi protocols, ecosystems, and applications including exchanges, lending platforms, and more.' },
    { icon: { undefined }, title: 'Web 3.0 Development', description: 'Integrating blockchain with web technologies for decentralized applications.' },
    { icon: { undefined }, title: 'Blockchain Consultancy', description: 'Providing strategic advisory and identifying appropriate blockchain use cases.' }
  ];
  const serviceCardList2 = [
    { icon: { undefined }, title: 'dApps Development', description: 'Building innovative decentralized applications for engagement, automation and new revenue.' },
    { icon: { undefined }, title: 'IEO & ICO Development', description: 'End-to-end planning, launch and marketing services for IEO and ICO fundraising.' },
    { icon: { undefined }, title: 'Crypto Exchanage Development', description: 'Developing secure, scalable digital currency exchanges with trading tools.' },
    { icon: { undefined }, title: 'Blockchain Security', description: 'Conducting comprehensive audits and testing to ensure blockchain solution security.' }
  ];

  return (
    <>
      <div className=''>
        {/* <div className='leftSide'>
          <h1 className='mainheading'><b>{title}</b></h1>
          <p className='mainpara'>
            {description}
          </p>
          <button className='startedbutton'>Let's Get Started</button>
        </div>
        <div className='rightSide'>
          <ContactForm />
        </div> */}
        <Heading visible={false} text={title} paragraph={description} />
      </div>
      <div style={{ width: '100%', display: 'flex', padding: '0% 5% 0% 10%', alignItems: 'center' }}>
        <div style={{ width: '40%' }}>
          <h2>{servicesCardsDesc.title}</h2>
          <p>{servicesCardsDesc.desc}</p>
        </div>
        <div style={{ width: '60%' }}>
          <ServiceCardList ServiceCardList={serviceCardList} />
        </div>
      </div>
      <div>
        <ServiceCardList ServiceCardList={serviceCardList1} />
      </div>
      <div>
        <ServiceCardList ServiceCardList={serviceCardList2} />
      </div>
      <div>
        <TechnologyStack />
      </div>
    </>
  );
};

// const ContactForm = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <form className='form' onSubmit={handleSubmit}>
//       <input className='submitforminput' placeholder='Full Name*' type="text" id="fullName" name="fullName" required />

//       <input className='submitforminput' placeholder='Work Email*' type="email" id="email" name="email" required />

//       <input className='submitforminput' placeholder='Work Phone*' type="tel" id="phone" name="phone" required />

//       <input className='submitforminput' placeholder='Company Name*' type="text" id="companyName" name="companyName" required />

//       <textarea id="message" name="message" placeholder='Message*' rows="4" required></textarea>

//       <button type="submit" className='getintouch'>Get in Touch</button>
//     </form>
//   );
// };

export default BlockchainPage;
