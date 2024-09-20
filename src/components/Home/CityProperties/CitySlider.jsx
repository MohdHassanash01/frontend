"use client"
import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { cities } from '../../../../data/data';
import CityCard from './CityCard';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


const CitySlider = () => {
  return <Carousel 
  arrows={true}
  autoPlay={true}
  autoPlaySpeed={5000}
  infinite
  responsive={responsive}
  >
{cities.map((city) => {
    return <div key={city.id}>
        <CityCard city={city}/>
    </div>
})}
  </Carousel>
}

export default CitySlider
