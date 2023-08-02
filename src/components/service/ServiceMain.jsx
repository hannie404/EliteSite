import React from 'react';
import { Stack, Row, Col } from 'react-bootstrap';
import { styled } from 'styled-components';
import {
  ArrowBW,
  ArrowB,
  webicon,
  marketing,
  rocket,
  mobile,
  cloud,
  data,
  security,
  coding,
  network
} from '../../images';


function ServiceMain() {
  return (
    <ServiceContainer className='Service'>
      <Text className='font text-light'>Service</Text>
      <Row className='pt-5'>
        <Col xs={4}>
          <ServiceCard className='text-large fs-1 mb-5'>
            <ArrowBA className='d-flex justify-content-between'>
              <ServiceImg src={webicon} alt='' />
              <ServiceImg src={ArrowBW} alt='' />
            </ArrowBA>
            <div className='font text-light'>
              Web Development
              <p className='text-small mt-0'>Create websites that are both visually appealing and functional for users.</p>
            </div>
          </ServiceCard>
        </Col>
        <Col xs={4}>
          <ServiceCard className='text-large fs-1 mb-5'>
            <ArrowBA className='d-flex justify-content-between'>
              <ServiceImg src={marketing} alt='' />
              <ServiceImg src={ArrowBW} alt='' />
            </ArrowBA>
            <div className='font text-light'>
              Mobile&nbsp; Development
              <p className='text-small mt-0'>Create or enhance mobile applications, ensuring optimized user experience.</p>
            </div>
          </ServiceCard>
        </Col>
        <Col xs={4}>
          <ServiceCard className='text-large fs-1 mb-5'>
            <ArrowBA className='d-flex justify-content-between'>
              <ServiceImg src={rocket} alt='' />
              <ServiceImg src={ArrowBW} alt='' />
            </ArrowBA>
            <div className='font text-light'>
              Cyber Security
              <p className='text-small mt-0'>Provides advanced protection for your data and systems against threats.</p>
            </div>
          </ServiceCard>
        </Col>
        
        <Col xs={4}>
          <ServiceCard className='text-large fs-1 mb-5'>
            <ArrowBA className='d-flex justify-content-between'>
              <ServiceImg src={mobile} alt='' />
              <ServiceImg src={ArrowBW} alt='' />
            </ArrowBA>
            <div className='font text-light'>
              Digital Marketing
              <p className='text-small mt-0'>Create solutions to help businesses achieve their digital marketing goals.</p>
            </div>
          </ServiceCard>
        </Col>
        <Col xs={4}>
          <ServiceCard className='text-large fs-1 mb-5'>
            <ArrowBA className='d-flex justify-content-between'>
              <ServiceImg src={cloud} alt='' />
              <ServiceImg src={ArrowBW} alt='' />
            </ArrowBA>
            <div className='font text-light'>
              Cloud Computing
              <p className='text-small mt-0'>Provides access to scalable computing resources to optimize their operations.</p>
            </div>
          </ServiceCard>
        </Col>
        <Col xs={4}>
          <ServiceCard className='text-large fs-1 mb-5'>
            <ArrowBA className='d-flex justify-content-between'>
              <ServiceImg src={data} alt='' />
              <ServiceImg src={ArrowBW} alt='' />
            </ArrowBA>
            <div className='font text-light'>
              Software Development
              <p className='text-small mt-0'>Provides customized solutions to create and maintain software applications.</p>
            </div>
          </ServiceCard>
        </Col>

        <Col xs={4}>
          <ServiceCard className='text-large fs-1 mb-5'>
            <ArrowBA className='d-flex justify-content-between'>
              <ServiceImg src={security} alt='' />
              <ServiceImg src={ArrowBW} alt='' />
            </ArrowBA>
            <div className='font text-light'>
              IT Project Management
              <p className='text-small mt-0'>Provides businesses with expert guidance and support for IT projects.</p>
            </div>
          </ServiceCard>
        </Col>
        <Col xs={4}>
          <ServiceCard className='text-large fs-1 mb-5'>
            <ArrowBA className='d-flex justify-content-between'>
              <ServiceImg src={coding} alt='' />
              <ServiceImg src={ArrowBW} alt='' />
            </ArrowBA>
            <div className='font text-light'>
              Data Analysis
              <p className='text-small mt-0'>Provides businesses with expert guidance and support for IT projects.</p>
            </div>
          </ServiceCard>
        </Col>
        <Col xs={4}>
          <ServiceCard className='text-large fs-1 mb-5'>
            <ArrowBA className='d-flex justify-content-between'>
              <ServiceImg src={network} alt='' />
              <ServiceImg src={ArrowBW} alt='' />
            </ArrowBA>
            <div className='font text-light'>
              Network Management
              <p className='text-small mt-0'>Provide management of network infrastructure design for clients.</p>
            </div>
          </ServiceCard>
        </Col>
      </Row>
    </ServiceContainer>
  )
}

export default ServiceMain

const ServiceContainer = styled.div`
  padding: 10%;
`;
const Text = styled.h1`
  font-size: 4rem;
`;
const ServiceImg = styled.img`
  
`;
const ServiceCard = styled.div`
  background: linear-gradient(to bottom, #ffffff6c, #ffffff24);
  font-family: 'Space Grotesk', sans-serif;
  color: #fff;
  height: 30rem;
  border-radius: 2rem;
  padding: 10%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  &:hover{
    /* background: #92deed; */
    background: linear-gradient(to bottom,#92DEED, #11112B);
    color: #fff;
  }

  &:hover ${ServiceImg}{
    color: #11112B;
  }
`;
const ArrowBA = styled.div`
  opacity: 1;
`;
