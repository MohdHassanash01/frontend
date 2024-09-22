import React from 'react'
import { properties } from '../../../../data/data'
import PropertiesCard from './PropertiesCard'

const Properties = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-200">
    <div className="w-[80%] mx-auto">
    <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">Discover Our Properties</h1>
    <p className='text-sm text-gray-700'>lorem ipsum dolar sit amet</p>

<div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-center">

    {properties.map((property,index) => {
        return <div key={property.id}
        data-aos="fade-up"
        data-aos-delay={`${index*150}`}
        data-aos-anchor-placement="top-center">
            <PropertiesCard property={property}/>
        </div>
    })}
</div>

    </div>  
    </div>
  )
}

export default Properties
