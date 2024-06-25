// UserHeader.tsx
import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { Monster } from '../../assets/img/Image';
import { Link } from 'react-router-dom';

interface UserHeaderProps {
  user?: {
    name: string;
    avatar: string;
  };
}

const UserHeader: React.FC<UserHeaderProps> = () => {
  const { user } = useContext(UserContext);

  return (
    <div className='pc-hd bg-black p-5 text-white flex justify-between items-center'>
      <div className='w-fit text-center'>
        <h1 className='font-pata text-4xl'>Fashion<br />Selections</h1>
      </div>
      <div>
        <ul className='flex gap-x-20'>
          <li className='shop-option'>
            <a>
              <i className="fa-solid fa-house"></i>
              <span className='uppercase font-bold pl-1'>Home</span>
            </a>
          </li>
          <li className='shop-option'>
            <Link to="/product">
              <i className="fa-solid fa-shirt"></i>
              <span className='uppercase font-bold pl-1'>Products</span>
            </Link>
          </li>
          <li className='shop-option'>
            <a>
              <i className="fa-solid fa-hand-holding-dollar"></i>
              <span className='uppercase font-bold pl-1'>On sale</span>
            </a>
          </li>
          <li className='shop-option relative'>
            <a>
              <i className="fa-solid fa-cart-shopping"></i>
              <span className='uppercase font-bold pl-1'>Shopping Cart</span>
              <span className='shopping-dot'>1</span>
            </a>
          </li>
        </ul>
      </div>
      <div className='user-info w-24 text-center'>
        <div className='rounded-img'>
          <img src={user?.avatar || Monster} alt='User Avatar' />
        </div>
        <span>{user?.name || 'Name'}</span>
      </div>
    </div>
  );
};

export default UserHeader;
