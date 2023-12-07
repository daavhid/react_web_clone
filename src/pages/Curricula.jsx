import React from 'react'
import { MdChevronRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import software1 from '../assets/images/sorftware1.webp'
import software2 from '../assets/images/software2.webp'
import { VscTriangleRight } from 'react-icons/vsc'

const Curricula = () => {
  return (
    <>
        <div className='courseImg h-[330px] '></div>
        <div className='w-[85%] md:w-[80%] mx-auto mb-16'>
            <p className='py-4 my-4 text-2xl flex items-center'><a className='text-red font-semibold'>SEI</a><MdChevronRight className='mx-3 font-light text-xs align-middle'/><Link to={'..'} className='  font-semibold text-red hover:underline'>Education and Outreach</Link><MdChevronRight className='mx-3 font-light text-xs align-middle'/><span className='text-gray-500 font-light'>Curricula</span></p>
            <div className=''>
                <h1 className='text-3xl text-gray-700 font-semibold'>Curricula and Educational Materials</h1>
                <p className='my-6 text-gray-500'>The SEI has collaborated with professional organizations, industry partners, and institutions of higher learning to develop curricula and educational materials.</p>
                <p className=' text-gray-500'>These curricula include resources for undergraduate and graduate programs as well as materials for educators.</p>
            </div>
        </div>
        <div className='bg-gray-100 py-16'>
            <div className=' w-[85%] md:w-[90%] mx-auto'>
                <h1 className='text-4xl text-gray-700 my-8'>Free to Use</h1>
                <p className='text-gray-700 my-6'>These curricula and educational materials are free for use by</p>
                <ul className='w-[95%] mx-auto list-item mb-10'>
                    <li className='list-disc text-gray-700 '>educational institutions that incorporate these materials into their degree programs</li>
                    <li className='list-disc text-gray-700'>commercial and government institutions that incorporate these materials into their employee training programs</li>
                </ul>
                <div className='grid md:grid-cols-4 md:gap-16'>
                    <div className=''>
                        <div className='relative z-20 xs:w-[70%] md:w-full w-full'>
                            <img src={software1} alt="" className='md:w-[400px] w-full ' />
                            <div className='text-white top-0 absolute h-full w-full bg-gradient-black flex items-end hover:text-red hover:bg-gradient-black2'>
                                <p className=' py-8 px-4 text-sm font-semibold'>Software Engineering Curriculum</p>
                            </div>
                        </div>
                        <div className='font-semibold'>
                            <p className='mb-6 '>There are more than 100 accredited software engineering schools in the U.S. and about 1.5 million people work in software-development-related fields. Nearly all university software engineering-related curricula trace their lineage to SEI-led efforts.</p>
                            <a className='text-xl text-gray-700 cursor-pointer hover:text-red'> <span className='align-middle'>SEE CURRICULUM</span><VscTriangleRight className='inline-block align-middle'/></a>
                        </div>
                    </div>
                    <div className=''>
                        <div className='relative z-20xs:w-[70%] md:w-full w-full '>
                            <img src={software1} alt="" className='md:w-[400px] w-full ' />
                            <div className='text-white top-0 absolute h-full w-full bg-gradient-black flex items-end hover:text-red hover:bg-gradient-black2'>
                                <p className=' py-8 px-4 text-sm font-semibold'>Software Assurance Curricula</p>
                            </div>
                        </div>
                        <div className='font-semibold'>
                           <p className='mb-6 '>Software assurance education helps to meet the growing demand for professionals who can build secure software and systems with the needed functionality.</p>
                            <a className='text-xl text-gray-700  cursor-pointer hover:text-red'> <span className='align-middle'>SEE CURRICULUM</span><VscTriangleRight className='inline-block align-middle'/></a>
                        </div>
                    </div>
                    <div className=''>
                        <div className='relative z-20 w-full'>
                            <img src={software2} alt="" className='md:w-[400px] w-full  ' />
                            <div className='text-white top-0 absolute h-full w-full bg-gradient-black flex items-end hover:text-red hover:bg-gradient-black2'>
                                <p className=' py-8 px-4 text-sm font-semibold'>Survivability and Information Assurance Curriculum</p>
                            </div>
                        </div>
                        <div className='font-semibold'>
                           <p className='mb-6 '>This SEI approach to computer and network security doesn't rely on any specific technologies, but on a problem-solving methodology built on key principles.</p>
                            <a className='text-xl text-gray-700  cursor-pointer hover:text-red'> <span className='align-middle'>SEE CURRICULUM</span><VscTriangleRight className='inline-block align-middle'/></a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className='w-[85%] md:w-[80%] mx-auto py-16'>
           <h1 className='text-4xl py-6 text-gray-600 font-medium'>Additional Materials</h1>
           <p className='text-gray-600'>More curricula and course materials for software assurance are available in a collection in the SEI digital library. This collection includes materials for undergraduate and graduate level programs as well as materials for educators. These free materials can be incorporated into existing education programs or be used to develop new courses. The collection also includes other resources that can be helpful in promoting and implementing software assurance curricula.</p>
           <a className='text-xl text-gray-600 font-semibold  cursor-pointer hover:text-red'> <span className='align-middle'>BROWSE THE COLLECTION</span><VscTriangleRight className='inline-block align-middle'/></a>
        </div>
    </>
  )
}

export default Curricula