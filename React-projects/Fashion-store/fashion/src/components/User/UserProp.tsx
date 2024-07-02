import React from 'react'
import Carousel from '../Carousel';
import { Acess, Cap, Clothing, Jacket, Poster1, Poster2, Poster3, Trouser } from '../../assets/img/Image';
import Userft from './Userft';
import UserHeader from './UserHeader';
import { Link } from 'react-router-dom';
import ScrollTop from '../Scrolltop';

const UserProp = () => {
  return (
    <div>
        <UserHeader />
        <div className='container text-center mb-6'>
            <h1 className='uppercase font-pata text-6xl'>Welcome to our store</h1>
            <p className='italic mt-3'>
              Let's see what we have and find what you need !
            </p>
        </div>
        <div className='container'>
          <Carousel />
        </div>
        <div className='bg-black py-10 mt-24'>
          <div className='text-white text-center'>
            <h1 className='uppercase font-pata text-6xl'>Our products</h1>
            <p>We have a plenty of fashion items with many designs for you to freely choose and mix according to your wishes.</p>
          </div>
          <div className='flex justify-between container'>
            <Link to="/products" className='bg-white p-4 w-1/6 cursor-pointer'>
              <div>
                <div>
                  <img className='h-48 object-cover w-full' src={Clothing}></img>
                </div>
                <h1 className='uppercase font-pata text-center text-xl mt-3'>Clothing</h1>
              </div>
            </Link>
            <Link to="/products" className='bg-white p-4 w-1/6 cursor-pointer'>
              <div>
                <div>
                  <img className='h-48 object-cover' src={Trouser}></img>
                </div>
                <h1 className='uppercase font-pata text-center text-xl mt-3'>Trousers</h1>
              </div>
            </Link>
            <Link to="/products" className='bg-white p-4 w-1/6 cursor-pointer'>
              <div>
                <div>
                  <img className='h-48 object-cover' src={Cap}></img>
                </div>
                <h1 className='uppercase font-pata text-center text-xl mt-3'>Hats</h1>
              </div>
            </Link>
            <Link to="/products" className='bg-white p-4 w-1/6 cursor-pointer'>
              <div>
                <div>
                  <img className='h-48 object-cover' src={Jacket}></img>
                </div>
                <h1 className='uppercase font-pata text-center text-xl mt-3'>Jackets</h1>
              </div>
            </Link>
            <Link to="/products" className='bg-white p-4 w-1/6 cursor-pointer'>
              <div>
                <div>
                  <img className='h-48 object-cover' src={Acess}></img>
                </div>
                <h1 className='uppercase font-pata text-center text-xl mt-3'>Other accessory</h1>
              </div>
            </Link>
          </div>
        </div>
        <div className='container'>
          <div className='text-center'>
            <h1 className='uppercase font-pata text-6xl'>On sale</h1>
          </div>
          <div className='flex mt-16'>
            <div className='w-1/4 flex flex-col gap-y-5'>
              <div className='text-end'>
                <h4 className='uppercase font-bold text-xl'>Sale up to 50%-70%</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore rerum quam repellendus ex itaque adipisci, reprehenderit illo minima, 
                  veritatis voluptate culpa impedit nesciunt animi repellat deleniti quos recusandae earum ad.
                </p>
              </div>
              <div className='text-end'>
                <h4 className='uppercase font-bold text-xl'>Sale on many items</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed maiores unde ut placeat quod a consectetur officiis harum 
                  at delectus mollitia, culpa voluptatum vitae voluptate, ex excepturi explicabo animi officia.
                </p>
              </div>
            </div>
            <div className='w-1/2'>
              <img src={Poster1}></img>
              {/* <div className='text-center bg-black text-white w-80 m-auto py-2'>
                <a href=''>See sale up here!</a>
              </div> */}
            </div>
            <div className='w-1/4'>
              <div>
                <h4 className='uppercase font-bold text-xl'>
                  100% quality goods without defects
                </h4>
                <p className='my-3'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam recusandae architecto doloremque. Asperiores nemo reprehenderit eligendi 
                  doloremque harum enim fuga sit, perferendis obcaecati quasi sapiente atque quos aspernatur excepturi. Eveniet?
                </p>
                <p className='my-3'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse pariatur quos doloremque reiciendis dolorem dolorum error quae 
                  harum architecto praesentium nostrum, voluptatibus temporibus perspiciatis distinctio libero possimus, enim accusantium alias.
                </p>
                <p className='my-3'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas harum eum fugiat aliquam blanditiis error perferendis 
                  dignissimos tempore molestias distinctio est nemo nam non vitae alias odio officiis, ipsum nihil.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='text-center'>
            <h1 className='uppercase font-pata text-6xl'>New arrival</h1>
            {/* <div className='text-center border-2 border-solid border-black w-80 m-auto py-2 mt-4'>
              <a href=''>Look for new arrival here!</a>
            </div> */}
          </div>
        </div>
        <div className='flex mt-16'>
          <div className='bg-green-200'>
            <img src={Poster2}></img>
          </div>
          <div className='bg-red-200'>
            <img src={Poster3}></img>
          </div>
        </div>
        <ScrollTop />
        <Userft />
      </div>
  )
}

export default UserProp
