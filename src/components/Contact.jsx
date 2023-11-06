import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1140px] m-auto w-full p-4 py-16'>
      <h2 className='text-center text-gray-700'>Send a message</h2>
      <p className='text-center text-gray-700 py-2'>We're standing by!</p>
      <div className='grid md:grid-cols-2'>
        <img src='https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc29ydCUyMGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60' alt='/' className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]'/>
        <form action="">
            <div className='grid grid-cols-2'>
                <input className='border m-2 p-2' type="text" placeholder='First' />
                <input className='border m-2 p-2' type="text" placeholder='Last' />
                <input className='border m-2 p-2' type="email" placeholder='Email' />
                <input className='border m-2 p-2' type="tel" placeholder='Phone No.'/>
                <input className='border col-span-2 m-2 p-2' type="text" placeholder='Address' />
                <textarea className='border col-span-2 m-2 p-2' cols="30" rows="4"></textarea>
                <button className='col-span-2 m-2'>Submit</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
