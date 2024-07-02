import React from 'react'

interface SizePickerProps {
    selectedSize: string;
    handleSizeClick: (size: string) => void;
    className?: string;
}

const ProductSize: React.FC<SizePickerProps> = ({ selectedSize, handleSizeClick, className }) => {
  return (
    <div>
        <div className={`size-pick ${className}`}>
          <ul className='list-none border border-solid border-gray-300 rounded flex justify-between'>
            <li className={`cursor-pointer rounded-s size ${selectedSize === 'S' ? 'active' : ''}`} onClick={() => handleSizeClick('S')}>S</li>
            <li className={`cursor-pointer size ${selectedSize === 'M' ? 'active' : ''}`} onClick={() => handleSizeClick('M')}>M</li>
            <li className={`cursor-pointer size ${selectedSize === 'L' ? 'active' : ''}`} onClick={() => handleSizeClick('L')}>L</li>
            <li className={`cursor-pointer size ${selectedSize === 'XL' ? 'active' : ''}`} onClick={() => handleSizeClick('XL')}>XL</li>
            <li className={`cursor-pointer size ${selectedSize === 'XXL' ? 'active' : ''}`} onClick={() => handleSizeClick('XXL')}>XXL</li>
            <li className={`cursor-pointer rounded-e size ${selectedSize === 'XXXL' ? 'active' : ''}`} onClick={() => handleSizeClick('XXXL')}>XXXL</li>
          </ul>
        </div>
    </div>
  )
}

export default ProductSize