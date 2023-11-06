import React from 'react'
import {BsChatDots} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='max-w-[1140px] w-full m-auto py-4 border-t-4'>
      <div className='flex items-center m-auto justify-center'>
        <BsChatDots size={30} className='text-[var(--primary-dark)] mr-2'/>
        <h1 className='text-xl font-bold text-gray-700'>WEEKAWAY</h1>
        
      </div>
    </div>
  )
}

export default Footer
