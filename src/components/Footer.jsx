import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import  Twitter  from '../images/svg/twitter.svg';
import  Instagram  from '../images/svg/instagram.svg';
import  Youtube  from '../images/svg/youtube.svg';
import  Linkedin  from '../images/svg/linkedin.svg';
import  Logo from '../images/eliteLogo/elitesiteW.png'

const Footer = () => {
  return (
    <footer style={{ background: '#11112B', color: 'white', marginTop: 'auto' }}>
      <Container>
          <Row xs={12} sm={6} md={3}>
            <div style={{ textAlign: 'left' }} className='d-flex flex-row justify-content-between w-100 align-items-center mt-2'>
              <img className="logoFooter" src={Logo} title="Logo" alt="Logo" href='/home' />
              <div className="social-links mt-3">
                <a>
                  <img src={Instagram} title="Instagram" alt="Instagram"  className='me-2'/>
                </a>
                <a>
                  <img src={Youtube} title="Youtube" alt="Youtube"  className='me-2'/>
                </a>
                <a>
                  <img src={Linkedin} title="Linkedin" alt="Linkedin"  className='me-2'/>
                </a>
                <a>
                  <img src={Twitter} title="Twitter" alt="Twitter" className='me-2' />
                </a>
              </div>
            </div>
        </Row>
        <hr />
        <Row className="footer-top-wrapper justify-content-between" style={{ gap: '48px', padding: '16px', minHeight: '160px' }}>
          <Col xs={12} sm={6} md={3}>
            <menu style={{ textAlign: 'left', lineHeight: 2 }}>
              <h2>Atheros Learning</h2>
              <li>
                <a>For Students</a>
              </li>
              <li>
                <a>For Lectors</a>
              </li>
              <li>
                <a>Sign-Up/Log-In</a>
              </li>
            </menu>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <menu style={{ textAlign: 'left', lineHeight: 2  }}>
              <h2>Atheros Cloud</h2>
              <li>
                <a>Private Data Detector</a>
              </li>
              <li>
                <a>Text Classification</a>
              </li>
              <li>
                <a>Duplicates Detector</a>
              </li>
            </menu>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <menu style={{ textAlign: 'left', lineHeight: 2  }}>
              <h2>Company</h2>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </menu>
          </Col>
        </Row>
        <hr />
        <Row className="footer-bottom" style={{
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4px',
          width: '100%',
          marginLeft: '0',
          textAlign: 'center'
        }}>
          <Col className='footerDown'>
          <small>&copy; EliteSite. 2023 All rights reserved</small>
          </Col>

          <Col className='footerDown'>
            <small style={{marginRight: '15px'}}>Terms and Services</small>
            <small>Privacy Policy</small>
          </Col>

        </Row>
      </Container>

    </footer>
  );
};

export default Footer;
