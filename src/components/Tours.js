import React from 'react';

import Title from './Title';
import Tour from './Tour';

import { tours } from '../data';

const Tours = () => {
  return (
    <section className="section" id="tours">
        <Title title="featured" subTitle="tours" />
  

    <div className="section-center featured-center">
      
      { tours.map((tour)=>
      {
        const { id, image, date, title, info, location, duration, price } = tour;
        return (<Tour key={id} image={image} date={date} title={title} info={info} location={location} duration={duration} price={price}/>);
      })
      }
    </div>
  </section>
  );
}

export default Tours;
