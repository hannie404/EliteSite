import React from 'react';
import { Stack, Row, Col } from 'react-bootstrap';
import { styled } from 'styled-components';
import {Arrow} from '../../images';


function aboutCard() {
  return (
    <div className='bg-grey d-flex justify-content-center' style={{
      padding: '10%',
    }}>
      <AboutCard className='d-flex flex-column justify-content-between AboutCard'>
        <AboutCardText className='font text-light pb-5'>
          Ready to take your <i>Business' </i> IT to the next level?
        </AboutCardText>
        <div className='d-flex justify-content-end'>
          <EliteExplore className='explore-btn'>
            READ MORE PROJECTS &nbsp; <img src={Arrow} className='arrowExplore' alt="" />
          </EliteExplore>
        </div>
      </AboutCard>
    </div>
  )
}

export default aboutCard

const AboutCard = styled.div`
  width: 80%;
  height: fit-content;
  padding: 5% 10%;
  border-radius: 5rem;
`;
const EliteExplore = styled.button`
  border: 1px solid #D9D9D9;
  border-radius: 10px;
  color: #D9D9D9;
  padding: 1.5rem;
  width: auto;
`;
const AboutCardText =styled.h1`
  font-size: 4rem;
`