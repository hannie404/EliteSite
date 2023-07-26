import React from 'react';
import Header from './Header';
import CenterLogo from '../images/eliteLogo/elitesiteW.png';
import style, { styled } from 'styled-components';
import { Stack } from 'react-bootstrap';
import Vector from '../images/svg/vector.svg'
import Vector1 from '../images/svg/vector1.svg'
import Vector2 from '../images/svg/vector2.svg'
import Vector3 from '../images/svg/vector3.svg'

const EliteMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0% 10rem 0%;
`;

const VectorImg = styled.img`
  width: auto;
`

const EliteLogo = styled.img`
  width: 70rem;
  padding:5%;
`;

const EliteExplore = styled.button`
  border: 1px solid #D9D9D9;
  border-radius: 10px;
  color: #D9D9D9;
  padding: 1rem;
  width: 15rem;
`

const EliteTitle = styled.h2`
  font-family: 'Space Grotesk', sans-serif;
  color: #D9D9D9;
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
            Explore Now 
          </EliteExplore>
      </EliteMain>
      
      <EliteTitle>
        Why<br/>Choose Us?
      </EliteTitle>
      <EliteReason className='d-flex mt-5 justify-content-between' style={{padding:'0% 10% 5% 10%'}}> 
        <div className='p-3 d-flex flex-column justify-content-between' style={{width:'auto', height:'25rem', border:'2px solid white'}}>
          <VectorImg src={Vector}/>
          <div className='d-flex flex-column'>
            <h5 className='text-light fs-3 mt-4 mb-4 font'>Expertise</h5>
            <p className='text-light'>Our team of experienced experts have the knowledge and expertise to deliver innovative IT solutions that meet your unique needs.</p>
          </div>
        </div>

        <div className='p-3' style={{width:'auto', height:'25rem', border:'2px solid white'}}>
          <VectorImg src={Vector1} />
          <h5 className='text-light fs-3 mt-4 mb-4 font'>Expertise</h5>
          <p className='text-light'>Our team of experienced experts have the knowledge and expertise to deliver innovative IT solutions that meet your unique needs.</p>
        </div>

        <div className='p-3' style={{width:'auto', height:'25rem', border:'2px solid white'}}>
          <VectorImg src={Vector2} />
          <h5 className='text-light fs-3 mt-4 mb-4 font'>Expertise</h5>
          <p className='text-light'>Our team of experienced experts have the knowledge and expertise to deliver innovative IT solutions that meet your unique needs.</p>
        </div>

        <div className='p-3' style={{width:'auto', height:'25rem', border:'2px solid white'}}>
          <VectorImg src={Vector3} />
          <h5 className='text-light fs-3 mt-4 mb-4 font'>Expertise</h5>
          <p className='text-light'>Our team of experienced experts have the knowledge and expertise to deliver innovative IT solutions that meet your unique needs.</p>
        </div>
      </EliteReason>

      <div className='bg-light vh-100'>
        hi
      </div>
    </div>
  )
}

export default HomeContent