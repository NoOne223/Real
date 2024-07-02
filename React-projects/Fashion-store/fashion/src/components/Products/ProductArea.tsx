import React, { useState } from 'react';
import { Blank_img } from '../../assets/img/Image';
import ProductColor from '../ProductColor';
import ProductSize from '../ProductSize';

interface ProductAreaProps {
  productName: string;
  status?: string;
}

const ProductArea: React.FC<ProductAreaProps> = ({ productName, status }) => {
  const [selectedColor, setSelectedColor] = useState('red');
  const [selectedSize, setSelectedSize] = useState('S');
  const [cart, setCart] = useState<any[]>([]);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const addToCart = () => {
    const item = {
      productName,
      selectedColor,
      price: getProductPrice(productName),
    };
    setCart([...cart, item]);
  };

  const getProductPrice = (productName: string): string => {
    switch (productName) {
      case 'Access 1':
        return '1,00$';
      case 'Access 2':
        return '2,00$';
      case 'Access 3':
        return '3,00$';
      default:
        return '4,00$';
    }
  };

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <div className='product-area'>
      <div>
        <img id='red' className={`product-image border-2 border-solid border-red-500 ${selectedColor === 'red' ? '' : 'hidden'}`} src={Blank_img} alt="Red Product" />
        <img id='yellow' className={`product-image border-2 border-solid border-yellow-400 ${selectedColor === 'yellow' ? '' : 'hidden'}`} src={Blank_img} alt="Yellow Product" />
        <img id='pink' className={`product-image border-2 border-solid border-pink-400 ${selectedColor === 'pink' ? '' : 'hidden'}`} src={Blank_img} alt="Pink Product" />
        <img id='brown' className={`product-image border-2 border-solid border-amber-900 ${selectedColor === 'brown' ? '' : 'hidden'}`} src={Blank_img} alt="Brown Product" />
      </div>
      <div className='p-4 flex flex-col gap-y-4'>
        <div className='h-14 text-center relative'>
          <h4 className='text-2xl uppercase font-bold'>{productName}</h4>
        </div>
        <ProductColor selectedColor={selectedColor} handleColorChange={handleColorChange} />
        <ProductSize selectedSize={selectedSize} handleSizeClick={handleSizeClick} />
        <p className='price'>Price : 
          <span>{getProductPrice(productName)}</span>
        </p>
        <div className='amount'>
          <i className="minus fa-solid fa-minus"></i>
          <input type='text' value={1} readOnly></input>
          <i className="plus fa-solid fa-plus"></i>
        </div>
        <div>
          <button className='add-btn' onClick={addToCart}>
            Add to cart
          </button>
        </div>
        {status === 'New' && <p className='uppercase new absolute'>( New <i className="fa-regular fa-gem"></i> )</p>}
        {status === 'Onsale' && <div className='price-tag'>Sale %</div>}
        {status === 'Outsale' && <div className='out-sold'></div>}
      </div>
    </div>
  );
};

export default ProductArea;
