import React from 'react';
import './Kontakt.scss';


const Kontakt = () => {
  return (
    <div className="kontakt-container">
      <h1>FK Gornje Sinkovce - Informacije o Klubu</h1>
      <div className="kontakt-info">
      <img className="logo" src={require('../../assets/gslogo.png')} alt='gslogo'/>
        <h2>info</h2>
        <p><strong>Ime:</strong> FUDBALSKI KLUB GORNJE SINKOVCE</p>
        <p><strong>Dres domaćina:</strong> Crno beli</p>
        <p><strong>Dres gosta</strong> Beli</p>
        <p><strong>Godina osnivanja:</strong> 1980</p>
        <p><strong>Adresa:</strong> Hisarski Put, b.b. 16000 LESKOVAC</p>
        <p><strong>Telephone:</strong> 062 832 88 13</p>
        <p><strong>Pib:</strong> 109031843</p>
        <p><strong>Web:</strong> <a href="http://www.fkgornjesinkovce.com" target="_blank" rel="noopener noreferrer">www.gornjesinkovce.com</a></p>
        <p><strong>Email:</strong> <a href="mailto:info@gironafc.cat">fkgornjesinkovce@aol.com</a></p>
      </div>
      <div className="pink-line"></div>
    </div>
  );
};

export default Kontakt;

