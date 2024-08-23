import React from 'react'

const Contact: React.FC = () => {
  return (
    <div className='fixed top-1/2 right-0' data-aos="fade-left" data-aos-delay="300">
        <div className='contact-item flex flex-col'>
            <a className='contact-link bg-purple-500 text-white' href='#' target='blank'>
                <span className='contact-text bg-purple-500 z-behind'>Facebook</span>
                <i className="fa-brands fa-facebook text-xl"></i>
            </a>
            <a className='contact-link bg-purple-500 text-white' href='#' target='blank'>
                <span className='contact-text bg-purple-500 z-behind'>Instagram</span>
                <i className="fa-brands fa-instagram text-xl"></i>
            </a>
            <a className='contact-link bg-purple-500 text-white' href='#' target='blank'>
                <span className='contact-text bg-purple-500 z-behind'>Linkedin</span>
                <i className="fa-brands fa-linkedin text-xl"></i>
            </a>
            <a className='contact-link bg-purple-500 text-white' href='#' target='blank'>
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
  )
}

export default Contact
