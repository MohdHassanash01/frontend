import React from 'react'
import CitySlider from './CitySlider'

const CityProperties = () => {
  return (
    <div className="pt-16 pb-16">
        <div className="w-[80%] mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">Explor city Properties</h1>
        <p className='text-sm text-gray-700'>lorem ipsum dolar sit amet</p>

        <div className="mt-10 md:mt-16">
            {/* slider  */}

            <CitySlider/>
        </div>
        </div>
      
    </div>
  )
}

export default CityProperties
