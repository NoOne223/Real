import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image1 } from '../images/Image';
import Lang from './Lang';

const Content1: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='container relative content1-mb'>
      <Lang />
      <h1 className='text-white text-7xl font-bold uppercase text-center' data-aos="fade-down">
        {t('content1.title')}
      </h1>
      <div className='flex flex-wrap justify-around items-end my-24'>
        <img className='w-1/4 h-fit' src={Image1} data-aos="fade-up" alt="Profile" />
        <div className='w-2/5 px-5 rounded-lg text-white' data-aos="fade-left">
          <h4 className='text-center uppercase text-3xl'>
            {t('content1.personal_form.title')}
          </h4>
          <ul className='m-auto'>
            <li className='my-10'>
              <strong className='text-xl text-purple-400'>
                {t('content1.personal_form.option_1.title')}
              </strong> 
              <span>{t('content1.personal_form.option_1.value')}</span>
            </li>
            <li className='my-10'>
              <strong className='text-xl text-purple-400'>
                {t('content1.personal_form.option_2.title')}
              </strong> 
              <span>{t('content1.personal_form.option_2.value')}</span>
            </li>
            <li className='my-10'>
              <strong className='text-xl text-purple-400'>
                {t('content1.personal_form.option_3.title')}
              </strong> 
              <span>{t('content1.personal_form.option_3.value')}</span>
            </li>
            <li className='my-10'>
              <strong className='text-xl text-purple-400'>
                {t('content1.personal_form.option_4.title')}
              </strong> 
              <span>{t('content1.personal_form.option_4.value')}</span>
            </li>
            <li className='my-10'>
              <strong className='text-xl text-purple-400'>
                {t('content1.personal_form.option_5.title')}
              </strong> 
              <span>{t('content1.personal_form.option_5.value')}</span>
            </li>
            <li className='my-10'>
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
