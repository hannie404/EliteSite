import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { styled } from 'styled-components';
import { ArrowBW, webicon, marketing, rocket, mobile, cloud, data, security, coding, network } from '../../images';

const services = [
  {
    icon: webicon,
    title: 'Web Development',
    description: 'Create websites that are both visually appealing and functional for users.',
  },
  {
    icon: marketing,
    title: 'Mobile Development',
    description: 'Create or enhance mobile applications, ensuring optimized user experience.',
  },
  {
    icon: rocket,
    title: 'Cyber Security',
    description: 'Provides advanced protection for your data and systems against threats.',
  },
  {
    icon: mobile,
    title: 'Digital Marketing',
    description: 'Create solutions to help businesses achieve their digital marketing goals.',
  },
  {
    icon: cloud,
    title: 'Cloud Computing',
    description: 'Provides access to scalable computing resources to optimize operations.',
  },
  {
    icon: data,
    title: 'Software Development',
    description: 'Provides customized solutions to create and maintain software applications.',
  },
  {
    icon: security,
    title: 'IT Project Management',
    description: 'Provides businesses with expert guidance and support for IT projects.',
  },
  {
    icon: coding,
    title: 'Data Analysis',
    description: 'Empowers businesses with data-driven insights and analysis.',
  },
  {
    icon: network,
    title: 'Network Management',
    description: 'Provides management of network infrastructure design for clients.',
  },
];

const ServiceContainer = styled.div`
  padding: 10%;
`;

const Text = styled.h1`
  font-size: 4rem;
`;

const ServiceImg = styled.img`
  /* Add any styles you need for the service images */
`;

const ServiceCard = styled.div`
  background: linear-gradient(to bottom, #ffffff6c, #ffffff24);
  font-family: 'Space Grotesk', sans-serif;
  color: #fff;
  min-height: 35rem;
  border-radius: 2rem;
  padding: 10%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  &:hover {
    background: linear-gradient(to bottom, #92DEED, #11112B);
    color: #fff;
  }

  &:hover ${ServiceImg} {
    /* Add styles for the image when hovered */
    /* Example: border: 2px solid #fff; */
  }
`;

const ArrowBA = styled.div`
  opacity: 1;
`;

function ServiceMain() {
  return (
    <ServiceContainer className='Service'>
      <Text className='font text-light'>Service</Text>
      <Row className='pt-5'>
        {services.map((service, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={4}>
            <ServiceCard className='text-large fs-1 mb-5'>
              <ArrowBA className='d-flex justify-content-between'>
                <ServiceImg src={service.icon} alt='' />
                <ServiceImg src={ArrowBW} alt='' />
              </ArrowBA>
              <div className='font text-light'>
                {service.title}
                <p className='text-small mt-0'>{service.description}</p>
              </div>
            </ServiceCard>
          </Col>
        ))}
      </Row>
    </ServiceContainer>
  );
}

export default ServiceMain;
