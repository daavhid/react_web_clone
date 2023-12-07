import React from 'react'
import {MdClose, MdMenu, MdMenuBook, MdMenuOpen, MdOutlineMenuBook, MdRestaurantMenu, MdSearch} from 'react-icons/md'
import { Link } from 'react-router-dom'
import Courses from '../pages/Courses'
import { useState } from 'react'

const Header = () => {
    const [toggle,setIstoggle] = useState(false)
    console.log(toggle)
  return (
        <>
            <div className=' bg-red'>
                <nav className=' w-[85%] md:w-[80%] mx-auto text-white py-2 md:py-0 relative'>
                    <div className='flex flex-col justify-between md:items-center md:flex-row'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-3xl'>Carnegie Mellon University</h1>
                           <MdMenu onClick={()=>setIstoggle(prev=>!prev)} className='text-5xl md:hidden' />
                        </div>
                        <div className='bg-black/20 flex items-center basis-[40%] mt-2 md:mt-0 '>
                            <input type="text" placeholder='Enter Keywords' className='grow w-full bg-transparent   placeholder:text-white placeholder:text-xl outline-none focus:bg-black/50 py-3 px-2 ' />
                            <MdSearch className='text-3xl font-bold  w-[10%]'/>
                        </div>
                        
                    </div>
                    <ul className={`${!toggle?' translate-x-[800%] flex flex-col  fixed top-0 right-0   h-[100vh] ':' translate-x-0     fixed right-0 top-0 h-[100vh] flex flex-col'} duration-1000 ease-in-out w-[20rem] bg-gray-800   pb-10 md:hidden `}>
                        <div onClick={()=>{
                            setIstoggle(prev=>!prev)
                        }} className='py-3 flex hover:bg-gray-400 '>
                            <MdClose className='inline-block align-middle text-5xl ml-auto text-gray-300'/>
                        </div>
                        <Link className=' z-10 border-[0.5px] px-10 hover:bg-gray-400 text-xl text-left relative py-2  border-gray-700 font-semibold text-gray-300  show'>About</Link>
                        <Link className=' z-10 border-[0.5px] px-10 hover:bg-gray-400 text-xl text-left relative py-2  border-gray-700 font-semibold text-gray-300  show'>Our Work</Link>
                        <Link className=' z-10 border-[0.5px] px-10 hover:bg-gray-400 text-xl text-left relative py-2  border-gray-700 font-semibold text-gray-300  show'>Publications</Link>
                        <Link className=' z-10 border-[0.5px] px-10 hover:bg-gray-400 text-xl text-left relative py-2  border-gray-700 font-semibold text-gray-300  show'>News and Events</Link>
                        <Link className=' z-10 border-[0.5px] px-10 hover:bg-gray-400 text-xl text-left relative py-2  border-gray-700 font-semibold text-gray-300  show '>Careers</Link>
                    </ul>
                    
                    
                </nav>
                <div className='bg-white text-gray-700 py-4 pb-4'>
                    <h1 className='text-6xl hover:text-red w-[85%] md:w-[90%] mx-auto cursor-point'>Software Engineering Institute</h1>
                </div>
            </div>
        
            <ul className='md:flex hidden  w-[85%] md:w-[80%] mx-auto my-2'>
                    <Link className='grow inline-block z-10 border-[0.5px] relative  border-gray-300 font-semibold text-gray-700 text-center py-1 show hover:text-red'>About
                        <div className='w-[170%] font-normal leading-8 top-full border-gray-300 border -z-1 text-left  bg-white py-1 hidden absolute'>
                            <Link  className='text-gray-700 hover:text-red font-semibold px-6'>Leadership</Link> 
                            <Link className='text-gray-700 hover:text-red font-semibold px-6'>Divisions</Link> 
                            <Link className='text-gray-700 hover:text-red font-semibold px-6'>Collaboration with cmu</Link>
                            <Link className='text-gray-700 hover:text-red font-semibold px-6'>Work with us</Link>
                            <Link className='text-gray-700 hover:text-red font-semibold px-6'>History of inovations at the SEI</Link>
                        </div>            
                    </Link>
                    
                    <Link className='grow border-[0.5px] z-10  hover:text-red border-l-0 border-gray-300 font-semibold text-gray-700 text-center py-1 show relative'>Our work
                        <div className='min-w-[180%] font-normal leading-8 top-full border-gray-300 border -z-1 text-left bg-white py-3 hidden absolute'>
                            <Link className='text-gray-700 hover:text-red font-semibold px-6'>Agile</Link> 
                            <Link className='text-gray-700 hover:text-red font-semibold px-6'>Artificial Intelligence Engineering</Link> 
                            <Link className='text-gray-700 hover:text-red font-semibold px-6'>Cloud Computing</Link>
                            <Link className='text-gray-700 hover:text-red font-semibold px-6'>Cyber Workforce Development</Link>
                            <Link className='text-gray-700 hover:text-red font-semibold px-6'>Cybersecurity Center Development</Link>
                            <Link className='text-gray-700 hover:text-red font-semibold px-6'>Cybersecurity Engineering</Link>
                            <Link className='text-gray-700 hover:text-red font-semibold px-6'>DevSecOps</Link>
                            <Link className='text-gray-700 hover:text-red font-semibold px-6'>All Topics</Link>
                            <Link className='text-gray-700 hover:text-red font-semibold px-6'>All Projects</Link>
                        </div> 
                    </Link>
                    <Link className='grow relative block border-[0.5px] border-l-0 border-gray-300 font-semibold text-gray-700 text-center py-1 show hover:text-red z-10'>Publications
                        <div className='min-w-[150%]   font-normal leading-8 top-full border-gray-300 border -z-1 text-left  bg-white py-3 hidden  absolute'>
                            <Link className='text-gray-700 hover:text-red font-semibold px-6'>Annual Reviews</Link> 
                            <Link className='text-gray-700 hover:text-red font-semibold px-6'>Blog</Link> 
                            <Link className='text-gray-700 hover:text-red font-semibold px-6'>Digital Library</Link>
                            <Link className='text-gray-700 hover:text-red font-semibold px-6'>Podcast Series</Link>
                            <Link className='text-gray-700 hover:text-red font-semibold px-6'>Software and Tools</Link>
                            <Link className='text-gray-700 hover:text-red font-semibold px-6'>Technical Papers</Link>
                            <Link className='text-gray-700 hover:text-red font-semibold px-6'>Vulnerability Notes Database</Link>
                            <Link className='text-gray-700 hover:text-red font-semibold px-6'>Webcast Series</Link>
                        </div> 
                    </Link>
                    <Link className='grow relative w- hover:text-red z-10 show border-[0.5px] border-l-0 border-gray-300 font-semibold  text-gray-700 text-center py-1'>News and Events
                        <div className='min-w-[70%] max-w-[170%] font-normal leading-8 top-full border-gray-300 border -z-1 text-left bg-white py-3 hidden absolute'>
                            <Link className='text-gray-700 hover:text-red font-semibold px-6'>News</Link> 
                            <Link className='text-gray-700 hover:text-red font-semibold px-6'>Events</Link> 
                            <Link className='text-gray-700 hover:text-red font-semibold px-6'>SEI Bulletin</Link>
                        </div>   
                    </Link>
                    <Link className=' grow relative hover:text-red z-10 show border-[0.5px] border-l-0 border-gray-300 font-semibold text-gray-700 text-center py-1 col-span-2' to={'education-outreach'}>Education and Outreach
                        <div className='min-w-fit max-w-[170%] font-normal leading-8 top-full border-gray-300 border -z-1 text-left bg-white py-3 hidden absolute'>
                            <Link to={'education-outreach/courses'} className='text-gray-700 hover:text-red font-semibold px-6'>Courses</Link> 
                            <Link to={'education-outreach/credentials'} className='text-gray-700 hover:text-red font-semibold px-6'>Credentials</Link> 
                            <Link to={'education-outreach/Curricula'} className='text-gray-700 hover:text-red font-semibold px-6'>Curricula</Link>
                            <Link to={'education-outreach/licencing-sei-materials'} className='text-gray-700 hover:text-red font-semibold px-6'>License SEI Materials</Link>
                        </div>  
                    </Link>
                    <Link className='grow relative hover:text-red z-10 show border-[0.5px] border-l-0 border-gray-300 font-semibold text-gray-700 text-center py-1 col-span-2'>Careers
                        <div className='min-w-[170%] right-0  font-normal leading-8 top-full border-gray-300 border -z-1 text-left bg-white py-3 hidden absolute'>
                            <Link className='text-gray-700 hover:text-red font-semibold px-6'>Job Openings</Link> 
                            <Link className='text-gray-700 hover:text-red font-semibold px-6'>Diversity, Equity, and Inclusion</Link> 
                            <Link className='text-gray-700 hover:text-red font-semibold px-6'>Internship Opportunities</Link>
                        </div> 
                    </Link>
            </ul>
            
        </>

  )
}

export default Header

























