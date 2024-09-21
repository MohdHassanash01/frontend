import Image from 'next/image'
import React from 'react'

const AppartmentCard = ({item}) => {
  return (
    <div className="rounded-[10px] shadow-2xl p-6 hover:scale-105 transition-all duration-300 border-4 border-rose-400 hover:shadow-none">
        <Image src={item.icon} alt={item.type} height={50} width={50}/>
      <div className="mt-12">
        <h1 className='text-lg font-bold '>{item.type}</h1>
        <p className="mt-2 text-sm text-gray-800">{item.number} Properties</p>
      </div>
    </div>
  )
}

export default AppartmentCard
