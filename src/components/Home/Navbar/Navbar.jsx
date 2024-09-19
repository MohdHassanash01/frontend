// 'use client'
import Link from 'next/link';

import { FaHouseDamage, FaUserCircle, FaBars} from "react-icons/fa";
// import { useState,useEffect } from 'react';

export const navlinks = [
    {
        id:1,
        url:"#",
        label:"Home"
    },
    {
        id:2,
        url:"#",
        label:"Linsting"
    },
    {
        id:3,
        url:"#",
        label:"Property"
    },
    {
        id:4,
        url:"#",
        label:"Blog"
    },
    {
        id:5,
        url:"#",
        label:"Contact"
    }
]

const Navbar = ({openNav}) => {


    // const [navBg,setNavbg] = useState(false)
    // useEffect(() => {
    //     const handle = () => {
    //         if (window.screenY >= 90) setNavbg(true)
    //             if(window.screenY < 90)  setNavbg(false)
    //     }

    //     window.addEventListener("scroll",handle)

    //     return () => {
    //     window.removeEventListener("scroll",handle)
            
    //     }
    // },[])

  return (
    <div className={`fixed  h-[10vh] z-[100] w-full transition-all duration-200 `}>

        <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto'>

{/* logo  */}

<div className="flex items-center space-x-2">
    <div className="md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white flex items-center justify-center flex-col">
    <FaHouseDamage />
   
    </div>

    <h1 className='text-white font-bold text-sm sm:text-base md:text-xl'>HomeHub</h1>
</div>

{/* nav links  */}

<div className='lg:flex items-center space-x-14 text-white hidden'>
    {navlinks.map((navlink) => {
        return ( <Link key={navlink.id} href={navlink.url}>
            <p className='font-medium hover:text-yellow-300'>{navlink.label}</p>
        </Link> )
    })}
</div>


{/* login and burgermenu  */}

<div className='flex items-center space-x-4'>
    {/* login Button  */}

    <div className='flex items-center cursor-pointer rounded-full text-white space-x-2 hover:text-red-400 transition-all duration-200'>
        <FaUserCircle className='w-5 h-5'/>
        <p className='font-bold text-xs sm:text-base'>Login / Register</p>
    </div>

    {/* burger menu  */}

    <FaBars onClick={openNav}  className='sm:w-6 sm:h-6 w-4 h-4 lg:hidden cursor-pointer text-white' />

</div>


        </div>
      
    </div>
  )
}

export default Navbar
