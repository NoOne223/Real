import React, { useState } from 'react';
import ProductColor from '../ProductColor';
import ProductSize from '../ProductSize';

interface EditproductProps {
  togglePopup: () => void;
}

const Editproduct: React.FC<EditproductProps> = ({ togglePopup }) => {
  const [selectedColor, setSelectedColor] = useState('red');
  const [selectedSize, setSelectedSize] = useState('S');

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <div>
      <div className='popup border border-solid border-black p-7 pb-0 rounded-xl fixed z-30 top-1/3'>
        <div className='h-full'>
          <div className='flex justify-between'>
            <h4 className='text-2xl font-bold'>Product Name</h4>
            <button onClick={togglePopup}>
                <i className="fa-solid fa-door-open"></i>
            </button>
          </div>
          <hr className='w-full bg-black h-1 mt-4'></hr>
          <div className='product-color my-6'>
            <p className='mb-2'>Change color :</p>
            <ProductColor selectedColor={selectedColor} handleColorChange={handleColorChange} />
          </div>
          <div className='my-6'>
            <p className='mb-2'>Change size :</p>
            <ProductSize className='w-fit' selectedSize={selectedSize} handleSizeClick={handleSizeClick} />
          </div>
          <div className='my-6'>
            <p className='mb-2'>Change amount :</p>
            <div className='amount'>
              <i className="minus fa-solid fa-minus"></i>
              <input type='text' value={1} readOnly></input>
              <i className="plus fa-solid fa-plus"></i>
            </div>
          </div>
          <div className='my-6'>
            <button className='bg-red-600 text-white py-2 px-4 rounded-md w-full'>
              <i className="fa-regular fa-trash-can"></i>
              <span className='ml-2'>Delete product</span>
            </button>
          </div>
        </div>
      </div>
      <div className='popup-overlay top-0 left-0 h-full w-full fixed' onClick={togglePopup}></div>
    </div>
  );
};

export default Editproduct;
