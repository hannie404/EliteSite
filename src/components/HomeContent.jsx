import React from 'react';
import Header from './Header';
import CenterLogo from '../images/eliteLogo/elitesiteW.png';
import style, { styled } from 'styled-components';
import { Stack } from 'react-bootstrap';
import Vector from '../images/svg/vector.svg'
import Vector1 from '../images/svg/vector1.svg'
import Vector2 from '../images/svg/vector2.svg'
import Vector3 from '../images/svg/vector3.svg'
import Arrow from '../images/svg/arrow-icon.svg'

const EliteMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0% 10rem 0%;
`;

const VectorImg = styled.img`
  width: 10rem;
  max-height: 140px;
`

const EliteLogo = styled.img`
  width: 70rem;
  padding:5%;
`;

const EliteExplore = styled.button`
  border: 1px solid #D9D9D9;
  border-radius: 10px;
  color: #D9D9D9;
  padding: 1.5rem;
  width: 17rem;
`

const EliteTitle = styled.h2`
  font-family: 'Space Grotesk', sans-serif;
  color: #D9D9D9;
  font-size: 5rem;
  padding: 0% 10%;
`;

const EliteContainerLight = styled.div`
  padding: 10%;
  background: #D9D9D9;
`

const EliteContainerDark = styled.div`
  padding: 10%;
  background: #11112B;
`

const EliteNum = styled.h2`
  font-family: 'Space Grotesk', sans-serif;
  color: #11112B;
  font-size: 5rem;
  padding: 0% 10%;
`;

const EliteReason = styled.div`
  padding-bottom: 10rem;
`

function HomeContent() {
  return (
    <div className='homeBody'>
      <Header />
      <EliteMain className='EliteMain'>
          <EliteLogo className='centerImg' src={CenterLogo} alt="" />
          <p className='text-light text-center fs-4'>From custom software development to cybersecurity, our team of experts is dedicated<br/>to delivering solutions that are tailored to your unique needs.</p>
          <EliteExplore className='mt-5'>
            Explore Now &nbsp; <img src={Arrow} alt="" />
          </EliteExplore>
      </EliteMain>
      
      <EliteTitle>
        Why<br/>Choose Us?
      </EliteTitle>
      <EliteReason className='d-flex mt-5 justify-content-between flex-wrap' style={{padding:'0% 10% 5% 10%'}}> 
        <div className='p-3 d-flex flex-column justify-content-between' style={{width:'20rem', height:'25rem'}}>
          <VectorImg src={Vector}/>
          <div className='d-flex flex-column'>
            <h5 className='text-light fs-3 mt-4 mb-4 font'>Expertise</h5>
            <p className='text-light'>Our team of experienced experts have the knowledge and expertise to deliver innovative IT solutions that meet your unique needs.</p>
          </div>
        </div>

        <div className='p-3 d-flex flex-column justify-content-between' style={{width:'20rem', height:'25rem'}}>
          <VectorImg src={Vector1}/>
          <div className='d-flex flex-column'>
            <h5 className='text-light fs-3 mt-4 mb-4 font'>Technology</h5>
            <p className='text-light'>We stay up to date with the latest trends and technologies in the IT industry, so you can get the most advanced solutions available.</p>
          </div>
        </div>

        <div className='p-3 d-flex flex-column justify-content-between' style={{width:'20rem', height:'25rem'}}>
          <VectorImg src={Vector2}/>
          <div className='d-flex flex-column'>
            <h5 className='text-light fs-3 mt-4 mb-4 font'>Solutiuons</h5>
            <p className='text-light'>We take a personalized approach to every project, working closely with you to understand your business and create solutions.</p>
          </div>
        </div>

        <div className='p-3 d-flex flex-column justify-content-between' style={{width:'20rem', height:'25rem'}}>
          <VectorImg src={Vector3}/>
          <div className='d-flex flex-column'>
            <h5 className='text-light fs-3 mt-4 mb-4 font'>Results</h5>
            <p className='text-light'>Our track record speaks for itself – we've helped businesses of all sizes and industries achieve their goals with our IT solutions.</p>
          </div>
        </div>
      </EliteReason>

      <EliteContainerLight className='bg-grey d-flex flex-column justify-content-center'>
        <EliteTitle className='text-dark text-center'>
          We believe that <i>technology</i> can <span className=''>change</span> the world.
        </EliteTitle>

        <p className='text-dark text-center fs-3 pt-5'>
          That's why we're committed to delivering innovative IT solutions to businesses of all sizes. Our team of experienced professionals is dedicated to helping you achieve your goals and thrive in a rapidly evolving digital landscape.</p>

        <div className='d-flex justify-content-evenly pt-4'>
          <div className='d-flex align-items-center flex-column'>
            <EliteNum>500+</EliteNum>
            <p className='text-dark fs-5'>Successful Projects</p>
          </div>
          <div className='divider'></div>
          <div className='d-flex align-items-center flex-column'>
            <EliteNum>98%</EliteNum>
            <p className='text-dark fs-5'>Satisfied Clients</p>
          </div>
          <div className='divider'></div>
          <div className='d-flex align-items-center flex-column'>
            <EliteNum>35+</EliteNum>
            <p className='text-dark fs-5'>Handled</p>
          </div>
        </div>
      </EliteContainerLight>

      <EliteContainerDark className="vh-100">
        
      </EliteContainerDark>
    </div>
  )
}

export default HomeContent