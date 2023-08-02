import React from 'react';
import style, { styled } from 'styled-components';
import Number from './Number';
import {
  Vector,
  Vector1,
  Vector2,
  Vector3
} from '../images';

const EliteReason = styled.div`
  padding-bottom: 10rem;
`

const VectorImg = styled.img`
  width: 10rem;
  max-height: 140px;
`

function Reasons() {
  return (
    <div className='darkBody'>
      <EliteReason className='d-flex pt-5 justify-content-between flex-wrap' style={{ padding: '0% 10% 5% 10%' }}>
        <div className='p-3 d-flex flex-column justify-content-between' style={{ width: '20rem', height: '25rem' }}>
          <VectorImg src={Vector} />
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
      <div className='d-flex justify-content-center w-100'>
          <Number />
        </div>
    </div>
  )
}

export default Reasons