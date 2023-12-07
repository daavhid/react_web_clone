import React from 'react'
import {FaFacebookF,FaTwitter,FaLinkedinIn,FaYoutube,FaPodcast} from 'react-icons/fa'
import {SiApplepodcasts} from 'react-icons/si'

const Footer = () => {
  return (
    <>
        <div className='bg-zinc-500/60'>
            <div className='grid md:grid-cols-3 gap-4 w-[85%] md:w-[80%] md:px-4  mx-auto  text-white py-8 font-semibold'>
                <a href="/">Report a Vulnerability to CERT/CC </a>
                <a href="/">Subscribe to SEI Bulletin</a>
                <a href="/">Request Permission to Use SEI Materials </a>
            </div>
        </div>
        <div className='bgGradient pb-8'>
            <div className='w-[85%] md:w-[80%] md:px-4 mx-auto text-white grid md:grid-cols-3 gap-10 md:py-10 py-4 text-xl items-start'>
                <div>
                    <h1 className=' text-gray-200 w-[53%] md:w-[52%] font-openSans font-medium leading-7'>Carnegie Mellon University
                        Software Engineering Institute
                        4500 Fifth Avenue
                        Pittsburgh, PA 15213-2612
                        412-268-5800
                    </h1>
                </div>
                <div className='flex gap-3 md:gap-4'>
                    <FaFacebookF className='text-white bg-blue-900 text-4xl p-1'/>
                    <FaTwitter className='bg-blue-500 text-white text-4xl p-1 '/>
                    <FaLinkedinIn className=' bg-blue-700  text-white text-4xl p-1 '/>
                    <FaYoutube className=' bg-red  text-white text-4xl p-1 '/>
                    <FaPodcast className=' bg-fuchsia-700  text-white text-4xl p-1 '/>
                </div>
                <button className='border-2  py-8 text-2xl border-white hover:bg-white hover:text-black duration-500 '>
                    Contact Us
                </button>
                
            </div>
            <div className='text-gray-100 text-sm my-  flex gap-2 mx-auto w-[85%] md:w-[80%] md:px-4 items-center flex-wrap '>
                <p>Office locations<span className='font-bold mx-4'>|</span></p>
                <p>Additional Sites Directory<span className='font-bold  mx-4'>|</span></p>
                <p>Legal<span className='font-bold  mx-4'>|</span></p>
                <p>Privacy Notice<span className='font-bold  mx-4'>|</span></p>
                <p>CMU Ethics Hotline<span className='font-bold  mx-4'>|</span></p>
                <p>www.sei.cmu.edu</p>
            </div>
            <div className='text-gray-200 text-sm font-medium mx-auto w-[85%] md:w-[90%] md:px-4 mt-8'>
                <p>&copy; 2023 Carnegie Mellon University</p>
            </div>
        </div>
    </>
  )
}

export default Footer