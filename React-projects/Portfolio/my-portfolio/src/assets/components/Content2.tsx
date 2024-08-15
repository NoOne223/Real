import React from 'react'
import { rocket } from '../images/Image'

const Content2 = () => {
  return (
    <div className='container mt-24 content2-mb'>
      <div className='my-24 text-white relative'>
        <div className='flex justify-center'>
          <div className='border-r-4 border-solid pr-3 w-fit'>
            <h1 className='text-7xl font-bold uppercase text-end'><span className='text-black'>What</span><br></br> is my <br></br> <strong className='text-purple-500'>purpose</strong></h1>
          </div>
          <div className='pl-3 w-1/2 leading-10'>
            <h4 className='text-3xl'>I want to become <strong className='text-purple-500'>Front-end</strong> developer</h4>
            <p className='max-w-xl'>
              <strong className='uppercase text-xl text-purple-500'>In present,</strong> I want to find a creative eviroment that I can improve my Front-end skill. 
            </p>
            <p className='max-w-xl'>
              <strong className='uppercase text-xl text-purple-500'>In the near future,</strong> I strive to become skilled HTML, CSS, Jquery and one of frameworks like Reactjs. 
            </p>
            <p className='max-w-xl'>
              <strong className='uppercase text-xl text-purple-500'>For the further,</strong> I will try to become fullstack developer.
            </p>
          </div>
        </div>
        <img className='rocket w-10 h-fit absolute bottom-0 right-36' src={rocket}></img>
      </div>
    </div>
  )
}

export default Content2
