import React from 'react'
import SideBar from './SideBar';
import Table from '../scenes/table/Table';
import { Stack, Row, Col, Container } from 'react-bootstrap';

function Admin() {
  return (
    <div style={{background: '#11112B'}} className='vh-100'>
      <SideBar />
      <Container className='' style={{padding: '10% 2%', color: 'white'}}>
        <Table />
      </Container>
    </div>
  )
}

export default Admin