"use client";

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Image from 'next/image';
import Link from 'next/link';

const page = () => {

  const [imageList, setImagelist] = useState([])


  const fetchdata = async () => {
    try {
      const res = await axios.get('http://localhost:5000/property/getall');
      setImagelist(res.data); // Set the fetched data into the state
      console.log(res.data);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchdata()
  }, [])
    
    
  return (
  
    
    <div className="w-full min-h-screen  pt-28 bg-slate-800">
      
      {/* <!-- Masonry Cards --> */}
<div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* <!-- Grid --> */}
  <div className="grid sm:grid-cols-12 gap-6">

    <div className="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
      {/* <!-- Card --> */}
      <Link className="group relative block rounded-xl overflow-hidden focus:outline-none" href="/property">
        <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
          <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Masonry Cards Image"/>
        </div>
        <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
          <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-neutral-800 dark:text-neutral-200">
            Workplace personalities
          </div>
        </div>
      </Link>
      {/* <!-- End Card --> */}
    </div>
    {/* <!-- End Col --> */}


    <div className="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
      {/* <!-- Card --> */}
      <Link className="group relative block rounded-xl overflow-hidden focus:outline-none" href="/property">
        <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
          <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://images.pexels.com/photos/65438/pexels-photo-65438.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Masonry Cards Image"/>
        </div>
        <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
          <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-neutral-800 dark:text-neutral-200">
            Opisite Building
          </div>
        </div>
      </Link>
      {/* <!-- End Card --> */}
    </div>
    {/* <!-- End Col --> */}

    <div className="col-span-12 md:col-span-4">
      {/* <!-- Card --> */}
      <Link className="group relative block rounded-xl overflow-hidden focus:outline-none" href="/property">
        <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
          <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://images.unsplash.com/photo-1606836576983-8b458e75221d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Masonry Cards Image"/>
        </div>
        <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
          <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-neutral-800 dark:text-neutral-200">
            Pride 2021
          </div>
        </div>
      </Link>
      {/* <!-- End Card --> */}
    </div>
    {/* <!-- End Col --> */}

    <div className="col-span-12 sm:col-span-6 md:col-span-4">
      {/* <!-- Card --> */}
      <Link className="group relative block rounded-xl overflow-hidden focus:outline-none" href="/property">
        <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
          <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://images.pexels.com/photos/4652004/pexels-photo-4652004.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Masonry Cards Image"/>
        </div>
        <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
          <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-neutral-800 dark:text-neutral-200">
            Data at Preline
          </div>
        </div>
      </Link>
      {/* <!-- End Card --> */}
    </div>
    {/* <!-- End Col --> */}

    <div className="col-span-12 sm:col-span-6 md:col-span-4">
      {/* <!-- Card --> */}
      <Link className="group relative block rounded-xl overflow-hidden focus:outline-none" href="/property">
        <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
          <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=400"/>
        </div>
        <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
          <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-neutral-800 dark:text-neutral-200">
            Empowered management
          </div>
        </div>
      </Link>
 
    </div>


 {imageList.map((property) => {
  return <div key={property._id} className="gap-5 col-span-12 sm:col-span-6 md:col-span-4">
  {/* <!-- Card --> */}
  <Link className="group relative block rounded-xl overflow-hidden focus:outline-none" href="/property">
    <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
      <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src={property.image} alt="Masonry Cards Image"/>
    </div>
    <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
      <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-2 md:text-xl dark:bg-neutral-800 dark:text-neutral-200">
       property Image
      </div>
    </div>
  </Link>
  {/* <!-- End Card --> */}
</div>
 })} 
 


  </div>

</div>


    </div>
  )
}

export default page
