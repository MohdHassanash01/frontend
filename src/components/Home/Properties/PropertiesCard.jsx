import Image from 'next/image'
import React from 'react'

const PropertiesCard = ({property}) => {
  return (
    <div className="bg-white overflow-hidden group rounded-lg cursor-pointer shadow-lg">
        
        <div className="relative">
            <Image
            src={property.imageUrl}
            alt={property.propertyName}
            width={300}
            height={300}
            className="w-full object-cover group-hover:scale-110 transition-all duration-300"
            />
        </div>
      
    </div>
  )
}

export default PropertiesCard
