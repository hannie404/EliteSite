import React from 'react';
import CarouselComment from '../CarouselComment';
import { Stack, Row, Col, Container } from 'react-bootstrap';
import Svg from '../../images/svg/comment1.svg';
import Svg2 from '../../images/svg/comment2.svg';
import { styled } from 'styled-components';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function ServiceComments() {
  return (
    <div className='d-flex flex-column bg-grey'>
      <TextComment className='font text-center mt-4'>Comment</TextComment>
      <Container className='d-flex justify-content-between align-items-center' fluid style={{padding: '5% 10%'}}>
        <CarouselComment />
        <Image src={Svg} alt=''/>
      </Container>

      <Container className='d-flex justify-content-between align-items-center' fluid style={{padding: '5% 10%'}}>
        <Image src={Svg2} alt=''/>
        <FormFaqs className='form-control' required>
          <Text className='font text-light'>
            Leave a comment
          </Text>
          <FloatingLabel
              controlId="floatingInput"
              label="Name"
              className="mb-3"
            >
            <Form.Control as="textarea" placeholder="Leave a comment here" />
          </FloatingLabel>
          
          <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mb-3"
            >
            <Form.Control as="textarea" placeholder="Leave a comment here" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingTextarea2" label="Leave a comment here...">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: '300px' }}
            />
          </FloatingLabel>

          <SendMessageButton type='button' className='btn text-darkB p-3 mt-3'>Send a message</SendMessageButton>
        </FormFaqs>
      </Container>
    </div>
  )
}

export default ServiceComments

const Image = styled.img`
  width: 50rem;
`;
const Text = styled.h1`
  font-size: 3rem;
`;
const TextComment = styled.h1`
  font-size: 4rem;
`;
const FormFaqs = styled.form`
  background: #11112B;
  padding: 2%;
  max-width: 45rem;
  border-radius: 20px;
`;
const SendMessageButton = styled.div`
  background-color: #fff;
  font-size: 1rem;

  &:hover{
    background: #92DEED;
    color: #11112B !important;
  }
`;