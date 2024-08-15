import React from 'react'
import { Image7, planet } from '../images/Image'

const Content4 = () => {
  return (
    <div className='container mt-24 content4-mb'>
      <div className='my-24 relative z-0'>
        <h4 className='text-3xl'>My projects</h4>
        <div className='flex flex-wrap gap-4'>
            <a href='#' className='project w-1/4 flex flex-col items-center p-5'>
                <img className='w-1/2' src={planet}></img>
                <h6 className='text-xl'>Portfolio</h6>
                <p className='text-center'>
                    This is my first React project, so it might be simple and have some mistakes. I would appreciate it if you could point out any improvements I can make.
                </p>
            </a>
            <div className='no-project w-1/4 flex flex-col items-center justify-center p-5'>
                <p>
                    Will have in the future
                </p>
            </div>
        </div>
        <img className='w-1/4 absolute z-behind right-0 bottom-0' src={Image7}></img>
      </div>
    </div>
  )
}

export default Content4
