import React from 'react'
import Act1 from '../img/resort1.jpg'
import Act2 from '../img/cruise.jpg'
import Act3 from '../img/excursion.jpg'

const Activities = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-5px]'>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] translate-x-[50%] translate-y-[-50%] text-white text-2xl font-bold'>Resorts</h3>
        <img src={Act1} alt='/' className='w-full h-full object-cover relative border-4 border-white shadow-lg'/>
      </div>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] translate-x-[50%] translate-y-[-50%] text-white text-2xl font-bold'>Cruises</h3>
        <img src={Act2} alt='/' className='w-full h-full object-cover relative border-4 border-white shadow-lg'/>
      </div>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] translate-x-[50%] translate-y-[-50%] text-white text-2xl font-bold'>Excursions</h3>
        <img src={Act3} alt='/' className='w-full h-full object-cover relative border-4 border-white shadow-lg'/>
      </div>
    </div>
  )
}

export default Activities
