import React from 'react'
import { Blank_img } from '../../assets/img/Image'

const Access = () => {
  return (
    <div>
        <div id='Access' className='container'>
          <h4 className='text-6xl font-pata'>Accessory</h4>
          <div className='mt-10 grid'>
            <div className='product-area relative'>
              <img src={Blank_img}></img>
              <div className='p-4 flex flex-col gap-y-4'>
                <div className='h-14 text-center'>
                  <h4 className='text-2xl uppercase font-bold'>Accessory 1</h4>
                </div>
                <p className='price'>Price : <span>1,00$</span></p>
                <div className='amount'>
                  <i className="minus fa-solid fa-minus"></i>
                  <input type='text' value={1}></input>
                  <i className="plus fa-solid fa-plus"></i>
                </div>
                <div>
                  <button className='buy-btn'>
                  buy
                  </button>
                  <button className='add-btn'>
                  Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div id='New' className='product-area relative'>
              <img src={Blank_img}></img>
              <div className='p-4 flex flex-col gap-y-4'>
                <div className='text-center h-14'>
                  <h4 className='text-2xl uppercase font-bold'>Accessory 2</h4>
                  <p>
                    ( NEW <i className="fa-solid fa-gem"></i> )
                  </p>
                </div>
                <p className='price'>Price : <span>2,00$</span></p>
                <div className='amount'>
                  <i className="minus fa-solid fa-minus"></i>
                  <input type='text' value={1}></input>
                  <i className="plus fa-solid fa-plus"></i>
                </div>
                <div>
                  <button className='buy-btn'>
                  buy
                  </button>
                  <button className='add-btn'>
                  Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div id='Onsale' className='product-area relative'>
              <img src={Blank_img}></img>
              <div className='p-4 flex flex-col gap-y-4'>
                <div className='h-14 text-center'>
                  <h4 className='text-2xl uppercase font-bold'>Accessory 3</h4>
                </div>
                <p className='price'>Price : <span>3,00$</span></p>
                <div className='amount'>
                  <i className="minus fa-solid fa-minus"></i>
                  <input type='text' value={1}></input>
                  <i className="plus fa-solid fa-plus"></i>
                </div>
                <div>
                  <button className='buy-btn'>
                  buy
                  </button>
                  <button className='add-btn'>
                  Add to cart
                  </button>
                </div>
              </div>
              <div className='price-tag'>Sale %</div>
            </div>
            <div id='Outsold' className='product-area relative'>
              <img src={Blank_img}></img>
              <div className='p-4 flex flex-col gap-y-4'>
                <div className='h-14 text-center'>
                  <h4 className='text-2xl uppercase font-bold'>Accessory 4</h4>
                </div>
                <p className='price'>Price : <span>4,00$</span></p>
                <div className='amount'>
                  <i className="minus fa-solid fa-minus"></i>
                  <input type='text' value={1}></input>
                  <i className="plus fa-solid fa-plus"></i>
                </div>
                <div>
                  <button className='buy-btn'>
                  buy
                  </button>
                  <button className='add-btn'>
                  Add to cart
                  </button>
                </div>
              </div>
              <div className='out-sold'></div>
            </div>
          </div>
          <div className='mt-8'>
            <button className='w-full rounded-md border-2 border-solid border-gray-400 p-2 uppercase text-3xl'>
                See more
                <i className="fa-solid fa-chevron-down px-4"></i>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Access