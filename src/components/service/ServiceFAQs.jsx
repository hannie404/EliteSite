// import React from 'react';
// import { Stack, Row, Col, Container } from 'react-bootstrap';
// import { styled } from 'styled-components';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';
// import Faqs from '../Faqs';


// function ServiceFAQs() {
//   return (
//     <div className='FAQSbg'>
//       <Container fluid style={{padding: '10%'}}>
//         <Stack direction='horizontal' className='justify-content-between'>
//           <FAQs className='text-light font'>
//             FREQUENTLY ASKED QUESTIONS
//             <Faqs />
//           </FAQs>

//           <FormFaqs className='form-control' required>
//             <Text className='font text-light'>
//               Any Questions About Us?
//             </Text>
//             <p className='text-light'>Leave a message.</p>
//             <FloatingLabel
//               controlId="floatingInput"
//               label="Your name"
//               className="mb-3"
//             >
//             <Form.Control as="textarea" placeholder="Leave a comment here" />
//             </FloatingLabel>
//             <FloatingLabel controlId="floatingTextarea2" label="Your message">
//               <Form.Control
//                 as="textarea"
//                 placeholder="Leave a comment here"
//                 style={{ height: '300px' }}
//               />
//             </FloatingLabel>
//             <SendMessageButton type='button' className='btn text-light p-3 mt-3'>Send a message</SendMessageButton>
//           </FormFaqs>
//         </Stack>
//       </Container>
//     </div>
//   )
// }

// export default ServiceFAQs

// const FormFaqs = styled.form`
//   background: linear-gradient(to bottom, #ffffff86, #ffffff24);
//   padding: 1.5%;
//   max-width: 45rem;
// `;
// const FAQs = styled.div`
//   font-size: 4rem;
// `;
// const Text = styled.h1`
//   font-size: 2rem;
// `;
// const SendMessageButton = styled.div`
//   background-color: #11112B;
//   font-size: 1rem;

//   &:hover{
//     background: #92DEED;
//     color: #11112B !important;
//   }
// `;

import React from 'react';
import { Stack, Row, Col, Container } from 'react-bootstrap';
import { styled } from 'styled-components';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Faqs from '../Faqs';

function ServiceFAQs() {
  return (
    <div className='FAQSbg'>
      <Container fluid style={{ padding: '5%', paddingTop: '10%' }}>
        <Stack direction='horizontal' className='justify-content-between'>
          <FAQsContainer className='text-light font'>
            FREQUENTLY ASKED QUESTIONS
            <Faqs />
          </FAQsContainer>

          <FormFaqs className='form-control' required>
            <Text className='font text-light'>
              Any Questions About Us?
            </Text>
            <p className='text-light'>Leave a message.</p>
            <FloatingLabel controlId="floatingInput" label="Your name" className="mb-3">
              <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Your message">
              <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '150px' }} />
            </FloatingLabel>
            <SendMessageButton type='button' className='btn text-light p-3 mt-3'>
              Send a message
            </SendMessageButton>
          </FormFaqs>
        </Stack>
      </Container>
    </div>
  );
}

export default ServiceFAQs;

const FormFaqs = styled.form`
  background: linear-gradient(to bottom, #ffffff86, #ffffff24);
  padding: 2rem;
  width: 45rem;
  max-width: 50rem;
`;

const FAQsContainer = styled.div`
  font-size: 4rem;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Text = styled.h1`
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SendMessageButton = styled.div`
  background-color: #11112B;
  font-size: 1rem;

  &:hover {
    background: #92DEED;
    color: #11112B !important;
  }
`;
