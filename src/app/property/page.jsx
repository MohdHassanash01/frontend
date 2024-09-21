'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function page() {

  const [propertyList,setPropertylist] =  useState([])


  const fetchdata = async () => {
    try {
      const res = await axios.get('http://localhost:5000/property/getall');
      setPropertylist(res); // Set the fetched data into the state
      console.log(res);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchdata()
   },[])

   return (
    <div className="w-full h-screen   pt-20">
      <div>
        <h1>
         {propertyList.map((item) => {
          return <div key={item._id}>
            <h1>{item.name}</h1>

            hassan
          </div>
         })}
        </h1>
      </div>
    </div>
  );
 

  }



  



export default page
