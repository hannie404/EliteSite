import React from 'react';
import style, { styled } from 'styled-components';

function aboutTitle() {
  return (
    <div className='lightBody'>
      <HeroContainer className='AboutMain'>
        <Content className='vh-100 d-flex flex-column justify-content-center'>
          <div style={{width:'100%'}}>
            <TransformYour>
              Transform<br />Your<Business> Business</Business>
            </TransformYour>
          </div>
          <Explain className='fs-5 w-75 pt-3'>
            Our team of experts has years of experience in the IT industry and a
            passion for innovative technology solutions. We're dedicated to
            delivering solutions that are tailored to your unique needs and
            budget, and that exceed your expectations.
          </Explain>
        </Content>

        <AboutContainer>
          We believe that <Technology>technology</Technology><br />
          can transform the world.
        </AboutContainer>

        <Explain className='pt-5 fs-5 w-75'>
          That is why we're committed to delivering innovative IT solutions to
          businesses of all sizes. Our team of experienced professionals is
          dedicated to helping you achieve your goals and thrive in a rapidly
          evolving digital landscape. Our goal is to help businesses of all sizes succeed by providing
          customized solutions that meet their unique needs.
        </Explain>
      </HeroContainer>
    </div>
  );
}

export default aboutTitle;

const Explain = styled.p`

  @media (max-width: 950px) {
    font-size: 3rem;
  }

  @media (max-width: 550px) {
    font-size: 2.5rem;
    width: 100% !important;
  }
`;
const AboutContainer = styled.div`
  font-size: 5rem;
  line-height: 6rem;
  font-family: var(--heading-3);

  @media (max-width: 950px) {
    font-size: 3rem;
    line-height: 4rem;
  }

  @media (max-width: 550px) {
    font-size: 2.5rem;
    line-height: 3rem;
  }
`;
const HeroContainer = styled.div`
  padding: 5% 10% 5% 10%;

  @media (max-width: 768px) {
    padding: 10% 5% 5% 5%;
  }
`;
const Business = styled.i`
  font-size: 11.88rem;
  font-weight: 300;

  @media (max-width: 950px) {
    font-size: 5rem;
  }

  @media (max-width: 550px) {
    font-size: 3rem;
  }
`;                                           
const TransformYour = styled.b`
  /* font-size: 12.5rem; */
  font-size: 1000%;
  font-family: 'Space Grotesk';
  color: #11112b;
  line-height: 15rem;

  @media (max-width: 950px) {
    font-size: 6.5rem;
    line-height: 7rem;
  }

  @media (max-width: 550px) {
    font-size: 3.5rem;
    line-height: 3rem;
  }
`;
const Technology = styled.i`
  font-weight: 50;
  color: #11112b;
`;
const Content = styled.div`
  @media only screen and (max-width: 900px){
    height: 70vh !important;
  }
`