import React from 'react';
import { styled } from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';



function Error() {
  return (
    <div className='vh-100 error d-flex justify-content-center align-items-center flex-column'>
      <Text className='text-light font'>Error 404</Text>
      <ErrorT className='text-light'>Page Not Found</ErrorT>
      <NavLink to='/'>
        <button type='button' className='btn btn-outline-light p-3 mt-5 ps-5 pe-5' >Back to Home</button>
      </NavLink>
    </div>
  )
}

export default Error

const Text = styled.h1`
  font-size: 15rem;
`;
const ErrorT = styled.h1`
  font-size: 2rem;
`;