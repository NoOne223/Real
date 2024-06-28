import React, { useState } from 'react';
import { Blank_img } from '../../assets/img/Image';

interface ProductAreaProps {
  productName: string;
}

const ProductArea: React.FC<ProductAreaProps> = ({ productName }) => {
  const [selectedColor, setSelectedColor] = useState('red');

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className='product-area'>
      <div>
        <img className={`product-image border-2 border-solid border-red-500 ${selectedColor === 'red' ? '' : 'hidden'}`} src={Blank_img} alt="Red Product" />
        <img className={`product-image border-2 border-solid border-yellow-400 ${selectedColor === 'yellow' ? '' : 'hidden'}`} src={Blank_img} alt="Yellow Product" />
        <img className={`product-image border-2 border-solid border-pink-400 ${selectedColor === 'pink' ? '' : 'hidden'}`} src={Blank_img} alt="Pink Product" />
        <img className={`product-image border-2 border-solid border-amber-900 ${selectedColor === 'brown' ? '' : 'hidden'}`} src={Blank_img} alt="Brown Product" />
      </div>
      <div className='p-4 flex flex-col gap-y-4'>
        <div className='h-14 text-center'>
          <h4 className='text-2xl uppercase font-bold'>{productName}</h4>
        </div>
        <div className='tab-color flex gap-x-2'>
          <div className={`color-tab bg-red-500 w-5 h-5 rounded-full ${selectedColor === 'red' ? 'color-selected' : ''}`} onClick={() => handleColorChange('red')}></div>
          <div className={`color-tab bg-yellow-400 w-5 h-5 rounded-full ${selectedColor === 'yellow' ? 'color-selected' : ''}`} onClick={() => handleColorChange('yellow')}></div>
          <div className={`color-tab bg-pink-400 w-5 h-5 rounded-full ${selectedColor === 'pink' ? 'color-selected' : ''}`} onClick={() => handleColorChange('pink')}></div>
          <div className={`color-tab bg-amber-900 w-5 h-5 rounded-full ${selectedColor === 'brown' ? 'color-selected' : ''}`} onClick={() => handleColorChange('brown')}></div>
        </div>
        <p className='price'>Price : 
          <span>{productName === 'Clothing 1' ? '1,00$' : productName === 'Clothing 2' ? '2,00$' : productName === 'Clothing 3' ? '3,00$' : '4,00$'}</span>
        </p>
        <div className='amount'>
          <i className="minus fa-solid fa-minus"></i>
          <input type='text' value={1} readOnly></input>
          <i className="plus fa-solid fa-plus"></i>
        </div>
        <div>
          <button className='buy-btn'>
            Buy
          </button>
          <button className='add-btn'>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

const Clothing: React.FC = () => {
  return (
    <div className='container'>
      <h4 className='text-6xl font-pata'>Clothing</h4>
      <div className='mt-10 grid'>
        <div className='relative'>
          <ProductArea productName='Clothing 1' />
        </div>
        <div id='New' className='relative'>
          <ProductArea productName='Clothing 2' />
          <p className='uppercase absolute'>( New <i className="fa-regular fa-gem"></i> )</p>
        </div>
        <div id='Onsale' className='relative'>
          <ProductArea productName='Clothing 3' />
          <div className='price-tag'>Sale %</div>
        </div>
        <div id='Outsale' className='relative'>
          <ProductArea productName='Clothing 4' />
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
  );
};

export default Clothing;