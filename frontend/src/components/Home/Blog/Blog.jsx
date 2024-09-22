import React from 'react'
import { blogs } from '../../../../data/data'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <div className="pt-6 pb-16 bg-gray-200">

    <div className="w-[80%] mx-auto">
    <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">Check Our Blogs</h1>
    <p className='text-sm text-gray-700'>lorem ipsum dolar sit amet</p>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-16 gap-6 items-center sm:gap-16">
        {blogs.map((blog,index) => {
            return <div key={blog.id}
            data-aos="zoom-out"
            data-aos-delay={`${index*150}`}
            data-aos-anchor-placement="top-center">
                <BlogCard blog={blog}/>
            </div>
        })}
    </div>
    </div>
     
    </div>
  )
}

export default Blog
