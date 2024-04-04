import React from 'react';

import Title from './Title';
import Service from './Service';

import { services } from '../data';

const Services = () => {
  return (
    <section className="section services" id="services">
        <Title title="our" subTitle="services" />
    <div className="section-center services-center">
      {services.map((service)=> <Service key={service.id} name={service.name} icon={service.icon} text={service.text}/>)}
    </div>
  </section>
  );
}

export default Services;
