import React from 'react'
import { useTranslation, Trans } from 'react-i18next';
import { Image4 } from '../images/Image'


const Content2: React.FC = () => {
  return (
    <div className='container mt-24 content2-mb'>
      <div className='my-24 text-white relative z-0'>
        <div className='flex justify-center items-center' data-aos="fade-right">
          <div className='border-r-4 border-solid pr-3 w-fit'>
            <h1 className='text-7xl font-bold uppercase text-end leading-tight'>
            <Trans i18nKey="content2.title" components={{ 
                black: <span className="text-black" />, 
                purple: <strong className="text-purple-400" />,
                br: <br />
            }}/>
            </h1>
          </div>
          <div className='pl-3 w-1/2 leading-10'>
            <h4 className='text-3xl'>
              <Trans i18nKey="content2.sub_title" components={{  
                purple: <strong className="text-purple-400" />,
                br: <br />
              }}/></h4>
            <p className='max-w-xl'>
              <Trans i18nKey="content2.desc_1" components={{  
                purple: <strong className="text-purple-400 text-xl" />,
              }}/> 
            </p>
            <p className='max-w-xl'>
              <Trans i18nKey="content2.desc_2" components={{  
                purple: <strong className="text-purple-400 text-xl" />,
              }}/> 
            </p>
            <p className='max-w-xl'>
              <Trans i18nKey="content2.desc_3" components={{  
                purple: <strong className="text-purple-400 text-xl" />,
              }}/> 
            </p>
          </div>
        </div>
        <img className='rocket w-1/4 h-fit absolute -bottom-20 right-0 z-behind' src={Image4} data-aos="fade-up"></img>
      </div>
    </div>
  )
}

export default Content2
