import React, { useState } from 'react';
import '../css/header.css';
import Logo from '../images/eliteLogo/elitesiteW.png';
import { NavLink, useLocation } from 'react-router-dom';

  const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prevState => !prevState);
  };

  const handleMobileNavClick = () => {
    const mm = document.querySelector(".mobile_menu");
    const mn = document.querySelector(".mobile_nav");
    const menuItems = document.querySelectorAll('.mobile_menu li');

    if (mm.classList.contains('active') && mn.classList.contains('active')) {
      mm.classList.remove('active');
      mm.style.display = "none";
      mn.classList.remove('active');
      menuItems.forEach(item => item.classList.remove('slide'));
    } else {
      mm.classList.add('active');
      mm.style.display = "block";
      mn.classList.add('active');
      menuItems.forEach((item, index) => {
        setTimeout(() => item.classList.add('slide'), (index + 1) * 100);
      });
    }
  };

  return (
    <header>
      <div className="container">
        <div className={`mobile_nav ${isMobileMenuOpen ? 'active' : ''}`} onClick={handleMobileNavClick}>
          <button className={`burger ${isMobileMenuOpen ? 'active' : ''}`} title="Open and close menu">
            <span className="mobile_nav__label">Open and close menu</span>
            <div className="top stripe"></div>
            <div className="middle stripe"></div>
            <div className="bottom stripe"></div>
          </button>
        </div>

        <div className={`mobile_menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/work">Work</NavLink>
              </li>
              <li>
                <NavLink to="/careers">Career</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="logo">
          <img src={Logo} alt="" className='headerLogo' />
        </div>

        <nav className="head_nav">
          <ul>
            <li>
              <NavLink to="/Home" isActive={() => location.pathname === '/Home'}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/About" isActive={() => location.pathname === '/About'}>About Us</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/work">Work</NavLink>
            </li>
            <li>
              <NavLink to="/careers">Career</NavLink>
            </li>
          </ul>
        </nav>
        
        <div className="icons">
          <NavLink to="/Contact">
            <input type='button' value='Contact Us' className='btn btn-outline-light' />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
