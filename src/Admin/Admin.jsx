import React from 'react'
import SideBar from './SideBar';
import Table from '../scenes/table/Table';
import { Stack, Row, Col, Container } from 'react-bootstrap';

function Admin() {
  return (
    <div style={{background: '#11112B'}} className=''>
      <SideBar />
      <Container className='' style={{padding: '6% 2%', color: '#11112B'}}>
        <Table />
      </Container>
    </div>
  )
}

export default Admin