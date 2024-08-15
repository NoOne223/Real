import React from 'react'
import { Image6 } from '../images/Image'

const Content3 = () => {
  return (
    <div className='container mt-24 content3-mb'>
        <div className='my-24'>
            <h4 className='text-3xl'>Skills that I have</h4>
            <div className='flex items-end gap-x-5'>
                <div className='w-3/4 flex flex-wrap gap-x-3'>
                    <fieldset className='border-solid border-2 border-purple-500 p-5 w-2/5 flex-auto'>
                        <legend className='text-xl text-purple-500'>
                            HTML
                        </legend>
                        <p>
                            I have proficient skills in HTML, allowing me to create well-structured and semantically correct web pages. I can effectively 
                            use HTML elements to build responsive layouts, ensuring accessibility and compatibility across different devices and browsers.
                        </p>
                    </fieldset>
                    <fieldset className='border-solid border-2 border-purple-500 p-5 w-2/5 flex-auto'>
                        <legend className='text-xl text-purple-500'>
                            CSS
                        </legend>
                        <p>
                        I am comfortable using basic CSS properties such as styling text, backgrounds, and simple layouts. However, I have 
                        not yet explored more advanced features like CSS Grid, Flexbox, or complex animations.
                        </p>
                    </fieldset>
                    <fieldset className='border-solid border-2 border-purple-500 p-5 w-2/5 flex-auto'>
                        <legend className='text-xl text-purple-500'>
                            Jquery
                        </legend>
                        <p>
                            I can work with jQuery for basic tasks like selecting elements, handling events, and manipulating the DOM. 
                            However, I'm still learning how to use more advanced features and techniques in jQuery.
                        </p>
                    </fieldset>
                    <fieldset className='border-solid border-2 border-purple-500 p-5 w-2/5 flex-auto'>
                        <legend className='text-xl text-purple-500'>
                            React
                        </legend>
                        <p>
                        Although I'm relatively new to React, I've managed to create a basic template using React. 
                        I'm continuously learning and improving my skills to build more complex React applications in the future.
                        </p>
                    </fieldset>
                    <fieldset className='border-solid border-2 border-purple-500 p-5 w-2/5 flex-auto'>
                        <legend className='text-xl text-purple-500'>
                            Git
                        </legend>
                        <p>
                            I am proficient in using Git commands in both GitLab and GitHub. I can effectively manage repositories, branches, 
                            and commits, as well as collaborate with other developers using pull requests, merge requests, and version control best practices. 
                            My experience includes handling tasks such as cloning repositories, pushing and pulling changes, resolving conflicts, and reviewing 
                            code contributions on these platforms.
                        </p>
                    </fieldset>
                    <fieldset className='border-solid border-2 border-purple-500 p-5 w-2/5 flex-auto'>
                        <legend className='text-xl text-purple-500'>
                            Figma
                        </legend>
                        <p>
                            I am proficient in extracting images and their attributes from Figma with precision. I can effectively cut 
                            out images, export assets, and gather design specifications, ensuring that all elements are optimized and ready for web or mobile development.
                        </p>
                    </fieldset>
                </div>
                <div className='w-1/4'>
                    <img className='' src={Image6}></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content3