import Image from 'next/image'
import React from 'react'
import { FaBath, FaBed, FaBolt, FaExternalLinkAlt, FaHeart, FaPlusSquare, FaSquare } from 'react-icons/fa'

const PropertiesCard = ({property}) => {
  return (
    <div className="bg-white overflow-hidden group rounded-xl cursor-pointer shadow-2xl hover:shadow-none">
        
        <div className="relative">
            <Image
            src={property.imageUrl}
            alt={property.propertyName}
            width={300}
            height={300}
            className="w-full object-cover group-hover:scale-110 transition-all duration-300"
            />

            <h1 className="px-6 absolute bottom-4 left-4 py-1.5 text-sm bg-black w-fit text-white rounded-[5px]">
                <span className="text-base font-bold">${property.price}</span> / mo
            </h1>

            <div className="flex items-center space-x-1 px-6 absolute top-4 left-4 py-2 text-sm bg-rose-600 w-fit text-white rounded-xl font-bold ">
                <FaBolt/>
                <span>Featured</span>
            </div>
        </div>

        <div className="p-5"> 
            <h1 className="mt-4 group-hover:underline text-gray-900 font-bold text-lg ">{property.propertyName}</h1>

            <p className="text-sm text-gray-500 mt-3">{property.location}</p>

            <div className="flex items-center mt-6 justify-between w-full lg:w-[80%]">

                <div className="flex items-center space-x-2">
                    <FaBed className="text-rose-500"/>

            <p className="text-xs text-gray-600">{property.bedrooms} Beds</p>
                </div>

                <div className="flex items-center space-x-2">

                    <FaBath className="text-rose-500"/>
                <p className="text-xs text-gray-600">{property.bathrooms} Bath</p>
                </div>


                <div className="flex items-center space-x-2">
             <FaSquare className="text-rose-500"/>
            <p className="text-xs text-gray-600">{property.size} sqrt</p>
               </div>

            </div>

<div className="w-full h-[1.2px] mt-4 mb-4 bg-gray-500 opacity-15"></div>
<div className="flex items-center justify-between">
    <h1 className="text-xs text-gray-600 m-1 ">For Rent</h1>

    <div className="flex items-center space-x-4 text-gray-500">
    <FaExternalLinkAlt   className="hover:text-rose-500"/>
    <FaPlusSquare  className="hover:text-rose-500"/>
    <FaHeart className="hover:text-rose-500"/>
    </div>
</div>


        </div>
      
    </div>
  )
}

export default PropertiesCard
