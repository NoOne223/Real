import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
    const { t } = useTranslation();
  return (
    <div>
        <div className='fixed top-1/2 right-0 lg:block sm:hidden' data-aos="fade-left" data-aos-delay="300">
            <div className='contact-item flex flex-col'>
                <a className='contact-link bg-purple-500 text-white' href='#' target='_blank'>
                    <span className='contact-text bg-purple-500 z-behind'>Facebook</span>
                    <i className="fa-brands fa-facebook text-xl"></i>
                </a>
                <a className='contact-link bg-purple-500 text-white' href='#' target='_blank'>
                    <span className='contact-text bg-purple-500 z-behind'>Instagram</span>
                    <i className="fa-brands fa-instagram text-xl"></i>
                </a>
                <a className='contact-link bg-purple-500 text-white' href='#' target='_blank'>
                    <span className='contact-text bg-purple-500 z-behind'>Linkedin</span>
                    <i className="fa-brands fa-linkedin text-xl"></i>
                </a>
                <a className='contact-link bg-purple-500 text-white' href='#' target='_blank'>
                    <span className='contact-text bg-purple-500 z-behind'>Github</span>
                    <i className="fa-brands fa-github text-xl"></i>
                </a>
                <a className='contact-link bg-purple-500 text-white' href='mailto: namle392001@gmail.com'>
                    <span className='contact-text bg-purple-500 z-behind'>Email</span>
                    <i className="fa-regular fa-envelope text-xl"></i>
                </a>
                <p className='contact-link bg-purple-500 text-white'>
                    <span className='contact-text bg-purple-500 z-behind'>0982582754</span>
                    <i className="fa-solid fa-phone-flip text-xl"></i>
                </p>
            </div>
        </div>
        <div className='lg:hidden'>
            <h4 className='text-center uppercase text-3xl'>
            {t('contact.title')}
            </h4>
            <div className='flex flex-wrap gap-y-4'>
                <a href='#' className='w-1/3 flex-auto text-white px-3 text-center' target='_blank'>
                    <i className="fa-brands fa-facebook text-xl"></i>
                    <p>Facebook</p>
                </a>
                <a href='#' className='w-1/3 flex-auto text-white px-3 text-center' target='_blank'>
                    <i className="fa-brands fa-instagram text-xl"></i>
                    <p>Instagram</p>
                </a>
                <a href='#' className='w-1/3 flex-auto text-white px-3 text-center' target='_blank'>
                    <i className="fa-brands fa-linkedin text-xl"></i>
                    <p>Linkedin</p>
                </a>
                <a href='#' className='w-1/3 flex-auto text-white px-3 text-center' target='_blank'>
                    <i className="fa-brands fa-github text-xl"></i>
                    <p>Github</p>
                </a>
                <a href='mailto: namle392001@gmail.com' className='w-1/3 flex-auto text-white px-3 text-center' target='_blank'>
                <i className="fa-regular fa-envelope text-xl"></i>
                    <p>Email</p>
                </a>
                <a className='w-1/3 flex-auto text-white px-3 text-center'>
                    <i className="fa-solid fa-phone-flip text-xl"></i>
                    <p>0982582754</p>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Contact
