import React from 'react';
import ProductArea from '../components/Products/ProductArea';
import UserHeader from '../components/User/UserHeader';
import Userft from '../components/User/Userft';

const Onsale: React.FC = () => {
  const products = [
    { productName: 'Product 1', status: 'New' },
    { productName: 'Product 2', status: 'Onsale' },
    { productName: 'Product 3', status: 'Onsale' },
    { productName: 'Product 4', status: 'Outsale' },
  ];
  const onsaleProducts = products.filter(product => product.status === 'Onsale');

  return (
    <div>
        <UserHeader />

        <div className='container'>
            <div id='Onsale' className='mt-10 grid'>
                {onsaleProducts.map((product, index) => (
                <div key={index} className='relative'>
                    <ProductArea productName={product.productName} status={product.status} />
                </div>
                ))}
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
        <Userft />
    </div>
  );
}

export default Onsale;
