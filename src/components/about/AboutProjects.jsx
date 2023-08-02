import React from 'react';
import { Stack, Row, Col } from 'react-bootstrap';
import { styled } from 'styled-components';
import {Arrow} from '../../images';


function aboutProjects() {
  return (
    <div className='bg-darkB p-3'>
      <Row className='d-flex' style={{padding:'10% 10% 5% 10%'}}>
        <Col xs={6}>
          <Project className='font text-light'>Projects</Project>
        </Col>
        <Col xs={6} className='d-flex justify-content-end align-items-center'>
          <EliteExplore className='explore-btn'>
            READ MORE PROJECTS &nbsp; <img src={Arrow} className='arrowExplore' alt="" />
          </EliteExplore>
        </Col>
      </Row>

      <Row className='d-flex' style={{
        padding: '0% 10%',
        borderTop: '2px solid #d9d9d94e',
        paddingTop: '5rem',
        paddingBottom: '5rem'
      }}>
        <Col xs={4}>
          <Stack direction='vertical' style={{height:'10rem'}} className='justify-content-between'>
            <BlueCircle className='font fs-2'>
              1
            </BlueCircle>
            <ProjectName className='text-light'>
              Uwang Corp.
            </ProjectName>
          </Stack>
        </Col>
        <Col xs={4}>
          <Stack direction='vertical'>
            <DateYear className='text-light'>
              2022
            </DateYear>
            <ProjectDescription className='text-light'>
            Uwang Corporation, a leading provider of financial services, was struggling to keep up with the demands of its growing business.
            </ProjectDescription>
          </Stack>
        </Col>
        <Col xs={4}>
          <div className='bg-grey'
            style={{
              background: 'white',
              height: '10rem',
              borderRadius: '2rem'
            }}></div>
        </Col>
      </Row>

      <Row className='d-flex' style={{
        padding: '0% 10%',
        borderTop: '2px solid #d9d9d94e',
        paddingTop: '5rem',
        paddingBottom: '5rem'
      }}>
        <Col xs={4}>
          <Stack direction='vertical' style={{height:'10rem'}} className='justify-content-between'>
            <BlueCircle className='font fs-2'>
              2
            </BlueCircle>
            <ProjectName className='text-light'>
              Mika Medika
            </ProjectName>
          </Stack>
        </Col>
        <Col xs={4}>
          <Stack direction='vertical'>
            <DateYear className='text-light'>
              2022
            </DateYear>
            <ProjectDescription className='text-light'>
            Mika Medika Healthcare, a large hospital network, was concerned about the security of their patient data. We help them with their cyber security.
            </ProjectDescription>
          </Stack>
        </Col>
        <Col xs={4}>
          <div className='bg-grey'
            style={{
              background: 'white',
              height: '10rem',
              borderRadius: '2rem'
            }}></div>
        </Col>
      </Row>

      <Row className='d-flex' style={{
        padding: '0% 10%',
        borderTop: '2px solid #d9d9d94e',
        paddingTop: '5rem',
        paddingBottom: '5rem'
      }}>
        <Col xs={4}>
          <Stack direction='vertical' style={{height:'10rem'}} className='justify-content-between'>
            <BlueCircle className='font fs-2'>
              3
            </BlueCircle>
            <ProjectName className='text-light'>
              DEF Manufacture
            </ProjectName>
          </Stack>
        </Col>
        <Col xs={4}>
          <Stack direction='vertical'>
            <DateYear className='text-light'>
              2022
            </DateYear>
            <ProjectDescription className='text-light'>
              DEF Manufacturing needed a custom software solution to improve their production efficiency. We deliver a satisfying software development.            </ProjectDescription>
          </Stack>
        </Col>
        <Col xs={4}>
          <div className='bg-grey'
            style={{
              background: 'white',
              height: '10rem',
              borderRadius: '2rem'
            }}></div>
        </Col>
      </Row>
    </div>
  )
}

export default aboutProjects

const Project = styled.h1`
  font-size: 5rem;
`;
const EliteExplore = styled.button`
  border: 1px solid #D9D9D9;
  border-radius: 10px;
  color: #D9D9D9;
  padding: 1.5rem;
  width: auto;
`;
const BlueCircle = styled.div`
  background: #92DEED;
  color: #11112B;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProjectName = styled.h1`
  font-size: 3rem;
`;
const DateYear = styled.p`

`;
const ProjectDescription = styled.p`
  
`