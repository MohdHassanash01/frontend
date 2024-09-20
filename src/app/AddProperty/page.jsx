import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen bg-slate-300  pt-28 flex justify-center pb-[100px]'>


<form action="" className='flex flex-col w-fit border-4 border-rose-600 p-10 h-fit rounded-xl gap-3   hover:shadow-red-500   bg-white hover:shadow-xl'>

  
    <h1 className='font-bold text-xl text-rose-500'>Register Your Property</h1>


  <div className="flex flex-col">
  <label htmlFor="owner" 
  className="font-medium">Enter the Name of property owner:</label>
  <input type="text" className="rounded-[5px] pl-3 border-slate-500 border-[1px] "/> 
    </div>

  

 <div className="flex flex-col">
 <label htmlFor="location"
 className="font-medium"
 >Enter your location :</label>
 <input type="text" className="rounded-[5px] pl-3 border-slate-500 border-[1px] "/> 
 </div>


<div className="flex flex-col">
<label htmlFor="country"
className="font-medium"
>Enter your Country :</label>
<input type="text" className="rounded-[5px] pl-3 border-slate-500 border-[1px] "/> 
</div>


<div className="flex flex-col">
<label htmlFor="city"
className="font-medium"
>Enter your City :</label>
<input type="text" className="rounded-[5px] pl-3 border-slate-500 border-[1px] "/> 
</div>


<div className="flex flex-col">
<label htmlFor="price" 
className="font-medium"
>Enter Price :</label>
<input type="text" className="rounded-[5px] pl-3 border-slate-500 border-[1px] "/> 
  </div> 

 <div className="flex flex-col">
 <label htmlFor="image"
 className="font-medium"
 >Upload Image :</label>
 <input type="file" className="rounded-[5px]  border-slate-500 border-[1px] "/> 
 </div>




 <input type="submit" className="rounded-[5px]   bg-rose-500 text-white font-semibold p-1 mt-2"/> 



</form>



    </div>
  )
}

export default page

