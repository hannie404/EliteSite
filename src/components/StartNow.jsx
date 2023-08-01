import React from 'react';
import style, { styled } from 'styled-components';
import { Stack, Row, Col, Container } from 'react-bootstrap';
import Arrow from '../images/svg/arrow-icon.svg'
import {
  samsung,
  windows,
  google,
  amazon,
  sony
} from '../images';


function StartNow() {
  return (
    <div>
      {/* <Row className='justify-content-evenly align-items-center me-0 pt-5 p-5 g-4'>
        <CompanyImg src={samsung} alt="" />
        <CompanyImg src={google} alt="" />
        <CompanyImg src={windows} alt="" />
        <CompanyImg src={amazon} alt="" />
        <CompanyImg src={sony} alt="" />
      </Row> */}
      <EliteMain className='EliteMain vh-100'>
        <Container fluid>
          <EliteTitle className='text-light text-center EliteTitle'>
            Need IT Solutions?<br />
            Let's <i>start now!</i>
          </EliteTitle>
        </Container>
        <EliteExplore className='mt-5 explore-btn'>
          Start now &nbsp; <img className='arrowExplore' src={Arrow} alt="" />
        </EliteExplore>
      </EliteMain>
    </div>
  )
}

export default StartNow

const EliteMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0% 10rem 0%;
`;

const EliteTitle = styled.h2`
  font-family: 'Space Grotesk', sans-serif;
  color: #D9D9D9;
  font-size: 5rem;
  padding: 0% 10%;
`;

const EliteExplore = styled.button`
  border: 1px solid #D9D9D9;
  border-radius: 10px;
  color: #D9D9D9;
  padding: 1.5rem;
  width: 17rem;
`

const CompanyImg = styled.img`
  width: auto;
  min-height: 30px;
  opacity: 0.5;

  @media only screen and (max-width: 750px){
    
  }
`