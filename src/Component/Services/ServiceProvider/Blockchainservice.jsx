import React from 'react';
import './ServiceProvider.css';

export const BlockchainPage = ({title, description}) => {
  const renderedTitle = React.isValidElement(title) ? title : <b>{String(title)}</b>;
  return (
    <div className='service_container'>
      <div className='leftSide'>
        <h1 className='mainheading'><b>{renderedTitle}</b></h1>
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
