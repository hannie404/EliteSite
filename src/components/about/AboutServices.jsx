import React from 'react';
import { Stack, Row, Col } from 'react-bootstrap';
import { styled } from 'styled-components';
import { ArrowBW, ArrowB } from '../../images';

function aboutServices() {
  return (
    <div className='bg-grey' style={{padding:'10% 10% 0% 10%'}}>
      <Row className='p-3 d-flex align-items-center'>
        <Col md={4}>
          <ServiceCard className='text-large fs-1 mb-5'>
            <ArrowBA>
              <img src={ArrowBW} alt=''/>
            </ArrowBA>
            Web Development
          </ServiceCard>
          <ServiceCard className='text-large fs-1 mb-5'>
            <ArrowBA>
              <img src={ArrowBW} alt=''/>
            </ArrowBA>
            Mobile Development
          </ServiceCard>
          <ServiceCard className='text-large fs-1 mb-5'>
            <ArrowBA>
              <img src={ArrowBW} alt=''/>
            </ArrowBA>
            Cyber Security
          </ServiceCard>
        </Col>
        <Col md={4}>
          <ServiceCard className='text-large fs-1 mb-5'>
            <ArrowBA>
              <img src={ArrowBW} alt=''/>
            </ArrowBA>
            Web Development
          </ServiceCard>
          <ServiceCard className='text-large fs-1 mb-5'>
            <ArrowBA>
              <img src={ArrowBW} alt=''/>
            </ArrowBA>
            Mobile Development
          </ServiceCard>
        </Col>
        <Col md={4} style={{padding:30}}>
          <Services className='font'>Services</Services>
          <p>We provide customized solutions that meet our clients' unique needs and help them succeed in an increasingly digital world.</p>
          <EliteExplore className='mt-5 explore-btn'>
            Learn more &nbsp; <img src={ArrowB} className='arrowExplore' alt="" />
          </EliteExplore>
        </Col>
      </Row>
    </div>
  )
}

export default aboutServices

const ServiceCard = styled.div`
  background: linear-gradient(to bottom, white, #ffffff24);
  font-family: 'Space Grotesk', sans-serif;
  color: #11112B;
  height: 18rem;
  border-radius: 2rem;
  padding: 10%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  &:hover{
    background: #11112B;
    color: #fff;
  }
`;
const ArrowBA = styled.div`
  opacity: 1;
`
const Services = styled.h1`
  font-size: 5rem;
`
const EliteExplore = styled.button`
  border: 1px solid #11112B;
  border-radius: 10px;
  color: #11112B;
  padding: 1.5rem;
  width: 17rem;
`