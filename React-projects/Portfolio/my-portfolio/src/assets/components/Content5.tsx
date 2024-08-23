import React from 'react'
import { useTranslation } from 'react-i18next';

const Content5: React.FC = () => {
    const { t } = useTranslation();
  return (
    <div className='container mt-24 content5-mb'>
        <div className='my-24'>
            <div className='flex flex-wrap'>
                <div className='w-1/2 px-3' data-aos="fade-right">
                    <h4 className='text-3xl'>{t('content5.title')}</h4>
                    <p className='text-xl'>
                    {t('content5.desc')}
                    </p>
                </div>
                <div className='flex flex-col w-1/2 px-3' data-aos="fade-left">
                    <textarea rows={5} cols={50} placeholder={t('content5.place_holder')}
                    className='text-black p-2 rounded-xl broder border-black my-5'>
                    </textarea>
                    <button type='submit' className='bg-purple-500 w-1/2 rounded-2xl py-1 px-4 uppercase'>{t('content5.button')}</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content5