import React from 'react'
import Image from 'next/image'

import { FaArrowLeft, FaArrowRight, FaCalendar, FaRegComment } from 'react-icons/fa'
export const blogCard = [
    {
      id: 1,
      date: "02 Apr 2024",
      comment: "Comments (3)",
      title: "Find the Perfect Advertiser for Your Needs",
      shortDescription:
        "Find the right advertiser to effectively boost your business.",
      image: "/images/p20.jpeg",
    },
    {
      id: 2,
      date: "05 Apr 2024",
      comment: "Comments (2)",
      title: "Maximize Your Business Growth with Smart Marketing",
      shortDescription:
        "Grow your business using smart, effective marketing strategies.",
      image: "/images/p21.jpeg",
    },
    {
      id: 3,
      date: "10 Apr 2024",
      comment: "Comments (5)",
      title: "Tips for Choosing the Right Property to Invest In",
      shortDescription:
        "Select the best properties for secure and profitable investments.",
      image: "/images/p22.jpeg",
    },

    {
        id: 4,
        date: "26 Dec 2022",
        comment: "Comments (19)",
        title: "Tips for Choosing the Right Property to Invest In",
        shortDescription:
          "Select the best properties for secure and profitable investments.",
        image: "/images/p11.jpeg",
      },

      {
        id: 5,
        date: "10 Oct 2023",
        comment: "Comments (5)",
        title: "Tips for Choosing the Right Property to Invest In",
        shortDescription:
          "Select the best properties for secure and profitable investments.",
        image: "/images/p12.webp",
      },

      {
        id: 6,
        date: "15 May 2021",
        comment: "Comments (23)",
        title: "Tips for Choosing the Right Property to Invest In",
        shortDescription:
          "Select the best properties for secure and profitable investments.",
        image: "/images/p13.jpeg",
      },
  ];


const Blog = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-200 ">

    <div className="w-[80%] mx-auto">
    <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800  hover:underline transition-all ease-in">Check Our Blogs</h1>
    <p className='text-sm text-gray-700'>lorem ipsum dolar sit amet</p>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-16 gap-6 items-center sm:gap-16">
        {blogCard.map((blog) => {
            return <div key={blog.id}>
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
            </div>
        })}
    </div>
    </div>
     
    </div>
  )
}

export default Blog