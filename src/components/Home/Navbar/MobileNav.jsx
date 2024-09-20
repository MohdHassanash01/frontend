import React from 'react'
import { navlinks } from './Navbar'
import Link from 'next/link'

import { FaExpandArrowsAlt } from "react-icons/fa";


const MobileNav = ({showNav,closeNav}) => {

    const navOpen = showNav ? "translate-x-0" :"translate-x-[-100%]"
  return (
    <div>
      {/* Overlay  */}

      <div className={`transform ${navOpen} fixed transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}></div>

      {/* navlinks  */}

      <div className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed flex justify-center flex-col h-full w-[80%] sm:w-[60%] bg-[#c1205e] space-y-6 z-[10000]`}>
      {navlinks.map((navlink) => {
        return ( <Link key={navlink.id} href={navlink.url}>
            <p className='text-[16px] ml-12 border-b-[1.5px] pb-1 w-fit sm:text-[30px]  font-medium hover:text-yellow-300'>{navlink.label}</p>
        </Link> )
    })}

      {/* close button  */}

<FaExpandArrowsAlt onClick={closeNav}  className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white' />
      </div>


      
    </div>
  )
}

export default MobileNav
