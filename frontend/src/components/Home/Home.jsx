"use client"
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import AppartmentType from './AppartmentType/AppartmentType'
import Properties from './Properties/Properties'
import CityProperties from './CityProperties/CityProperties'
import BuildingFeature from './BuildingFeature/BuildingFeature'
import Reviews from './Reviews/Reviews'
import Blog from './Blog/Blog'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home = () => {

  useEffect(() => {
    const initAos = async () => {
      await import("aos")
      AOS.init({
        duration:500,
        easing:"ease",
        once:true,
        anchorPlacement:"top-bottom"
      })
    };
    initAos()

  },[])

  return (
    <div className="overflow-hidden">
      <Hero/>
      <AppartmentType/>
      <Properties/>
      <CityProperties/>
      <BuildingFeature/>
      <Reviews/>
      <Blog/>
    </div>
  )
}

export default Home
