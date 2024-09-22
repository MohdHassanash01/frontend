"use client"
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
    const [isVisible,setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) setIsVisible(true)
            if (window.scrollY < 300) setIsVisible(false)

        };

        window.addEventListener("scroll",toggleVisibility)
    },[])


    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

  return (
    <div className="fixed bottom-4 animate-pulse right-2">
      {isVisible && (
        <button 
        onClick={scrollToTop}
        className="bg-rose-700 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none"
        >
            <FaArrowUp/>
        </button>
      )}
    </div>
  )
}

export default ScrollToTop
