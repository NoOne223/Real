// UserHeader.tsx
import React, { useContext, useState } from 'react';
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
  const [showLogInfo, setShowLogInfo] = useState(false);
  const toggleLogInfo = () => {
    setShowLogInfo(!showLogInfo);
  };

  return (
    <div className='pc-hd bg-black p-5 text-white flex justify-between items-center'>
      <div className='w-fit text-center'>
        <h1 className='font-pata text-4xl'>Fashion<br />Selections</h1>
      </div>
      <div>
        <ul className='flex gap-x-20'>
          <Link to="/">
            <li className='shop-option'>
              <i className="fa-solid fa-house"></i>
              <span className='uppercase font-bold pl-1'>Home</span>
            </li>
          </Link>
          <Link to="/products">
            <li className='shop-option'>
              <i className="fa-solid fa-shirt"></i>
              <span className='uppercase font-bold pl-1'>Products</span>
            </li>
          </Link>
          <Link to="/onsale">
            <li className='shop-option'>
              <i className="fa-solid fa-hand-holding-dollar"></i>
              <span className='uppercase font-bold pl-1'>On sale</span>
            </li>
          </Link>
          
          <li className='shop-option relative'>
            <a>
              <i className="fa-solid fa-meteor"></i>
              <span className='uppercase font-bold pl-1'>New Arrival</span>
            </a>
          </li>
          <Link to="/cart">
            <li className='shop-option relative'>
                <i className="fa-solid fa-cart-shopping"></i>
                <span className='uppercase font-bold pl-1'>Shopping Cart</span>
                <span className='shopping-dot'>1</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className='user-info w-24 text-center'>
        <div className='rounded-img' onClick={toggleLogInfo}>
          <img src={user?.avatar || Monster} alt='User Avatar' />
        </div>
        <span>{user?.name || 'Name'}</span>
        <div className={`bg-white text-black p-3 rounded-md absolute w-28 border-4 border-solid border-gray-400 ${showLogInfo ? '' : 'hidden'} log-info`}>
          <ul className='list-none'>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
