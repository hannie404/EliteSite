import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Careers from '../pages/Careers';
import Services from '../pages/Services';
import Admin from '../Admin/Admin'
import Work from '../pages/Work'
import { Routes, Route } from 'react-router-dom';

function HomeRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Services' element={<Services/>}></Route>
        <Route path='/Careers' element={<Careers/>}></Route>
        <Route path='/Work' element={<Work/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Admin' element={<Admin/>}></Route>
      </Routes>
    </div>
  )
}

export default HomeRoutes