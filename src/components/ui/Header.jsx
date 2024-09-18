"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { Button } from './button'
import { FaPlus } from "react-icons/fa";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {

    const path = usePathname()

    useEffect(() => {
        console.log();
        
    },[])

 

  return (
   <div className='p-6 px-10 flex justify-between shadow-md fixed top-0 w-full z-10 bg-white'>

<div className='flex gap-12 items-center'>
     <Image src={'/logo.svg'} width={150} height={150}/>
   
</div>

<div className='flex gap-10'>
<ul className='hidden md:flex gap-8 font-semibold'>
      <Link href={'/'}><li className={`'hover:text-[#7f57f1] cursor-pointer' ${path=='/'&& 'text-[#7f57f1]'}`}>For Sale</li></Link> 

        <li className='hover:text-[#7f57f1] cursor-pointer'>For Rent</li>
        <li className='hover:text-[#7f57f1] cursor-pointer'>Agent Finder</li>
     </ul>

<a href="" className='hidden md:flex gap-8 font-semibold hover:text-[#7f57f1] cursor-pointer'>Contact</a>

</div>

<div className='flex gap-2'>
<Button className="flex gap-2 bg-[#7f57f1] "> <FaPlus className='h-5 w-5'/> Post Your Add</Button>

<Button variant="outline">Login</Button>
</div>

   </div>
  )
}

export default Header
