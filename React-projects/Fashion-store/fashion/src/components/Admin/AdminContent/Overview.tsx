import React from 'react'
import { Link } from 'react-router-dom'

const Overview = () => {
  return (
    <div>
        <h2 className='uppercase text-4xl font-bold'>Overview</h2>
        <div className='mt-16'>
            <div className='flex mb-7 justify-between'>
                <Link className='w-30' to=''>
                    <div className='box'>
                        <i className="fa-brands fa-product-hunt text-6xl"></i>
                        <hr className='bg-black h-1 w-full'></hr>
                        <p className='uppercase font-bold'>Current Products</p>
                        <p className='text-center'>To manage the products currently displayed on the website</p>
                    </div>
                </Link>
                <Link className='w-30' to=''>
                    <div className='box'>
                        <i className="fa-solid fa-warehouse text-6xl"></i>
                        <hr className='bg-black h-1 w-full'></hr>
                        <p className='uppercase font-bold'>Warehouse</p>
                        <p className='text-center'>To manage the number of products available, top-selling products, and recently imported products</p>
                    </div>
                </Link>
                <Link className='w-30' to=''>
                    <div className='box'>
                        <i className="fa-solid fa-circle-dollar-to-slot text-6xl"></i>
                        <hr className='bg-black h-1 w-full'></hr>
                        <p className='uppercase font-bold'>Revenue & expenditure</p>
                        <p className='text-center'>To manage revenues and expenditures</p>
                    </div>
                </Link>
            </div>
            <div className='flex mb-7 justify-center gap-x-16'>
                <Link className='w-30' to=''>
                    <div className='box'>
                        <i className="fa-solid fa-user text-6xl"></i>
                        <hr className='bg-black h-1 w-full'></hr>
                        <p className='uppercase font-bold'>Account</p>
                        <p className='text-center'>To manage the personal information</p>
                    </div>
                </Link>
                <Link className='w-30' to=''>
                    <div className='box'>
                        <i className="fa-regular fa-calendar text-6xl"></i>
                        <hr className='bg-black h-1 w-full'></hr>
                        <p className='uppercase font-bold'>Roll Attendance</p>
                        <p className='text-center'>To manage working days and leave</p>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Overview