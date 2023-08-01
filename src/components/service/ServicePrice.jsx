import React from 'react';
import { Stack, Row, Col } from 'react-bootstrap';
import { styled } from 'styled-components';


function ServicePrice() {
  return (
    <ServicePriceContainer className='bg-darkB vh-100'>
      <Price className='font text-light'>Pricing</Price>
      <Description className='text-light text-center' style={{marginBottom:'5%'}}>Get the right services plan for your business.</Description>

      <Row>
        <Col xs={4}>
          <PriceCard>
            <h2 className='text-center'>BASIC</h2>
            <PriceNumber className='font'>$ 499<sub style={{ fontSize: 15 }}>/month</sub></PriceNumber>
            <List className='text-light mt-4'>Web Development</List>
            <hr />
            <List className='text-light'>Mobile Development</List>
            <hr />
            <List className='text-light'>For small-sized business</List>
            <OrderButton type='button' className='btn text-light p-4 mt-4'>Order Now</OrderButton>
          </PriceCard>
        </Col>

        <Col xs={4}>
          <PriceCard>
            <h2 className='text-center'>STANDARD</h2>
            <PriceNumber className='font'>$ 599<sub style={{ fontSize: 15 }}>/month</sub></PriceNumber>
            <List className='text-light mt-4'>Web & Mobile Development</List>
            <hr />
            <List className='text-light'>Cybersecurity Protection</List>
            <hr />
            <List className='text-light'>For medium-sized business</List>
            <OrderButton type='button' className='btn text-light p-4 mt-4'>Order Now</OrderButton>
          </PriceCard>
        </Col>

        <Col xs={4}>
          <PriceCard>
            <h2 className='text-center'>PREMIUM</h2>
            <PriceNumber className='font'>$ 999<sub style={{ fontSize: 15 }}>/month</sub></PriceNumber>
            <List className='text-light mt-4'>Web & Mobile Development</List>
            <hr />
            <List className='text-light'>Cybersecurity & Digital Marketing</List>
            <hr />
            <List className='text-light'>For large-sized business</List>
            <OrderButton type='button' className='btn text-light p-4 mt-4'>Order Now</OrderButton>
          </PriceCard>
        </Col>
      </Row>
    </ServicePriceContainer>
  )
}

export default ServicePrice;

const ServicePriceContainer = styled.div`
  padding: 5% 10%;
`;
const Price = styled.div`
  text-align: center;
  font-size: 4rem;
`;
const Description = styled.h5`
  
`;
const PriceCard = styled.div`
  background: linear-gradient(to bottom, #ffffff86, #ffffff24);
  font-family: 'Space Grotesk', sans-serif;
  color: #fff;
  /* height: 30rem; */
  height: auto;
  border-radius: 2rem;
  padding: 10%;
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;

  &:hover{
    background: linear-gradient(to bottom,#92DEED, #11112B);
    color: #fff;
  }
`;
const PriceNumber = styled.div`
  text-align: center;
  font-size: 4rem;
`;
const List = styled.p`
  text-align: center;
  font-size: 1.2rem;
`;
const OrderButton = styled.div`
  background-color: #11112B;
  font-size: 1.5rem;

  &:hover{
    /* color: #11112B !important; */
    /* background: #ffffff2d; */
    background: linear-gradient(to bottom, #ffffffc5, #ffffff18);
    border: 2px solid #fff;
  }
`;