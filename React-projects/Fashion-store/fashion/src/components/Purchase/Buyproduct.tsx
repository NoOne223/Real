import React, { useState } from 'react';
import { Blank_img } from '../../assets/img/Image';
import Editproduct from './Editproduct';

const Buyproduct = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div>
      <div className='mt-10 flex justify-between h-500'>
        <div className='w-2/5'>
          <img className='h-full' src={Blank_img}></img>
        </div>
        <div className='w-7/12 h-full'>
          <div>
            <div className='flex items-center justify-between relative'>
              <h4 className='text-2xl font-bold'>Product Name</h4>
              <div className='cursor-pointer edit-product' onClick={togglePopup}>
                <i className="fa-solid fa-pen-to-square text-xl"></i>
                <p className='absolute right-0 hidden hide-text'>Change product attributes</p>
              </div>
            </div>
            <hr className='w-full bg-black h-1 mt-4'></hr>
          </div>
          <div className='mt-4'>
            <div className='flex items-center my-3 gap-x-3'>
              <p className='min-w-16'>
                Color :
              </p>
              <div className='border border-solid border-gray-300 p-1 rounded-md w-fit'>
                <div className='bg-red-400 w-11 h-5 rounded'></div>
              </div>
            </div>
            <div className='flex items-center my-3 gap-x-3'>
              <p className='min-w-16'>
                Size :
              </p>
              <span className=''>S</span>
            </div>
            <div className='flex items-center my-3 gap-x-3'>
              <p className='min-w-16'>
                Amount :
              </p>
              <span className=''>1</span>
            </div>
            <div className='flex items-center my-3 gap-x-3'>
              <p className='min-w-16'>
                Price :
              </p>
              <span className=''>1,00$</span>
            </div>
            <div className='my-3'>
              <p>
                Description :
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur expedita laudantium perferendis beatae temporibus, 
                libero corrupti neque recusandae quaerat commodi eligendi et distinctio a. Voluptatem fugiat odit pariatur eius ea.
              </p>
            </div>
            <div className='my-3'>
              <p>
                Materials :
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ipsa atque cum nulla cumque obcaecati, 
                cupiditate officia saepe pariatur porro earum nostrum, veritatis culpa consequatur perferendis beatae nisi sed odit.
              </p>
            </div>
          </div>
          <div className='mt-6'>
            <button className='add-btn text-3xl'>Buy</button>
          </div>
        </div>
      </div>
      {isPopupVisible && <Editproduct togglePopup={togglePopup} />}
    </div>
  )
}

export default Buyproduct;
