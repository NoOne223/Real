import React from 'react'

const Userft = () => {
  return (
    <div>
        <div className='bg-black text-gray-500'>
            <div className='container'>
                <div className='flex justify-between py-8'>
                    <div>
                        <div>
                            <h4 className='text-2xl font-pata'>Our Social</h4>
                            <ul className='list-none flex gap-x-4 text-xl mt-3'>
                                <li>
                                    <a href='' target='blank'>
                                        <i className="fa-brands fa-square-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href='' target='blank'>
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href='' target='blank'>
                                        <i className="fa-brands fa-x-twitter"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-y-2 mt-10'>
                            <h4 className='text-2xl font-pata'>Let your comment here :</h4>
                            <textarea className='rounded-md p-2 mt-2 font-semibold' rows={5} cols={50}></textarea>
                            <button className='bg-gray-500 text-white w-40 rounded-2xl py-2'>Save</button>
                        </div>
                    </div>
                    <div className='w-2/5'>
                        <div>
                            <h4 className='text-2xl font-pata'>Contact us :</h4>
                            <ul className='list-none text-xl mt-3'>
                                <li>
                                    <a className='flex items-center gap-x-2' href='' target='blank'>
                                        <i className="fa-solid fa-route"></i>
                                        <p>787/1, Truong Chinh, Tay Thanh, Tan Phu</p>
                                    </a>
                                </li>
                                <li className='flex items-center gap-x-2'>
                                    <i className="fa-solid fa-phone"></i>
                                    <p>0982582754</p>
                                </li>
                            </ul>
                        </div>
                        <div className='mt-10'>
                            <h4 className='text-2xl font-pata'>Acknowledgments</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, illo cum quis dolorem sint at dolor facilis consectetur 
                                error nisi eaque autem velit cupiditate provident, cumque dignissimos laboriosam? Consequatur, deleniti!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gray-800 text-white'>
                <div className='container'>
                    <div className='text-center py-3'>
                        <p>Copyright <a className='text-gray-400' href=''>NamHoang</a> - 2024</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Userft