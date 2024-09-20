import React from 'react'
import { appartmentTypeData } from '../../../../data/data'
import AppartmentCard from './AppartmentCard'

const AppartmentType = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">Appartment Types</h1>
        <p className='text-sm text-gray-700'>lorem ipsum dolar sit amet</p>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-10 mb-10 md:mt-20 gap-8 items-center">
{appartmentTypeData.map((item) => {
    return <div key={item.id}>
        <AppartmentCard item={item}/>
    </div>
})}
</div>

      </div>
    </div>
  )
}

export default AppartmentType
