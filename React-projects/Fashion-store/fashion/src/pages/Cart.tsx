import React from 'react'
import UserHeader from '../components/User/UserHeader'
import Userft from '../components/User/Userft'
import ScrollTop from '../components/Scrolltop'
import Tab from '../components/Tab';
import { Blank_img } from '../assets/img/Image';
import Buyproduct from '../components/Purchase/Buyproduct';
import Paidproduct from '../components/Purchase/Paidproduct';

const tabs = [
    { title: 'Wait for payment', 
        content: <div><Buyproduct /></div>
    },
    { title: 'Paid', 
        content: <div><Paidproduct /></div>
    },
];

const Cart = () => {
  return (
    <div>
      <UserHeader />
      <div className='container'>
        <Tab tabs={tabs} />
      </div>
      <ScrollTop />
      <Userft />
    </div>
  )
}

export default Cart
