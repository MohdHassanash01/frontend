import React from 'react'
import { FaFacebook, FaHouseDamage, FaInstagram, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="pt-12 pb-12 bg-black">
        <div className="w-[80%] mx-auto grid items-start sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20 mb-2 ">

            
        <div >
<div className="flex items-center space-x-2 sm:mx-auto">
    <div className="md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white flex items-center justify-center flex-col ">
    <FaHouseDamage />
   
    </div>

    <h1 className='text-white font-bold text-sm sm:text-base md:text-xl'>HomeHub</h1>
</div>

<p className="text-gray-300 mt-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, labore.</p>

<p className="text-gray-300 mt-4 font-semibold">example@gmail.com</p>

<p className="text-gray-300 mt-4 font-semibold">
    +123 456 789
</p>

{/* social link  */}
<div className='flex items-center space-x-4 mt-6'>
<FaFacebook className="w-6 h-6 text-blue-600"/>
<FaTwitter className="w-6 h-6 text-red-600"/>
<FaYoutube className="w-6 h-6 text-sky-600"/>
<FaInstagram className="w-6 h-6 text-yellow-600"/>

</div>
  </div>


 {/* 2 part  */}

<div className="md:mx-auto">
    <h1 className="footer_heading">Popular Search</h1>
    <p className="footer_link">Apartment For Rent</p>
    <p className="footer_link">Apartment Low to Hign</p>
    <p className="footer_link">Apartment For Buy</p>
    <p className="footer_link">Apartment For Rent</p>
</div>

 {/* 3 part  */}

 <div className="lg:mx-auto">
    <h1 className="footer_heading">Quick Link</h1>
    <p className="footer_link">Terms Of use</p>
    <p className="footer_link">Privacy Policy</p>
    <p className="footer_link">Pricing Plans</p>
    <p className="footer_link">Our Services</p>

    <p className="footer_link">Contact Support</p>
    <p className="footer_link">Careers</p>
    <p className="footer_link">FAQs</p>
</div>

{/* 4 part  */}

<div className="lg:mx-auto">
    <h1 className="footer_heading">Discover</h1>
    <p className="footer_link">Miami</p>
    <p className="footer_link">Los Angles</p>
    <p className="footer_link">Chicago</p>
    <p className="footer_link">London</p>
</div>

        </div>
    </div>
  )
}

export default Footer
