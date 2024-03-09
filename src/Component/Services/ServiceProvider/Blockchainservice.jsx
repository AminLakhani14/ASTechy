import React from 'react';
import styles from './ServiceProvider.css'; // Import the CSS module

const BlockchainPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h2>Dynamic Left Side Text</h2>
        <p>
          {/* Your dynamic content goes here */}
          Replace this text with your dynamic content for the left side.
        </p>
        <button>Contact Us</button>
      </div>
      <div className={styles.rightSide}>
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
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name</label>
      <input type="text" id="fullName" name="fullName" required />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="phone">Phone Number</label>
      <input type="tel" id="phone" name="phone" required />

      <label htmlFor="companyName">Company Name</label>
      <input type="text" id="companyName" name="companyName" required />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows="4" required></textarea>

      <button type="submit">Get in Touch</button>
    </form>
  );
};

export default BlockchainPage;
