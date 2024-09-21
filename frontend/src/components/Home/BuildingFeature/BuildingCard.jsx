"use client";

import Image from 'next/image';
import React from 'react'
import Tilt from 'react-parallax-tilt';

const BuildingCard = ({building}) => {
  return (
    <Tilt className="rounded-xl shadow-xl p-4  bg-white 
    hover:shadow-none">
    <div className="w-16 h-16 ml-auto flex items-center justify-center flex-col bg-gray-100 rounded-full ">
        <Image 
        src={building.image} 
        alt={building.title} 
        width={40} 
        height={40}/>
    </div>

    <div className="p-2">
        <p className="mt-6 text-red-600 font-bold text-xl">{building.id}</p>
        <p className="text-lg text-gray-700 font-bold mt-2 mb-2">{building.title}</p>

        <p className="text-sm opacity-70 text-gray-700">{building.description}</p>

    </div>
  </Tilt>
  )
}

export default BuildingCard
