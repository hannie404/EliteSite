import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceMain from '../components/service/ServiceMain'
import ServicePrice from '../components/service/ServicePrice'
import ServiceBlog from '../components/service/ServiceBlog'
import ServiceFAQs from '../components/service/ServiceFAQs'
import ServiceComments from '../components/service/ServiceComments';


function Services() {
  return (
    <div>
      <Header />
      <ServiceMain />
      <ServiceBlog />
      <ServicePrice />
      <ServiceFAQs />
      <ServiceComments />
      <Footer />
    </div>
  )
}

export default Services