import React from 'react'
import { buildings } from '../../../../data/data'
import BuildingCard from './BuildingCard'

const BuildingFeature = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-200">
        <div className="w-[80%] mx-auto">

        <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">Explor Building Features</h1>
        <p className='text-sm text-gray-700'>lorem ipsum dolar sit amet</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-14 ml-10 mr-10">
            {buildings.map((building,index) => {
                return <div key={building.id}
                data-aos="zoom-in"
                data-aos-delay={`${index*150}`}
                data-aos-anchor-placement="fade-left">
                    <BuildingCard building={building}/>
                </div>
            })}
        </div>
      
    </div>
  )
}

export default BuildingFeature
