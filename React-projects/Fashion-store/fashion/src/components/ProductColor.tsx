import React from 'react';

interface ColorPickerProps {
  selectedColor: string;
  handleColorChange: (color: string) => void;
}

const ProductColor: React.FC<ColorPickerProps> = ({ selectedColor, handleColorChange }) => {
  return (
    <div className='tab-color flex gap-x-2'>
      <div className={`color-tab bg-red-500 w-5 h-5 rounded-full ${selectedColor === 'red' ? 'color-selected' : ''}`} onClick={() => handleColorChange('red')}></div>
      <div className={`color-tab bg-yellow-400 w-5 h-5 rounded-full ${selectedColor === 'yellow' ? 'color-selected' : ''}`} onClick={() => handleColorChange('yellow')}></div>
      <div className={`color-tab bg-pink-400 w-5 h-5 rounded-full ${selectedColor === 'pink' ? 'color-selected' : ''}`} onClick={() => handleColorChange('pink')}></div>
      <div className={`color-tab bg-amber-900 w-5 h-5 rounded-full ${selectedColor === 'brown' ? 'color-selected' : ''}`} onClick={() => handleColorChange('brown')}></div>
    </div>
  );
};

export default ProductColor;
