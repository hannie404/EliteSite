import React from 'react';
import { Stack, Row, Col } from 'react-bootstrap';
import { styled } from 'styled-components';
import { ArrowBW, ArrowB } from '../../images'


function ServiceBlog() {
  return (
    <BlogContainer className='bg-grey'>
      <div className='d-flex justify-content-between mb-5'>
        <Blog className='font text-darkB d-flex justify-content-between'>
          Blog
        </Blog>
        <EliteExplore className='explore-btn'>
          Read more &nbsp; <img src={ArrowB} className='arrowExplore' alt="" />
        </EliteExplore>
      </div>

      <Row>
        <Col xs={4}>
          <BlogCard className='text-large fs-1 mb-5'>
            <ArrowBA className='d-flex justify-content-end'>
              <ServiceImg src={ArrowBW} alt='' />
            </ArrowBA>
            <BlogText className='font text-darkB'>
              TECH
              <p className='text-small fs-5 mt-3'>Why Cloud Computing is Essential for Your Business in Year 2023</p>
            </BlogText>
          </BlogCard>
        </Col>
        <Col xs={4}>
          <BlogCard className='text-large fs-1 mb-5'>
            <ArrowBA className='d-flex justify-content-end'>
              <ServiceImg src={ArrowBW} alt='' />
            </ArrowBA>
            <BlogText className='font text-darkB'>
              TIPS
              <p className='text-small fs-5 mt-3'>How to Protect Your Business from Cybersecurity Threats</p>
            </BlogText>
          </BlogCard>
        </Col>
        <Col xs={4}>
          <BlogCard className='text-large fs-1 mb-5'>
            <ArrowBA className='d-flex justify-content-end'>
              <ServiceImg src={ArrowBW} alt='' />
            </ArrowBA>
            <BlogText className='font text-darkB'>
              TRENDS
              <p className='text-small fs-5 mt-3'>The Future of IT: Trends to
Watch in 2023 and Beyond</p>
            </BlogText>
          </BlogCard>
        </Col>
      </Row>
    </BlogContainer>
  )
}

export default ServiceBlog

const BlogContainer = styled.div`
  padding: 10%;
`;
const Blog = styled.h1`
  font-size: 4rem;
`;
const EliteExplore = styled.button`
  border: 1px solid #11112B;
  border-radius: 10px;
  color: #11112B;
  padding: 1.5rem;
  width: 17rem;
`;
const ServiceImg = styled.img`
  padding: 1rem;
  border-radius: 50%;
`;
const BlogText = styled.h5``;

const BlogCard = styled.div`
  background: linear-gradient(to bottom, #ffffff, #ffffff24);
  font-family: 'Space Grotesk', sans-serif;
  color: #11112B;
  height: 30rem;
  border-radius: 2rem;
  padding: 10%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  &:hover{
    background: #11112B;
    color: #fff;
  }

  &:hover ${ServiceImg}{
    color: #11112B;
  }

  &:hover ${BlogText}{
    color: #fff !important;
  }

  &:hover ${ServiceImg}{
  background-color: #92DEED;
  padding: 1rem;
  border-radius: 50%;
  }
`;
const ArrowBA = styled.div`
  opacity: 1;
`;