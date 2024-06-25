import React from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { slideImg1, slideImg2, slideImg3, slideImg4, slideImg5, slideImg6 } from '../assets/img/Image';

interface CarouselProps {}

const Carousel: React.FC<CarouselProps> = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    fade: true,
    pauseOnHover: false,
  };

  const settings2: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: false, 
  };

  return (
    <div className='flex justify-center items-center my-5'>
      <Slider className='w-2/5 right-slide' {...settings}>
        <div className='img-slide'>
          <img className='w-full h-full object-cover object-center' src={slideImg1} alt="Slide 1" />
        </div>
        <div className='img-slide'>
            <img className='w-full h-full object-cover object-center' src={slideImg2} alt="Slide 2" />
        </div>
        <div className='img-slide'>
            <img className='w-full h-full object-cover object-center' src={slideImg3} alt="Slide 3" />
        </div>
        <div className='img-slide'>
            <img className='w-full h-full object-cover object-center' src={slideImg4} alt="Slide 4" />
        </div>
        <div className='img-slide'>
            <img className='w-full h-full object-cover object-center' src={slideImg5} alt="Slide 4" />
        </div>
        <div className='img-slide'>
            <img className='w-full h-full object-cover object-center' src={slideImg6} alt="Slide 4" />
        </div>
      </Slider>
      <Slider className='w-2/5 left-slide' {...settings2}>
        <div>
          <h4 className='text-2xl uppercase font-bold'>Luxury & nobility</h4>
          <p className='my-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quaerat, quibusdam labore dicta inventore, omnis veritatis 
            illo dolorem consequatur unde id alias assumenda. Maiores nobis in qui a quidem facere.
          </p>
          <div className='flex text-center'>
            <a className='discover-btn'>Discover !</a>
          </div>
        </div>
        <div>
            <h4 className='text-2xl uppercase font-bold'>Independence & innovation</h4>
            <p className='my-8'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis vitae incidunt rem fugiat ipsam doloremque tempora ratione eos recusandae 
                libero voluptas, molestias sit corporis qui distinctio aperiam eum sed est.
            </p>
            <div className='flex text-center'>
                <a className='discover-btn'>Discover !</a>
            </div>
        </div>
        <div>
            <h4 className='text-2xl uppercase font-bold'>Youthful & dynamic</h4>
            <p className='my-8'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias laborum recusandae quas. Obcaecati tempore perspiciatis voluptatum, 
                quia illum maiores laboriosam nemo veniam exercitationem porro quos doloribus sunt numquam atque ab.
            </p>
            <div className='flex text-center'>
                <a className='discover-btn'>Discover !</a>
            </div>
        </div>
        <div>
            <h4 className='text-2xl uppercase font-bold'>Happy & engaging</h4>
            <p className='my-8'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil sequi temporibus voluptate. Deleniti ea velit dolor recusandae atque eius 
                laborum tempora, rem explicabo omnis deserunt, accusantium at. Nostrum, itaque quas!
            </p>
            <div className='flex text-center'>
                <a className='discover-btn'>Discover !</a>
            </div>
        </div>
        <div>
            <h4 className='text-2xl uppercase font-bold'>Lovely charm</h4>
            <p className='my-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quos natus quibusdam molestias corporis officia delectus molestiae aperiam, 
                odit ratione voluptates illum quia asperiores ab corrupti minima dolorum. Maxime, ad!
            </p>
            <div className='flex text-center'>
                <a className='discover-btn'>Discover !</a>
            </div>
        </div>
        <div>
            <h4 className='text-2xl uppercase font-bold'>Attractive simplicity</h4>
            <p className='my-8'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem molestiae voluptate rem sint sequi repellat, 
                et saepe qui harum, recusandae dolore excepturi voluptatibus magni fugit esse beatae impedit temporibus perferendis?
            </p>
            <div className='flex text-center'>
                <a className='discover-btn'>Discover !</a>
            </div>
        </div>
      </Slider>
      
    </div>
  );
};

export default Carousel;
