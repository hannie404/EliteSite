import React from 'react';
import Header from '../components/Header';
import AboutTitle from '../components/about/AboutTitle';
import AboutWhy from '../components/about/AboutWhy';
import AboutServices from '../components/about/AboutServices';
import AboutProjects from '../components/about/AboutProjects';
import AboutCard from '../components/about/AboutCard';
import AboutTeam from '../components/about/AboutTeam';
import Footer from '../components/Footer'


function About() {
  return (
    <div>
      <Header />
      <AboutTitle />
      <AboutWhy />
      <AboutServices />
      <AboutProjects />
      <AboutCard />
      <AboutTeam />
      <Footer />
    </div>
  )
}

export default About