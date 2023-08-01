import React from 'react';
import { Stack, Row, Col } from 'react-bootstrap';
import { styled } from 'styled-components';


function Number() {
  return (
    <div style={{
      width: '80%',
      backgroundColor: 'white',
      borderRadius: '1em',
      position: 'relative',
      top: 120
    }}>
      <Row className='d-flex justify-content-evenly p-5'>
          <Col className='d-flex align-items-center flex-column'>
            <EliteNum id='nums2'>500+</EliteNum>
            <p className='text-dark text-medium text-center'>Successful Projects</p>
          </Col>
          <Col className='d-flex align-items-center flex-column'>
            <EliteNum id='nums2'>98%</EliteNum>
            <p className='text-dark text-medium text-center'>Satisfied Clients</p>
          </Col>
          <Col className='d-flex align-items-center flex-column'>
            <EliteNum id='nums2'>35+</EliteNum>
            <p className='text-dark text-medium text-center'>Handled</p>
          </Col>
        </Row>
    </div>
  )
}

export default Number

const EliteNum = styled.h2`
  font-family: 'Space Grotesk', sans-serif;
  color: #11112B;
  font-size: 5rem;
  padding: 0% 10%;
`;