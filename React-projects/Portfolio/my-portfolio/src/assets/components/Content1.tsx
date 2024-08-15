import React from 'react'
import { Image1 } from '../images/Image'
import Lang from './Lang'

const Content1 = () => {
  return (
    <div className='container relative content1-mb'>
        <Lang />
        <h1 className='text-white text-7xl font-bold text-center'>Welcome To My Portfolio</h1>
        <div className='flex flex-wrap justify-around items-end my-24'>
            <img className='w-1/4 h-fit' src={Image1}></img>
            <div className='w-2/5 px-5 rounded-lg text-white'>
                <h4 className='text-center uppercase text-3xl'>Personal infomation</h4>
                <ul className='m-auto'>
                    <li className='my-10'>
                        <strong className='text-xl text-purple-500'>Name :</strong> <span>Lê Hoàng Nam</span>
                    </li>
                    <li className='my-10'>
                        <strong className='text-xl text-purple-500'>Date of birth :</strong> <span>03-09-2001</span>
                    </li>
                    <li className='my-10'>
                        <strong className='text-xl text-purple-500'>Gender :</strong> <span>Male</span>
                    </li>
                    <li className='my-10'>
                        <strong className='text-xl text-purple-500'>Address :</strong> <span>787/1 Truong Chinh street, Tay Thanh ward, Tan Phu distric, Ho Chi Minh city</span>
                    </li>
                    <li className='my-10'>
                        <strong className='text-xl text-purple-500'>Education :</strong> <span>HUIT University</span>
                    </li>
                    <li className='my-10'>
                        <strong className='text-xl text-purple-500'>Description about me :</strong>
                        <p>
                        I'm an energetic person. I love learning new things, listening to music, and creating templates on my own. 
                        <br></br>
                        I am capable of participating in projects, handling tasks flexibly, and collaborating well within a team.
                        <br></br>
                        I want to become a master of frontend and fullstack development for future purposes. 
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Content1
