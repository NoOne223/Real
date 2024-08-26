import React from 'react'
import { Image7, planet } from '../images/Image'
import { useTranslation } from 'react-i18next';

const Content4: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className='container lg:mt-24 relative z-0'>
      <div className='lg:my-24'>
        <h4 className='text-3xl' data-aos="fade-right">{t('content4.title_1')}</h4>
        <div className='flex flex-wrap gap-4 lg:flex-row sm:flex-col' data-aos="fade-right" data-aos-delay="500">
            <a href='#' className='project lg:w-1/4 min-h-80 flex flex-col items-center p-5 text-white sm:w-full'>
                <img className='w-1/2' src={planet}></img>
                <h6 className='text-xl'>{t('content4.react.project_1.title')}</h6>
                <p className='text-center'>
                {t('content4.react.project_1.desc')}
                </p>
            </a>
            <div className='no-project lg:w-1/4 min-h-80 flex flex-col items-center justify-center p-5 sm:w-full'>
                <p>
                {t('content4.blank_project')}
                </p>
            </div>
        </div>
      </div>
      <div className='my-24'>
        <h4 className='text-3xl' data-aos="fade-right">{t('content4.title_1')}</h4>
        <div className='flex flex-wrap gap-4 lg:flex-row sm:flex-col' data-aos="fade-right" data-aos-delay="500">
            <a href='#' className='project lg:w-1/4 min-h-80 flex flex-col items-center p-5 text-white sm:w-full'>
                <img className='w-1/2' src={planet}></img>
                <h6 className='text-xl'>{t('content4.react.project_1.title')}</h6>
                <p className='text-center'>
                {t('content4.react.project_1.desc')}
                </p>
            </a>
            <div className='no-project lg:w-1/4 min-h-80 flex flex-col items-center justify-center p-5 sm:w-full'>
                <p>
                {t('content4.blank_project')}
                </p>
            </div>
        </div>
      </div>
      <img className='lg:w-1/4 lg:absolute z-behind lg:right-0 lg:top-1/3 sm:relative sm:w-1/2 sm:-right-16' src={Image7} data-aos="fade-up"></img>
    </div>
  )
}

export default Content4
