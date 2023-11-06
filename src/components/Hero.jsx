import React from 'react'
import HeroImg from '../img/banner.jpg'

const Hero = () => {
  return (
    <div>
      <div className='w-full h-96 bg-gradient-to-tr from-indigo-500 to-purple-200 relative top-12'>
        <img src={HeroImg} alt='background' className='w-full h-full  object-cover absolute mix-blend-overlay'/>
          <div className='top-[40%] w-full m-auto md:min-w-[50%] flex flex-col text-gray-900 p-4'>
              <h1 className='font-bold text-4xl mt-7 mx-7'>Find your special trip</h1>
              <h2 className='text-3xl py-4 italic mx-7'>With Weekaway</h2>
              <p className='max-w-md text-sky-950 mx-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem illum debitis id, vel, labore non nobis molestiae facere aliquid, voluptas eius dolor omnis exercitationem perspiciatis qui repellat. Quia, nihil ab.</p>
          </div>
    </div>
    </div>








    /*<div className='w-full h-90vh relative'>
      <img src={HeroImg} alt='background' className='w-full h-full  object-cover'/>
      <div className='m-auto max-w-{1140px} absolute'>
        <div className='top-{40%} w-full md:-{50%} max-w-{600px} flex flex-col text-teal-800 p-4'>
            <h1>Find your special trip</h1>
            <h2>With Weekaway</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem illum debitis id, vel, labore non nobis molestiae facere aliquid, voluptas eius dolor omnis exercitationem perspiciatis qui repellat. Quia, nihil ab.</p>
        </div>
      </div>
    </div>*/
  )
}

export default Hero
