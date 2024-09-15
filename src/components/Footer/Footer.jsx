import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { Link } from 'react-router-dom'; // Uvezi Link iz react-router-dom
import './Footer.scss'; // Uvezi SCSS fajl

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">PARTNERI KLUBA</div>
      <div className="footer-logos">
        <a href="https://dcp-hemigal.rs" target="_blank" rel="noopener noreferrer">
          <img src={require('../../assets/sponsorship/dcp.png')} alt="Dcp" />
        </a>
        <a href="https://dcp-hemigal.rs/en/fitogal" target="_blank" rel="noopener noreferrer">
          <img src={require('../../assets/sponsorship/fgl.png')} alt="Fitogal" />
        </a>
        <img src={require('../../assets/sponsorship/us11.png')} alt="Us11" />
        <img src={require('../../assets/sponsorship/miodev.png')} alt="miodev" />
        <img src={require('../../assets/sponsorship/gentico.png')} alt="Gentico" />
        <a href="https://www.heute.at" target="_blank" rel="noopener noreferrer">
          <img src={require('../../assets/sponsorship/ht.png')} alt="Heute" />
        </a>
        <img src={require('../../assets/sponsorship/miljan.png')} alt="Miljan" />
        <img src={require('../../assets/sponsorship/leskofarm.png')} alt="Leskofarm" />
        <img src={require('../../assets/sponsorship/drveni.png')} alt="Drveni" />
        <img src={require('../../assets/sponsorship/mzds.png')} alt="Donje Sinkovce" />
      </div>

      <div className="footer-logos">
        <a href="https://www.facebook.com/fkgornjesinkovce" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/fkgornjesinkovce" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <AiOutlineTwitter />
        </a>
        <a href="https://www.linkedin.com/company/74559484/admin/dashboard/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
      </div>
      <div className="footer-bottom">
        <p>OFFICIAL PAGE © FK GORNJE SINKOVCE 2024</p>
        <div>
          <a href="/PrivacyPolicy">Privacy Policy</a>
          <a href="/Legal">Legal Notice And Conditions Of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
