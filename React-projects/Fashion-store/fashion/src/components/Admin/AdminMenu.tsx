import React from 'react'

const AdminMenu = () => {
  return (
    <div>
        <div className='bg-black text-white min-h-screen min-w-64'>
          <ul className='list-none'>
            <li className='admin-list active'>
              <a className='flex items-center gap-x-3 py-4 px-2 cursor-pointer'>
                <i className="fa-solid fa-bookmark text-2xl"></i>
                <p>Overview</p>
              </a>
            </li>
            <li className='admin-list'>
              <a className='flex items-center gap-x-3 py-4 px-2 cursor-pointer'>
                <i className="fa-brands fa-product-hunt text-2xl"></i>
                <p>Current products</p>
              </a>
            </li>
            <li className='admin-list'>
              <a className='flex items-center gap-x-3 py-4 px-2 cursor-pointer'>
                <i className="fa-solid fa-warehouse text-2xl"></i>
                <p>Warehouse</p>
              </a>
            </li>
            <li className='admin-list'>
              <a className='flex items-center gap-x-3 py-4 px-2 cursor-pointer'>
                <i className="fa-solid fa-circle-dollar-to-slot text-2xl"></i>
                <p>Revenue and expenditure</p>
              </a>
            </li>
            <hr></hr>
            <li className='admin-list'>
              <a className='flex items-center gap-x-3 py-4 px-2 cursor-pointer'>
                <i className="fa-solid fa-user text-2xl"></i>
                <p>Account</p>
              </a>
            </li>
            <li className='admin-list'>
              <a className='flex items-center gap-x-3 py-4 px-2 cursor-pointer'>
                <i className="fa-regular fa-calendar text-2xl"></i>
                <p>Roll Attendance</p>
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default AdminMenu