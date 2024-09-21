'use client'
import axios from 'axios'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function page() {

  const [propertyList,setPropertylist] =  useState([])


  const fetchdata = async () => {
    try {
      const res = await axios.get('http://localhost:5000/property/getall');
      setPropertylist(res.data); // Set the fetched data into the state
      console.log(res.data);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchdata()
   },[])



   function deleteuser(id){
     axios.delete("http://localhost:5000/property/delete/"+id)
     .then((result) =>{
       fetchdata()
     })
     .catch((err) => {
       console.log(err);
      
     })
 }




   return (
    <div className='pt-48 w-full h-screen px-20'>

<table className="border-2 border-slate-300 rounded-xl">
  <thead className='border-b-2 text-left bg-blue-500 text-white rounded-xl'>
    <tr className='rounded-xl'>
    <th className='p-3 text-lg sm:text-sm'>Property owner Id</th>
      <th className='p-3 text-lg sm:text-sm'>Owner Name</th>
      <th className='p-3  sm:text-base'>Location</th>
      <th className='p-3 text-lg sm:text-base'>City</th>
      <th className='p-3 text-lg sm:text-base'>Country</th>
      <th className='p-3 text-lg sm:text-base'>Price</th>
      <th className='p-3 text-lg sm:text-base'>Delete</th>


    </tr>
  </thead>
  <tbody>
    {propertyList.map((property) => {
      return<tr key={property._id}>
        <td className='p-3'>{property._id}</td>
<td className='p-3'>{property.owner}</td>
<td className='p-3'>{property.location}</td>
<td className='p-3'>{property.city}</td>
<td className='p-3'>{property.country}</td>
<td className='p-3'>{property.price}</td>

<td>
  <button className="mr-4 px-3 py-1 bg-red-500 rounded-full text-white"
  onClick={() => {deleteuser(property._id)}}
  >Delete</button>
</td>
      </tr>
    })}
  </tbody>
</table>


    </div>
  );
 

  }



  



export default page
