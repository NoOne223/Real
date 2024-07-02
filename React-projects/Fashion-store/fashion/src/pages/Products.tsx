import React from 'react'
import UserHeader from '../components/User/UserHeader'
import Userft from '../components/User/Userft'
import Tab from '../components/Tab'
import Hat from '../components/Products/Hat'
import Access from '../components/Products/Access'
import Clothing from '../components/Products/Clothing'
import Trouser from '../components/Products/Trouser'
import Jacket from '../components/Products/Jacket'
import ScrollTop from '../components/Scrolltop'

const Products = () => {
  const tabs = [
    { title: 'Clothing', content: <div><Clothing /></div> },
    { title: 'Trouser', content: <div><Trouser /></div> },
    { title: 'Hat', content: <div><Hat /></div> },
    { title: 'Jacket', content: <div><Jacket /></div> },
    { title: 'Accessory', content: <div><Access /></div> },
  ];


  return (
    <div>
        <UserHeader />
        <div className='container'>
          <div className='product-tab'>
           <Tab tabs={tabs} />
          </div>
        </div>
        <ScrollTop />
        <Userft />
    </div>
  )
}

export default Products
