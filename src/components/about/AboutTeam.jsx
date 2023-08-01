import React from 'react';
import styled from 'styled-components';
import { Stack, Row, Col } from 'react-bootstrap';
import { instagram, man1, man2, man3, twitter, linkedin } from '../../images';

function AboutTeam(){
  return (
    <Container className=' d-flex justify-content-center align-items-center flex-column Team'>
      <div className="font text-grey">
        <OurTeam  className="font text-grey text-center">
          Our Team
        </OurTeam>
        <p>The passionate people behind our every projects in WaveNet.</p>
      </div>
      <Row className='d-flex flex-wrap mt-5 justify-content-evenly align-items-center w-100'>
        <Col className='ms-2 me-2 mt-5 d-flex justify-content-center'>
          <ProfileWrapper>
            <Profile>
              <ProfileImage>
                <img src={man1} alt="Profile" />
              </ProfileImage>
              <SocialIcons>
                <SocialIconItem>
                  <a href="#instagram" title="Instagram">
                    <SocialImg src={instagram} alt="" />
                  </a>
                </SocialIconItem>
                <SocialIconItem>
                  <a href="#instagram" title="Instagram">
                    <SocialImg src={twitter} alt="" />
                  </a>
                </SocialIconItem>
                <SocialIconItem>
                  <a href="#instagram" title="Instagram">
                    <SocialImg src={linkedin} alt="" />
                  </a>
                </SocialIconItem>
              </SocialIcons>
              <ProfileName>
                <h2>Annie Neshreen</h2>
                <ProfileBio>
                  I'm a JavaScript full-stack engineer, love working with <em>React</em> and <em>Node.js</em>.
                </ProfileBio>
              </ProfileName>
            </Profile>
          </ProfileWrapper>
        </Col>

        <Col className='ms-2 me-2 mt-5 d-flex justify-content-center'>
          <ProfileWrapper>
            <Profile>
              <ProfileImage>
                <img src={man2} alt="Profile" />
              </ProfileImage>
              <SocialIcons>
                <SocialIconItem>
                  <a href="#instagram" title="Instagram">
                    <img src={instagram} alt="" />
                  </a>
                </SocialIconItem>
                <SocialIconItem>
                  <a href="#instagram" title="Instagram">
                    <img src={twitter} alt="" />
                  </a>
                </SocialIconItem>
                <SocialIconItem>
                  <a href="#instagram" title="Instagram">
                    <img src={linkedin} alt="" />
                  </a>
                </SocialIconItem>
              </SocialIcons>
              <ProfileName>
                <h2>Annie Neshreen</h2>
                <ProfileBio>
                  I'm a JavaScript full-stack engineer, love working with <em>React</em> and <em>Node.js</em>.
                </ProfileBio>
              </ProfileName>
            </Profile>
          </ProfileWrapper>
        </Col>

        <Col className='ms-2 me-2 mt-5 d-flex justify-content-center'>
          <ProfileWrapper>
            <Profile>
              <ProfileImage>
                <img src={man3} alt="Profile" />
              </ProfileImage>
              <SocialIcons>
                <SocialIconItem>
                  <a href="#instagram" title="Instagram">
                    <img src={instagram} alt="" />
                  </a>
                </SocialIconItem>
                <SocialIconItem>
                  <a href="#instagram" title="Instagram">
                    <img src={twitter} alt="" />
                  </a>
                </SocialIconItem>
                <SocialIconItem>
                  <a href="#instagram" title="Instagram">
                    <img src={linkedin} alt="" />
                  </a>
                </SocialIconItem>
              </SocialIcons>
              <ProfileName>
                <h2>Annie Neshreen</h2>
                <ProfileBio>
                  I'm a JavaScript full-stack engineer, love working with <em>React</em> and <em>Node.js</em>.
                </ProfileBio>
              </ProfileName>
            </Profile>
          </ProfileWrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutTeam;

const OurTeam = styled.h1`
  font-size: 4rem;
`

const SocialImg = styled.img`
  color: #11112B;
`;

const Container = styled.div`
  /* margin: auto; */
  padding: 5% 10%;
`;

const ProfileWrapper = styled.div`
  width: 350px;
  height: 450px;
  position: relative;
`;

const ProfileImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: linear-gradient(to top, #11112B, #11112B, #ffffff3e);
  transition: 0.5s;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const SocialIcons = styled.ul`
  position: absolute;
  display: flex;
  gap: 12px;
  z-index: 3;
  bottom: 164px;
`;

const SocialIconItem = styled.li`
  list-style: none;

  a {
    position: relative;
    display: block;
    display: grid;
    place-items: center;
    background: #11112b73;
    font-size: 23px;
    font-weight: bold;
    width: 40px;
    height: 40px;
    border: 1px solid #ffffff75;
    border-radius: 4px;
    transition: 0.2s;
    transform: translateY(32px);
    opacity: 0;

    &:hover {
      background:#11112b;
      transition: 0.2s;
    }

    svg {
      color: #11112B;
      transition: 0.2s;
    }

    &:hover svg {
      color: #11112B;
      transition: 0.8s;
      transform: rotateY(360deg);
    }
  }
`;

const ProfileName = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 4;
  background: var(--background);
  width: 100%;
  height: 104px;
  padding: 8px 16px;
  z-index: 1;
  color: #11112B;
  text-align: left;

  h2 {
    margin-bottom: 8px;
  }
`;

const ProfileBio = styled.div`
  opacity: 0;
  transition: 0.5s;
  padding-bottom: 3rem;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 350px;
  height: 450px;
  border-radius: 16px;
  overflow: hidden;
  /* box-shadow: 0 5px 18px rgba(57, 56, 66, 0.6); */
  cursor: pointer;
  transition: 0.5s;

  &:hover img {
    opacity: 0.4;
    transition: 0.5s;
  }

  &:hover ${ProfileImage} {
    transform: translateY(-104px);
    transition: all 0.9s;
    background: linear-gradient(to bottom, #11112B, #ffffff);
  }

  &:hover ${ProfileBio} {
    opacity: 0.9;
  }

  &:hover ${SocialIconItem} a {
    opacity: 1;
  }

  &:hover ${SocialIconItem}:nth-child(1) a {
    transition-delay: 0.1s;
  }

  &:hover ${SocialIconItem}:nth-child(2) a {
    transition-delay: 0.2s;
  }

  &:hover ${SocialIconItem}:nth-child(3) a {
    transition-delay: 0.3s;
  }

  &:hover ${SocialIconItem}:nth-child(4) a {
    transition-delay: 0.4s;
  }

  &:hover ${ProfileName} {
    background-color: #fff;
  }
`;




