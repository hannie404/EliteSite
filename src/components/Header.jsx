// import React, { useState } from 'react';
// import '../css/header.css';
// import Logo from '../images/eliteLogo/elitesiteW.png'

// const Header = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(prevState => !prevState);
//   };

//   const handleMobileNavClick = () => {
//     const mm = document.querySelector(".mobile_menu");
//     const mn = document.querySelector(".mobile_nav");
//     const menuItems = document.querySelectorAll('.mobile_menu li');

//     if (mm.classList.contains('active') && mn.classList.contains('active')) {
//       mm.classList.remove('active');
//       mm.style.display = "none";
//       mn.classList.remove('active');
//       menuItems.forEach(item => item.classList.remove('slide'));
//     } else {
//       mm.classList.add('active');
//       mm.style.display = "block";
//       mn.classList.add('active');
//       menuItems.forEach((item, index) => {
//         setTimeout(() => item.classList.add('slide'), (index + 1) * 100);
//       });
//     }
//   };

//   return (
//     <header>
//       <div className="container">
//         <div className={`mobile_nav ${isMobileMenuOpen ? 'active' : ''}`} onClick={handleMobileNavClick}>
//           <button className={`burger ${isMobileMenuOpen ? 'active' : ''}`} title="Open and close menu">
//             <span className="mobile_nav__label">Open and close menu</span>
//             <div className="top stripe"></div>
//             <div className="middle stripe"></div>
//             <div className="bottom stripe"></div>
//           </button>
//         </div>

//         <div className={`mobile_menu ${isMobileMenuOpen ? 'active' : ''}`}>
//           <nav>
//             <ul>
//               <li className="visited">
//                 <a href="/home">Home</a>
//               </li>
//               <li>
//                 <a href="/toplist">About Us</a>
//               </li>
//               <li>
//                 <a href="/forum">Services</a>
//               </li>
//               <li>
//                 <a href="/blog">Work</a>
//               </li>
//               <li>
//                 <a href="/contact">Career</a>
//               </li>
//             </ul>
//           </nav>
//         </div>

//         <div className="logo">
//           <img src={Logo} alt="" className='headerLogo' />
//         </div>

//         <nav className="head_nav">
//           <ul>
//             <li className="visited">
//               <a href="/home">Home</a>
//             </li>
//             <li>
//               <a href="/toplist">About Us</a>
//             </li>
//             <li>
//               <a href="/forum">Services</a>
//             </li>
//             <li>
//               <a href="/blog">Work</a>
//             </li>
//             <li>
//               <a href="/contact">Career</a>
//             </li>
//           </ul>
//         </nav>
        
//         <div className="icons">
//           <input type='button' value='Sign in' className='btn btn-outline-light'/>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from 'react';
import '../css/header.css';
import Logo from '../images/eliteLogo/elitesiteW.png';
// import MyTitle from './MyTitle';

const Header = () => {
  // <MyTitle />
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visitedLink, setVisitedLink] = useState('/home'); // Set the initial visited link to '/home'

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

  const handleLinkClick = (event) => {
    event.preventDefault();
    const clickedLink = event.target.getAttribute('href');
    setVisitedLink(clickedLink);
  };

  const handleLinkClickMobile = (event) => {
    const clickedLink = event.target.getAttribute('href');
    setVisitedLink(clickedLink);
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
              <li className={visitedLink === '/home' ? 'visited' : ''}>
                <a href="/home" onClick={handleLinkClickMobile}>Home</a>
              </li>
              <li className={visitedLink === '/toplist' ? 'visited' : ''}>
                <a href="/toplist" onClick={handleLinkClickMobile}>About Us</a>
              </li>
              <li className={visitedLink === '/forum' ? 'visited' : ''}>
                <a href="/forum" onClick={handleLinkClickMobile}>Services</a>
              </li>
              <li className={visitedLink === '/blog' ? 'visited' : ''}>
                <a href="/blog" onClick={handleLinkClickMobile}>Work</a>
              </li>
              <li className={visitedLink === '/contact' ? 'visited' : ''}>
                <a href="/contact" onClick={handleLinkClickMobile}>Career</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="logo">
          <img src={Logo} alt="" className='headerLogo' />
        </div>

        <nav className="head_nav">
          <ul>
            <li className={visitedLink === '/home' ? 'visited' : ''}>
              <a href="/home" onClick={handleLinkClick}>Home</a>
            </li>
            <li className={visitedLink === '/toplist' ? 'visited' : ''}>
              <a href="/toplist" onClick={handleLinkClick}>About Us</a>
            </li>
            <li className={visitedLink === '/forum' ? 'visited' : ''}>
              <a href="/forum" onClick={handleLinkClick}>Services</a>
            </li>
            <li className={visitedLink === '/blog' ? 'visited' : ''}>
              <a href="/blog" onClick={handleLinkClick}>Work</a>
            </li>
            <li className={visitedLink === '/contact' ? 'visited' : ''}>
              <a href="/contact" onClick={handleLinkClick}>Career</a>
            </li>
          </ul>
        </nav>
        
        <div className="icons">
          <input type='button' value='Contact Us' className='btn btn-outline-light'/>
        </div>
      </div>
    </header>
  );
};

export default Header;
