import React from 'react'
import { Image6 } from '../images/Image'
import { useTranslation } from 'react-i18next';

const Content3: React.FC = () => {
const { t } = useTranslation();

  return (
    <div className='container mt-24 content3-mb'>
        <div className='my-24'>
            <h4 className='text-3xl' data-aos="fade-right">{t('content3.title')}</h4>
            <div className='flex items-end gap-x-5'>
                <div className='w-3/4 flex flex-wrap gap-x-3'>
                    <fieldset className='border-solid border-2 border-purple-500 p-5 w-2/5 flex-auto' data-aos="fade-up" data-aos-delay="100">
                        <legend className='text-xl text-purple-500'>
                            HTML
                        </legend>
                        <p>
                        {t('content3.desc_1')}
                        </p>
                    </fieldset>
                    <fieldset className='border-solid border-2 border-purple-500 p-5 w-2/5 flex-auto' data-aos="fade-up" data-aos-delay="200">
                        <legend className='text-xl text-purple-500'>
                            CSS
                        </legend>
                        <p>
                        {t('content3.desc_2')}
                        </p>
                    </fieldset>
                    <fieldset className='border-solid border-2 border-purple-500 p-5 w-2/5 flex-auto' data-aos="fade-up" data-aos-delay="300">
                        <legend className='text-xl text-purple-500'>
                            Jquery
                        </legend>
                        <p>
                        {t('content3.desc_3')}
                        </p>
                    </fieldset>
                    <fieldset className='border-solid border-2 border-purple-500 p-5 w-2/5 flex-auto' data-aos="fade-up" data-aos-delay="400">
                        <legend className='text-xl text-purple-500'>
                            React
                        </legend>
                        <p>
                        {t('content3.desc_4')}
                        </p>
                    </fieldset>
                    <fieldset className='border-solid border-2 border-purple-500 p-5 w-2/5 flex-auto' data-aos="fade-up" data-aos-delay="500">
                        <legend className='text-xl text-purple-500'>
                            Git
                        </legend>
                        <p>
                        {t('content3.desc_5')}
                        </p>
                    </fieldset>
                    <fieldset className='border-solid border-2 border-purple-500 p-5 w-2/5 flex-auto' data-aos="fade-up" data-aos-delay="600">
                        <legend className='text-xl text-purple-500'>
                            Figma
                        </legend>
                        <p>
                        {t('content3.desc_6')}
                        </p>
                    </fieldset>
                </div>
                <div className='w-1/4' data-aos="fade-up">
                    <img className='' src={Image6}></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content3