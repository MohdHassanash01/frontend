import Image from 'next/image'
import React from 'react'

const CityCard = ({city}) => {
  return <div className="relative rounded-xl overflow-hidden m-2">
    <Image
    src={city.image}
    alt="Image"
    width={700}
    height={700}
    className="rounded-xl w-full h-[450px] object-cover"
    />

    <div className="absolute inset-0 bg-black opacity-20"></div>

    <div className="absolute p-4 top-4">
        <h1 className="text-lg font-semibold text-white">
            {city.cityName}
        </h1>

        <p className="text-gray-200">{city.numberOfProperties} Properties</p>
    </div>
      
    </div>
}

export default CityCard
