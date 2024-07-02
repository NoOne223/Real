import React, { useState } from 'react';
import ProductArea from './ProductArea';


const Access: React.FC = () => {
  return (
    <div className='container'>
      <h4 className='text-6xl font-pata'>Accessory</h4>
      <div id='Clothing' className='mt-10 grid'>
        <div className='relative'>
          <ProductArea productName='Product 1' />
        </div>
        <div className='relative'>
          <ProductArea productName='Product 2' status='New' />
        </div>
        <div className='relative'>
          <ProductArea productName='Product 3' status='Onsale' />
        </div>
        <div className='relative'>
          <ProductArea productName='Product 4' status='Outsale' />
        </div>
      </div>
      <div className='pagination mt-4'>
        <ul className='list-none page-list flex gap-x-2 items-center justify-end'>
          <li className='f-page text-sm text-slate-400 cursor-pointer'>
            <i className="fa-solid fa-backward"></i>
          </li>
          <li className='previous text-slate-400 cursor-pointer'>
            <i className="fa-solid fa-caret-left"></i>
          </li>
          <li className='page-number border border-solid border-slate-400 px-2'>
            <span className='currentpage'>1</span>/<span className='totalpage'>1</span>
          </li>
          <li className='next text-slate-400 cursor-pointer'>
            <i className="fa-solid fa-caret-right"></i>
          </li>
          <li className='l-page text-sm text-slate-400 cursor-pointer'>
            <i className="fa-solid fa-forward"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Access;