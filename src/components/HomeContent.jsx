import React from 'react';
import Header from './Header';
import CenterLogo from '../images/eliteLogo/elitesiteW.png';
import { styled } from 'styled-components';
import { Stack, Row, Col} from 'react-bootstrap';
import StartNow from './StartNow';
import {
  Vector,
  Vector1,
  Vector2,
  Vector3,
  Arrow,
  ArrowBW,
  ArrowB
} from '../images';


function HomeContent() {
  return (
    <div className='darkBody'>
      <Header />
      <EliteMain className='EliteMain vh-100'>
        <LogoContainer className='LogoContainer'>
          <EliteLogo className='centerImg' src={CenterLogo} alt="" />
        </LogoContainer>
        <div className='ps-3 pe-3'>
          <p className='text-light text-center text-medium'>From custom software development to cybersecurity, our team of experts is dedicated<br />to delivering solutions that are tailored to your unique needs.</p>
          </div>
        <EliteExplore className='mt-5 explore-btn'>
          Explore Now &nbsp; <img src={Arrow} className='arrowExplore' alt="" />
        </EliteExplore>
      </EliteMain>

      <EliteTitle className='EliteTitle'>
        Why<br />Choose Us?
      </EliteTitle>
      <EliteReason className='d-flex mt-5 justify-content-between flex-wrap' style={{ padding: '0% 10% 5% 10%' }}>
        <div className='p-3 d-flex flex-column justify-content-between' style={{ width: '20rem', height: '25rem' }}>
          <VectorImg src={Vector} />
          <div className='d-flex flex-column'>
            <h5 className='text-light fs-3 mt-4 mb-4 font'>Expertise</h5>
            <p className='text-light'>Our team of experienced experts have the knowledge and expertise to deliver innovative IT solutions that meet your unique needs.</p>
          </div>
        </div>

        <div className='p-3 d-flex flex-column justify-content-between' style={{width:'20rem', height:'25rem'}}>
          <VectorImg src={Vector1}/>
          <div className='d-flex flex-column'>
            <h5 className='text-light fs-3 mt-4 mb-4 font'>Technology</h5>
            <p className='text-light'>We stay up to date with the latest trends and technologies in the IT industry, so you can get the most advanced solutions available.</p>
          </div>
        </div>

        <div className='p-3 d-flex flex-column justify-content-between' style={{width:'20rem', height:'25rem'}}>
          <VectorImg src={Vector2}/>
          <div className='d-flex flex-column'>
            <h5 className='text-light fs-3 mt-4 mb-4 font'>Solutiuons</h5>
            <p className='text-light'>We take a personalized approach to every project, working closely with you to understand your business and create solutions.</p>
          </div>
        </div>

        <div className='p-3 d-flex flex-column justify-content-between' style={{width:'20rem', height:'25rem'}}>
          <VectorImg src={Vector3}/>
          <div className='d-flex flex-column'>
            <h5 className='text-light fs-3 mt-4 mb-4 font'>Results</h5>
            <p className='text-light'>Our track record speaks for itself – we've helped businesses of all sizes and industries achieve their goals with our IT solutions.</p>
          </div>
        </div>
      </EliteReason>

      <EliteContainerLight className='bg-grey d-flex flex-column justify-content-center'>
        <EliteTitle className='text-dark text-center believe'>
          We believe that <i>technology</i> can <span className=''>change</span> the world.
        </EliteTitle>

        <p className='text-dark text-center text-large pt-5'>
          That's why we're committed to delivering innovative IT solutions to businesses of all sizes. Our team of experienced professionals is dedicated to helping you achieve your goals and thrive in a rapidly evolving digital landscape.</p>

        <Row className='d-flex justify-content-evenly pt-4'>
          <Col className='d-flex align-items-center flex-column'>
            <EliteNum id='nums'>500+</EliteNum>
            <p className='text-dark text-medium text-center'>Successful Projects</p>
          </Col>
          <Col className='d-flex align-items-center flex-column'>
            <EliteNum id='nums'>98%</EliteNum>
            <p className='text-dark text-medium text-center'>Satisfied Clients</p>
          </Col>
          <Col className='d-flex align-items-center flex-column'>
            <EliteNum id='nums'>35+</EliteNum>
            <p className='text-dark text-medium text-center'>Handled</p>
          </Col>
        </Row>
      </EliteContainerLight>

      <EliteContainerDark>
        <Stack direction='horizontal' className='justify-content-between'>
          <EliteTitle className='EliteTitle' style={{paddingLeft:'0'}}>
            Client Stories
          </EliteTitle>
          <ArrowImg className='ArrowBW' src={ArrowBW} alt="" />
        </Stack>

        <Row className='d-flex flex-wrap'>
          <Col xs={6} className='d-flex flex-column pt-3 story' style={{width:'50%', marginBottom:'5%'}}>
            <EliteBlue>Amazing!</EliteBlue>
            <p className='text-light text-medium pt-5 pb-5'>“WaveNet's cybersecurity solution gave us the peace of mind we needed to focus on our business. They took the time to understand our unique needs and created a solution that protected our sensitive data and ensured compliance with industry regulations.”</p>
            <Stack direction='horizontal'>
              <div className="bg-light" style={{borderRadius:'50%', width:'5rem',height:'5rem'}}></div>
              <div className="d-flex flex-column ps-3">
                <h5 className='text-light'>Tom Johnson</h5>
                <p className='text-light'>CIO of Mika Medika Healthcare</p>
              </div>
              
            </Stack>
          </Col>

          <Col xs={6} className='d-flex flex-column pt-3 story' style={{width:'50%', marginBottom:'5%'}}>
            <EliteBlue>Best Service</EliteBlue>
            <p className='text-light text-medium pt-5 pb-5'>“We were struggling to keep up with the demands of our growing business until we partnered with WaveNet. Their custom software development solution has helped us streamline our operations and improve efficiency, saving us time and money.”</p>
            <Stack direction='horizontal'>
              <div className="bg-light" style={{borderRadius:'50%', width:'5rem',height:'5rem'}}></div>
              <div className="d-flex flex-column ps-3">
                <h5 className='text-light'>Tom Johnson</h5>
                <p className='text-light'>CIO of Mika Medika Healthcare</p>
              </div>
            </Stack>
          </Col>
        </Row>
      </EliteContainerDark>

      <EliteContainerLight>
        <EliteServices>Services</EliteServices>
        <Row className='d-flex justify-content-between'>
          <Col xs={6}>
            <Text>Web Development</Text>
          </Col>
          <Col xs={6} className='d-flex justify-content-end'>
            <img src={ArrowB} style={{width:'10rem'}} alt="" id='blueArrow'/>
          </Col>
        </Row>
        <hr />
        <Row className='d-flex justify-content-between'>
          <Col xs={6}>
            <Text>Mobile Development</Text>
          </Col>
          <Col xs={6} className='d-flex justify-content-end'>
            <img src={ArrowB} style={{width:'10rem'}} alt="" id='blueArrow'/>
          </Col>
        </Row>
        <hr />
        <Row className='d-flex justify-content-between'>
          <Col xs={6}>
            <Text>Digital Marketing</Text>
          </Col>
          <Col xs={6} className='d-flex justify-content-end'>
            <img src={ArrowB} style={{width:'10rem'}} alt="" id='blueArrow'/>
          </Col>
        </Row>
        <hr />
        <Row className='d-flex justify-content-between'>
          <Col xs={6}>
            <Text>Cyber Security</Text>
          </Col>
          <Col xs={6} className='d-flex justify-content-end'>
            <img src={ArrowB} style={{width:'10rem'}} alt="" id='blueArrow' />
          </Col>
        </Row>
      </EliteContainerLight>
      <StartNow />
    </div>
  )
}

export default HomeContent

const Line = styled.div`
  content: '';
  background: white;
  height: 40vh;
  width: 1px;
`

const ArrowImg = styled.img`
  width: 5rem;
  margin-right: 1%;
`

const EliteMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0% 10rem 0%;
`;

const VectorImg = styled.img`
  width: 10rem;
  max-height: 140px;
`

const EliteLogo = styled.img`
  width: 100%;
  padding:5%;
`;

const EliteExplore = styled.button`
  border: 1px solid #D9D9D9;
  border-radius: 10px;
  color: #D9D9D9;
  padding: 1.5rem;
  width: 17rem;
`

const Text = styled.p`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 3rem;
  font-style: italic;
  font-weight: lighter;

  @media only screen and (max-width: 750px){
    font-size: 1.5rem;
  }
`

const EliteServices = styled.h2`
  font-family: 'Space Grotesk', sans-serif;
  color: #11112B;
  font-size: 5rem;
  padding: 0% 10%;
  text-align: center;
  padding-bottom: 3rem;

  @media only screen and (max-width: 750px){
    font-size: 2.5rem;
  }
`;

const EliteTitle = styled.h2`
  font-family: 'Space Grotesk', sans-serif;
  color: #D9D9D9;
  font-size: 5rem;
  padding: 0% 10%;
`;

const EliteBlue = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  color: #92DEED;
  font-size: 3rem;

  @media only screen and (max-width: 750px){
    font-size: 2rem !important;
  }
`;

const EliteContainerLight = styled.div`
  padding: 10%;
  background: #D9D9D9;
`

const EliteContainerDark = styled.div`
  padding: 10%;
  background: #11112B;
`

const EliteNum = styled.h2`
  font-family: 'Space Grotesk', sans-serif;
  color: #11112B;
  font-size: 5rem;
  padding: 0% 10%;
`;

const EliteReason = styled.div`
  padding-bottom: 10rem;
`

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0% 15%;
`