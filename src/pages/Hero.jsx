import React from 'react'
import courseImg from '../assets/images/courses.webp'
import credentialsImg from '../assets/images/credentials.webp'
import licencingImg from '../assets/images/licencing.webp'
import curriculaImg from '../assets/images/curricula.webp'
import eventsImg from '../assets/images/events.webp'
import libraryImg from '../assets/images/digital_library.webp'
import blogImg from '../assets/images/blog.webp'
import podcastImg from '../assets/images/podcast_series.webp'
import webinarImg from '../assets/images/webinar.webp'
import githubImg from '../assets/images/github.webp'
import { Link } from 'react-router-dom'
import {VscTriangleRight} from 'react-icons/vsc'
import {MdChevronRight} from 'react-icons/md'

const Hero = () => {
  return (
    <>
        <div className='bgImage h-[330px] '></div>
    
        <div className='w-[85%] md:w-[90%] mx-auto mb-16'>
            <p className='py-4 my-4 text-2xl flex items-center'><a className='text-red font-semibold'>SEI</a><MdChevronRight className='mx-3 font-light text-xs align-middle'/><span className='text-gray-500 text-sm font-medium'>Education and Outreach</span></p>
            <div className='flex flex-col md:flex-row gap-16 '>
                <div className='basis-[60%]'>
                    <h2 className='text-2xl leading-loose text-gray-600 font-semibold'>Education and Outreach</h2>
                    <h3 className='text-gray-500 text-2xl' >The SEI takes innovation from concept, through research and development, and into application. Although we are an R&D center, our contribution doesn't end there; we also make things that people working in software and cybersecurity can use—prototypes, tools, methods, curricula, and more.</h3>
                </div>
                <ul className='bg-gray-100 my-8 md:my-0 px-6 text-gray-600 grow'>
                    <Link to={'courses'} className='py-8 flex justify-between text-xl hover:text-red cursor-pointer'><span>Courses</span><span className='font-bold text-xl'>{'>'}</span></Link>
                    <div className='bg-gray-400 h-[1px] '></div>
                    <Link to={'credentials'} className='py-8 flex justify-between text-xl hover:text-red cursor-pointer'><span>Credentials</span><span className='font-bold text-xl'>{'>'}</span></Link>
                    <div className='bg-gray-400 h-[1px] '></div>

                    <Link to={'curricula'} className='py-8 flex justify-between text-xl hover:text-red cursor-pointer'><span>Curricula</span><span className='font-bold text-xl'>{'>'}</span></Link>
                    <div className='bg-gray-400 h-[1px] '></div>

                    <Link to={'licencing-sei-materials'} className='py-8 flex justify-between text-xl hover:text-red cursor-pointer'><span>Licencing SEI Materials</span><span className='font-bold text-xl'>{'>'}</span></Link>
                </ul>
            </div>
        </div>



        <div className='bg-gray-100 py-16'>
            <div className=' w-[85%] md:w-[90%] mx-auto'>
                <h1 className='text-4xl text-gray-700 my-8'>Training is an important part of our technology transfer plan.</h1>
                <p className='text-gray-500 text-[1.1rem]  font-medium my-6'>The SEI offers training to share our technology and research with the broader community, disseminating recent advances relevant to <a href="/" className='text-red-500'>our mission.</a> </p>
                <div className='grid md:grid-cols-4 md:gap-16'>
                    <div className=''>
                        <div className='relative z-20 xs:w-[70%] md:w-full w-full'>
                            <img src={courseImg} alt="" className='md:w-[400px] w-full ' />
                            <div className='text-white top-0 absolute h-full w-full bg-gradient-black flex items-end hover:text-red hover:bg-gradient-black2'>
                                <p className=' py-8 px-4  text-xl font-semibold'>courses</p>
                            </div>
                        </div>
                        <p className='text-gray-700 text-xl mb-6'>Develop your knowledge and skills.</p>
                    </div>
                    <div className=''>
                        <div className='relative z-20 xs:w-[70%] md:w-full w-full '>
                            <img src={credentialsImg} alt="" className='md:w-[400px] w-full ' />
                            <div className='text-white top-0 absolute h-full w-full bg-gradient-black flex items-end hover:text-red hover:bg-gradient-black2'>
                                <p className=' py-8 px-4  text-xl font-semibold'>Credentials</p>
                            </div>
                        </div>
                        <p className='text-gray-500 text-[1.1rem]  font-medium mb-6'>Complete a series of courses to earn an SEI certificate. Complete a training program to become SEI-Authorized to deliver an SEI service. Demonstrate your expertise to become SEI-Certified in a particular technical discipline.</p>
                    </div>
                    <div className=''>
                        <div className='relative z-20 xs:w-[90%] md:w-full w-full'>
                            <img src={licencingImg} alt="" className='md:w-[400px] w-full  ' />
                            <div className='text-white top-0 absolute h-full w-full bg-gradient-black flex items-end hover:text-red hov hover:bg-gradient-black2'>
                                <p className=' py-8 px-4 text-xl font-semibold'>Licencing SEI Materials</p>
                            </div>
                        </div>
                        <p className='text-gray-500 text-[1.1rem]  font-medium'>When SEI training and services become standardized and relevant technologies more widely adopted, we authorize licensees to continue transitioning this knowledge to the community.</p>
                        <div>
                            <a href="/" className=' text-slate-700 text-xl font-semibold my-8 block hover:text-red hov'> <span className='align-middle'>LICENSE SEI MATERIALS</span> <VscTriangleRight className='inline-block align-middle '/></a>
                            <a href="/" className=' text-gray-700 text-xl font-semibold mt-8 block hover:text-red hov'> <span className='align-middle'>WORK WITH A LICENSED SEI PARTNER</span> <VscTriangleRight className='inline-block align-middle'/></a>
                        </div>
                    </div>
                
                </div>
                
            </div>
        </div>


        <div className='w-[85%] md:w-[90%] py-8 mx-auto'>
            <h1 className='text-4xl text-gray-700 my-8'>Outreach through education is our investment in the future.</h1>
            <p className='text-gray-500 text-[1.1rem]  font-medium my-6'>Improving education for software development, software acquisition, and cybersecurity is our investment in the workforce and researchers who will carry our mission forward.</p>
            <div className='grid md:grid-cols-4 gap-16'>

                <div className=''>
                    <div className='relative z-20 xs:w-[70%] md:w-full w-full '>
                        <img src={curriculaImg} alt="" className='md:w-[300px] w-full ' />
                        <div className='text-white top-0 absolute h-full w-full bg-gradient-black flex items-end hover:text-red hover:bg-gradient-black2'>
                            <p className=' py-8 px-4 text-xl font-semibold'>Curricula</p>
                        </div>
                    </div>
                    <p className='text-gray-500 text-[1.1rem]  font-medium mb-6'>The SEI develops complete programs of instruction to help institutions of higher learning educate the workforce of the future.</p>
                </div>
                <div className=''>
                    <div className='relative z-20 xs:w-[70%] md:w-full w-full '>
                        <img src={eventsImg} alt="" className='md:w-[300px] w-full ' />
                        <div className='text-white top-0 absolute h-full w-full bg-gradient-black flex items-end hover:text-red hover:bg-gradient-black2'>
                            <p className=' py-8 px-4 text-xl font-semibold'>Events</p>
                        </div>
                    </div>
                    <p className='text-gray-500 text-[1.1rem]  font-medium mb-6'>The SEI hosts and participates in conferences, workshops, seminars, and other events to strengthen connections with thought leaders, stay current on technical developments, and disseminate its recent advances.</p>
                </div>
            </div>
        </div>

        <div className='bg-gray-100 py-16'>
            <div className=' w-[85%] md:w-[90%] mx-auto'>
                <h1 className='text-4xl text-gray-700 my-8'>We publish often to stay connected with thought leaders and practitioners.</h1>
                <p className='text-gray-500 text-[1.1rem]  font-medium my-6'>The SEI frequently publishes research, reports, and updates to inform, invite discussion, and connect with the community. Download publications such as technical papers, annual reports, software and tools, and curricula. </p>
                <div className='grid md:grid-cols-4 md:gap-16'>
                    <div className=''>
                        <div className='relative z-20 xs:w-[70%] md:w-full w-full'>
                            <img src={libraryImg} alt="" className='md:w-[400px] w-full ' />
                            <div className='text-white top-0 absolute h-full w-full bg-gradient-black flex items-end hover:text-red hover:bg-gradient-black2'>
                                <p className=' py-8 px-4 text-xl font-semibold'>Digital Library</p>
                            </div>
                        </div>
                        <div className='font-semibold'>
                            <p className='text-gray-700 text-xl mb-'>Latest Publication</p>
                            <p className='text-red text-2xl my-4'>Connecting Stakeholders for DoD Software Systems</p>
                            <a className='text-xl'> <span className='align-middle'>BROWSE</span><VscTriangleRight className='inline-block align-middle'/></a>
                        </div>
                    </div>
                    <div className=''>
                        <div className='relative z-20xs:w-[70%] md:w-full w-full '>
                            <img src={blogImg} alt="" className='md:w-[400px] w-full ' />
                            <div className='text-white top-0 absolute h-full w-full bg-gradient-black flex items-end hover:text-red hover:bg-gradient-black2'>
                                <p className=' py-8 px-4 text-xl font-semibold'>Blog</p>
                            </div>
                        </div>
                        <div className='font-semibold'>
                            <p className='text-gray-700 text-xl mb-'>LATEST BLOG POST</p>
                            <p className='text-red text-2xl my-4'>Generative AI Q&A: Applications in Software Engineering</p>
                            <a className='text-xl text-gray-700 '> <span className='align-middle'>SUBSCRIBE TO SEI BLOG</span><VscTriangleRight className='inline-block align-middle'/></a>
                        </div>
                    </div>
                    <div className=''>
                        <div className='relative z-20 w-full'>
                            <img src={webinarImg} alt="" className='md:w-[400px] w-full  ' />
                            <div className='text-white top-0 absolute h-full w-full bg-gradient-black flex items-end hover:text-red hover:bg-gradient-black2'>
                                <p className=' py-8 px-4 text-xl font-semibold'>Webcast Series</p>
                            </div>
                        </div>
                        <div className='font-semibold'>
                            <p className='text-gray-700 text-xl mb-'>LLATEST WEBINAR</p>
                            <p className='text-red text-2xl my-4'>Connecting Stakeholders for DoD Software Systems</p>
                            <a className='text-xl text-gray-700 '> <span className='align-middle'>BROWSE</span><VscTriangleRight className='inline-block align-middle'/></a>
                        </div>
                    </div>
                    <div className=''>
                        <div className='relative z-20 xs:w-[70%] md:w-full w-full'>
                            <img src={podcastImg} alt="" className='md:w-[400px] w-full' />
                            <div className='text-white top-0 absolute h-full w-full bg-gradient-black flex items-end hover:text-red hover:bg-gradient-black2'>
                                <p className=' py-8 px-4 text-xl font-semibold'>Podcast Series</p>
                            </div>
                        </div>
                        <div className='font-semibold'>
                            <p className='text-gray-700 text-xl mb-'>Latest Podcast</p>
                            <p className='text-red text-2xl my-4'>Measuring the Trustworthiness of AI Systems</p>
                            <a className='text-xl text-gray-700  '> <span className='align-middle'>SUBSCRIBE ON ITUNESU</span><VscTriangleRight className='inline-block align-middle'/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-[85%] md:w-[90%] py-8 mx-auto'>
            <h1 className='text-4xl text-gray-700 my-8'>We make our research relevant with tools you can use today.</h1>
            <p className='text-gray-500 text-[1.1rem]  font-medium my-6'>We release software and tools that you can download and use today to put our research into practice.</p>
            <div className='grid md:grid-cols-4 gap-16'>

                <div className=''>
                    <div className='relative z-20 xs:w-[70%] md:w-full w-full '>
                        <img src={githubImg} alt="" className='md:w-[300px] w-full ' />
                        <div className='text-white top-0 absolute h-full w-full bg-gradient-black flex items-end hover:text-red hover:bg-gradient-black2'>
                            <p className=' py-8 px-4 text-xl font-semibold'>Software & Tools</p>
                        </div>
                    </div>
                    <a className='text-xl text-gray-600 font-bold'> <span className='align-middle'>FIND US ON GITHUB</span><VscTriangleRight className='inline-block align-middle'/></a>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Hero