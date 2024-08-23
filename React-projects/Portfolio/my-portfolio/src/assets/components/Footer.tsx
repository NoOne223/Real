import React from 'react'
import { Trans} from 'react-i18next'

const Footer = () => {
  return (
    <div className='footer text-center py-4 mt-24'>
        <h6 className='m-0'>
          <Trans i18nKey="footer.desc" components={{  
            blue: <a href='#' className="text-blue-500" />,
          }}/>
        </h6>
    </div>
  )
}

export default Footer