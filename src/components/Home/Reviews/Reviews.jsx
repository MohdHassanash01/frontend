import React from 'react'
import ReviewSlider from './ReviewSlider'

const Reviews = () => {
  return (
    <div className='pt-16 pb-16 bg-[#fef7f6]'>
      <div className='w-[80%] mx-auto'>

      <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">Our Clients Reviews</h1>
        <p className='text-sm text-gray-700'>lorem ipsum dolar sit amet</p>

        <div className="mt-14">
      <ReviewSlider/>
        </div>
        </div>

    </div>
  )
}

export default Reviews
