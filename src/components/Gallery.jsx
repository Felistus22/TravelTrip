import React from 'react'
import Act3 from '../img/resort3.jpg'


const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] w-full py-16 px-4 m-auto'>
      <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
      <div className='grid sm:grid-cols-5 gap-4'>
        <div className='sm:col-span-3 col-span-2 row-span-2'>
            <img src='https://images.unsplash.com/photo-1618245318763-a15156d6b23c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzb3J0JTIwaXNsYW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60' alt='' className='w-full h-full object-cover'/>
        </div>
        <div>
            <img src='https://images.unsplash.com/photo-1666813721996-42956e40788e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' alt='' className='w-full h-full object-cover'/>
        </div>
        <div>
            <img src='https://images.unsplash.com/photo-1609785784479-e8f7bc2853fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=875&q=80' alt='/' className='w-full h-full object-cover' />
        </div>
        <div>
            <img src='https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' alt='' className='w-full h-full object-cover'/>
        </div>
        <div>
            <img src={Act3} alt='' className='w-full h-full object-cover'/>
        </div>
      </div>
    </div>
  )
}

export default Gallery
