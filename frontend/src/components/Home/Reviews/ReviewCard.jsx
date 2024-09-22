import Image from 'next/image'
import React from 'react'
import { FaQuoteRight, FaStar } from 'react-icons/fa'

const ReviewCard = ({review}) => {
  return (
    <div className="bg-black rounded-xl m-3 p-6 relative ">
      <FaQuoteRight className="w-8 h-8 absolute top-4 right-4 text-red-600 opacity-80"/>

      <div className="mt-6 flex items-center">
        <FaStar className="w-4 h-4 text-yellow-500"/>
        <FaStar className="w-4 h-4 text-yellow-500"/>
        <FaStar className="w-4 h-4 text-yellow-500"/>
        <FaStar className="w-4 h-4 text-yellow-500"/>
        <FaStar className="w-4 h-4 text-yellow-500"/>

      </div>
<p className="mt-6 text-base text-gray-400 font-semibold">
    {review.review}
</p>

<div className="w-full h-[1.2px] bg-gray-600  mt-6 mb-6 ">
    <div className="flex items-center space-x-4 py-4">
        <Image
        src={review.userImage}
        alt={review.name}
        width={50}
        height={50}
        className="rounded-full"
        />

<div >
<h1 className="font-bold text-gray-500">{review.name}</h1>
{/* <p className="text-sm text-gray-500">{review.profession}</p> */}
</div>
   
    </div>
</div>

    </div>
  )
}

export default ReviewCard
