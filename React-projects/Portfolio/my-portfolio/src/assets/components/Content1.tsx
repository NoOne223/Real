import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image1 } from '../images/Image';
import Lang from './Lang';

const Content1: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='container relative'>
      <Lang />

      <h1 
      className='text-white lg:text-7xl font-bold uppercase text-center
      sm:text-4xl' 
      data-aos="fade-down">
        {t('content1.title')}
      </h1>

      <div className='flex flex-wrap justify-around items-end lg:my-24 lg:flex-row sm:flex-col-reverse sm:my-0'>
        <img className='lg:w-1/4 h-fit sm:w-full' src={Image1} data-aos="fade-up" alt="Profile" />
        <div className='lg:w-2/5 px-5 rounded-lg text-white sm:w-full' data-aos="fade-left">
          <h4 className='text-center uppercase text-3xl'>
            {t('content1.personal_form.title')}
          </h4>
          <ul className='m-auto'>
            <li className='lg:my-10 sm:my-5'>
              <strong className='text-xl text-purple-400'>
                {t('content1.personal_form.option_1.title')}
              </strong> 
              <span>{t('content1.personal_form.option_1.value')}</span>
            </li>
            <li className='lg:my-10 sm:my-5'>
              <strong className='text-xl text-purple-400'>
                {t('content1.personal_form.option_2.title')}
              </strong> 
              <span>{t('content1.personal_form.option_2.value')}</span>
            </li>
            <li className='lg:my-10 sm:my-5'>
              <strong className='text-xl text-purple-400'>
                {t('content1.personal_form.option_3.title')}
              </strong> 
              <span>{t('content1.personal_form.option_3.value')}</span>
            </li>
            <li className='lg:my-10 sm:my-5'>
              <strong className='text-xl text-purple-400'>
                {t('content1.personal_form.option_4.title')}
              </strong> 
              <span>{t('content1.personal_form.option_4.value')}</span>
            </li>
            <li className='lg:my-10 sm:my-5'>
              <strong className='text-xl text-purple-400'>
                {t('content1.personal_form.option_5.title')}
              </strong> 
              <span>{t('content1.personal_form.option_5.value')}</span>
            </li>
            <li className='lg:my-10 sm:my-5'>
              <strong className='text-xl text-purple-400'>
                {t('content1.personal_form.option_6.title')}
              </strong>
              <p>
                {t('content1.personal_form.option_6.value_1')}<br />
                {t('content1.personal_form.option_6.value_2')}<br />
                {t('content1.personal_form.option_6.value_3')}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Content1;
