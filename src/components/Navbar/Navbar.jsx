import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.scss';
import logo from '../../assets/fkgs_logo.png';

const Navbar = () => {
  const [toggleHamburger, setToggleHamburger] = useState(false);

  const handleToggleHamburger = () => {
    setToggleHamburger(!toggleHamburger);
  };

  return (
    <nav className='nav-wrapped'>
      <div className='nav container'>
        <div className="navbar">
          <div className='nav-hamburger' onClick={handleToggleHamburger}>
            {toggleHamburger ? <FaTimes className="menu-icon" /> : <FaBars className="menu-icon" />}
          </div>
          {/* Logo div */}
          <a href='/' className="logo">
            <img src={logo} alt='logo' style={{ maxWidth: '200px', maxHeight: '80px', cursor: 'pointer' }} />
          </a>

          {/* Links div */}
          <div className="links">
            <ul>
              <li><a href="/novosti">VESTI</a></li>
              <li><a href="/klub">KLUB</a></li>
              <li><a href="/prvitim">PRVI TIM</a></li>
              <li><a href="/kontakt">KONTAKT</a></li>
            </ul>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu ${toggleHamburger ? 'active' : ''}`}>
          <div className="mobile-menu-header">
            <FaTimes className="close-icon" onClick={handleToggleHamburger} />
          </div>
          <ul>
            <li><a href="/" onClick={handleToggleHamburger}>HOME</a></li>
            <li><a href="/novosti" onClick={handleToggleHamburger}>VESTI</a></li>
            <li><a href="/klub" onClick={handleToggleHamburger}>KLUB</a></li>
            <li><a href="/prvitim" onClick={handleToggleHamburger}>PRVI TIM</a></li>
            <li><a href="/kontakt" onClick={handleToggleHamburger}>KONTAKT</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;



