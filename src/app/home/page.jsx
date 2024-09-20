import React from 'react'
import Hero from './Hero/Hero'
import AppartmentType from './AppartmentType/AppartmentType'
import Properties from './Properties/Properties'
import CityProperties from './CityProperties/CityProperties'
import BuildingFeature from './BuildingFeature/BuildingFeature'
import Reviews from './Reviews/Reviews'
import Blog from './Blog/Blog'


const page = () => {
  return (
    <div>
       <div className="overflow-hidden">
      <Hero/>
      <AppartmentType/>
      <Properties/>
      <CityProperties/>
      <BuildingFeature/>
      <Reviews/>
      <Blog/>
    </div>
    </div>
  )
}

export default page
