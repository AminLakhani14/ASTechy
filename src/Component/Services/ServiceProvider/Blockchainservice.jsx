import React, { useEffect, useState } from 'react';
import './ServiceProvider.css';

export const BlockchainPage = ({ route }) => {
  // const renderedTitle = React.isValidElement(title) ? title : <b>{String(title)}</b>;
  useEffect(() => {
    debugger;
    getHeadingDesc();
  }, [route]);
  const [title, setTitle] = useState('');
  const [description, setDesc] = useState('');
  const getHeadingDesc = () => {
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

  return (
    <div className='service_container'>
      <div className='leftSide'>
        <h1 className='mainheading'><b>{title}</b></h1>
        <p className='mainpara'>
          {description}
        </p>
        <button className='startedbutton'>Let's Get Started</button>
      </div>
      <div className='rightSide'>
        <ContactForm />
      </div>
    </div>
  );
};

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input className='submitforminput' placeholder='>Full Name*' type="text" id="fullName" name="fullName" required />

      <input className='submitforminput' placeholder='Work Email*' type="email" id="email" name="email" required />

      <input className='submitforminput' placeholder='Work Phone*' type="tel" id="phone" name="phone" required />

      <input className='submitforminput' placeholder='Company Name*' type="text" id="companyName" name="companyName" required />

      <textarea id="message" name="message" placeholder='Message*' rows="4" required></textarea>

      <button type="submit" className='getintouch'>Get in Touch</button>
    </form>
  );
};

export default BlockchainPage;
