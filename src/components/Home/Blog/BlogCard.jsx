import Image from 'next/image'
import React from 'react'
import { FaArrowLeft, FaArrowRight, FaCalendar, FaRegComment } from 'react-icons/fa'

const BlogCard = ({blog}) => {
  return (
    <div className="bg-white rounded-xl  overflow-hidden shadow-2xl hover:shadow-none  ">
        <div>
            <Image
            src={blog.image}
            alt={blog.title}
            width={300}
            height={300}
            className='w-full object-cover object-center'/>
<div className="p-6">
    <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
            <FaCalendar className='text-rose-500'/>
            <span className="text-sm text-gray-700">{blog.date}</span>
        </div>

        <div className="flex items-center space-x-2">
            <FaRegComment className="text-rose-500 "/>
            <span className="text-sm text-gray-700 hover:text-rose-600">{blog.comment}</span>
        </div>
    </div>

    <h1 className="mt-6 font-bold hover:underline cursor-pointer mb-2 text-lg text-gray-700">{blog.title}</h1>
    <p className="text-gray-500 text-base">{blog.shortDescription}</p>

    <div className="mt-4 flex items-center space-x-2 hover:text-red-500 cursor-pointer">
        <span className="font-bold">Read More</span>
        <FaArrowRight />
    </div>
</div>

        </div>
      
    </div>
  )
}

export default BlogCard
