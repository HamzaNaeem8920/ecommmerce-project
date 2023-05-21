import React from 'react';
import styles from './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__column">
        
       <img src="logo.png" alt="" />
      </div>
      <div className="footer__column">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </div>
      <div className="footer__column">
         <h3>Follow us </h3>
       
      </div>
    </footer>
  );
};

export default Footer;
