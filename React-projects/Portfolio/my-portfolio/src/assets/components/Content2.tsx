import React from 'react'
import { useTranslation, Trans } from 'react-i18next';
import { Image4 } from '../images/Image'


const Content2: React.FC = () => {
  return (
    <div className='container lg:mt-24'>
      <div className='text-white relative z-0 lg:my-24'>
        <div className='flex justify-center items-center lg:flex-row sm:flex-col' data-aos="fade-right">
          <div className='lg:border-r-4 border-solid lg:pr-3 w-fit sm:border-r-0 sm:pr-0'>
            <h1 className='text-7xl font-bold uppercase text-end leading-tight lg:block sm:hidden'>
            <Trans i18nKey="content2.title" components={{ 
                black: <span className="text-black" />, 
                purple: <strong className="text-purple-400" />,
                br: <br />
            }}/>
            </h1>
            <h1 className='text-4xl text-center font-bold uppercase lg:hidden'>
            <Trans i18nKey="content2.title_mobile" components={{ 
                black: <span className="text-black" />, 
                purple: <strong className="text-purple-400" />,
            }}/>
            </h1>
          </div>
          <div className='lg:pl-3 lg:w-1/2 leading-10 sm:w-full'>
            <h4 className='text-3xl lg:text-start sm:text-center'>
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
        <img className='lg:w-1/4 h-fit lg:absolute lg:-bottom-20 lg:right-0 z-behind sm:relative sm:-right-16 sm:w-1/2' src={Image4} data-aos="fade-up"></img>
      </div>
    </div>
  )
}

export default Content2
