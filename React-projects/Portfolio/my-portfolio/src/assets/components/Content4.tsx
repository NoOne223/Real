import React from 'react'
import { Image7, planet } from '../images/Image'
import { useTranslation } from 'react-i18next';

const Content4: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className='container mt-24 content4-mb relative z-0'>
      <div className='my-24'>
        <h4 className='text-3xl' data-aos="fade-right">{t('content4.title_1')}</h4>
        <div className='flex flex-wrap gap-4' data-aos="fade-right" data-aos-delay="500">
            <a href='#' className='project w-1/4 min-h-80 flex flex-col items-center p-5 text-white'>
                <img className='w-1/2' src={planet}></img>
                <h6 className='text-xl'>{t('content4.react.project_1.title')}</h6>
                <p className='text-center'>
                {t('content4.react.project_1.desc')}
                </p>
            </a>
            <div className='no-project w-1/4 min-h-80 flex flex-col items-center justify-center p-5'>
                <p>
                {t('content4.blank_project')}
                </p>
            </div>
        </div>
      </div>
      <div className='my-24'>
        <h4 className='text-3xl' data-aos="fade-right">{t('content4.title_2')}</h4>
        <div className='flex flex-wrap gap-4' data-aos="fade-right" data-aos-delay="500">
            <a href='#' className='project w-1/4 min-h-80 flex flex-col items-center p-5 text-white'>
                <img className='w-1/2' src={planet}></img>
                <h6 className='text-xl'>{t('content4.html.project_1.title')}</h6>
                <p className='text-center'>
                {t('content4.html.project_1.desc')}
                </p>
            </a>
            <div className='no-project w-1/4 min-h-80 flex flex-col items-center justify-center p-5'>
                <p>
                {t('content4.blank_project')}
                </p>
            </div>
        </div>
      </div>
      <img className='w-1/4 absolute z-behind right-0 top-1/3' src={Image7} data-aos="fade-up"></img>
    </div>
  )
}

export default Content4
