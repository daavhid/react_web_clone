import React from 'react'
import { MdChevronRight,MdChevronLeft, } from 'react-icons/md'
import { VscTriangleRight, } from 'react-icons/vsc'
import fullCourseImg from '../assets/images/fullbleed_full_hero_courses_1400x500_2_1575.webp'
import matrix from '../assets/images/matrix.jpg'
import { Link } from 'react-router-dom'


const Courses = () => {

    const handleClickRight = ()=> {
        const el = document.querySelector('#carousel');
        el.style = 'transform:translateX(-50%)'  }
    const handleClickLeft = ()=> {
        const el = document.querySelector('#carousel');
        el.style = 'transform:translateX(-0%)'}
    
  return (
    <>
         <div className='courseImg h-[330px] '></div>
         <div className='w-[85%] md:w-[80%] mx-auto mb-16'>
            <p className='py-4 my-4 text-2xl flex items-center'><a className='text-red font-semibold'>SEI</a><MdChevronRight className='mx-3 font-light text-xs align-middle'/><Link to={'..'} className='  font-semibold text-red hover:underline'>Education and Outreach</Link><MdChevronRight className='mx-3 font-light text-xs align-middle'/><span className='text-gray-500 font-medium'>Courses</span></p>
            <div className='flex flex-col md:flex-row gap-10 '>
                <div className='basis-[60%] grow'>
                    <h2 className='text-5xl leading-loose text-gray-600 '>Courses</h2>
                    <p className='text-gray-600 text-xl' >Courses, workshops, and seminars help transition SEI technology and research to the broader community, disseminating recent advances relevant to our mission.</p>
                    <p className='text-gray-600 text-xl mt-4' >Learn more about the new CERT Applied Data Science for Cybersecurity Professional Certificate: </p>
                    <div className='my-8'>
                        <iframe width="600" height="315" src="https://www.youtube.com/embed/Y_wodYL1Td0" title="CERT Applied Data Science for Cybersecurity" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                            <source src='https://www.youtube.com/embed/Y_wodYL1Td0'/>
                        </iframe>
                        <p className='text-gray-600 text-xl mt-4'>To learn how data science and machine learning address cybersecurity challenges, watch this webcast.</p>
                    </div>
                </div>
                <div className='bg-red text-white p-6 self-start'>
                    <p className='text-2xl font-bold'>Important Notice</p>
                    <p className='font-semibold text-gray-300 text-xl my-4'>Course Registration Questions?</p>
                    <a href='www.gmail.com' className='font-semibold text-gray-300 text-xl my-4 underline '>E-mail: courseregistration@sei.cmu.edu</a>
                    <p className='font-semibold text-gray-300 text-xl my-4'>Phone: 412-268-7388</p>
                </div>
                
            </div>
        </div>
        <div className='bg-gray-100 py-16'>
            <div className=' w-[85%] md:w-[80%] mx-auto'>
                <h1 className='text-4xl text-gray-700 my-8'>New Courses.</h1>
                <p className='text-gray-500 text-[1.1rem]  font-medium my-6'>The SEI offers training to share our technology and research with the broader community, disseminating recent advances relevant to <a href="/" className='text-red-500'>our mission.</a> </p>
                <div className='overflow-hidden transition-all duration-1000' >
                    <div className='flex w-[200%] transition-all duration-1000' id='carousel'>

                        <div className='grid grid-cols-3 w-[100vw]  gap-6'>
                            <div className='bg-white px-5 pt-10 basis-3/4'>
                                <p className='text-gray-700 font-bold '>Course</p>
                                <h1 className='text-red text-xl my-2  font-bold'>Fundamentals of Statistics Applied to Cybersecurity</h1>
                                <p className='my-1 mb-3 font-thin'>Through the fundamentals of statistics related to cybersecurity, aspiring data scientists can:  Gain knowledge of common problems that a data scientist encounters.</p>
                                <a className='inline-block  font-semibold text-gray-700 pb-16'> <span className='align-middle'>LEARN MORE </span><VscTriangleRight className='inline-block align-middle'/></a>
                            </div>
                            <div className='bg-white px-5 pt-10 basis-3/4'>
                                <p className='text-gray-700 font-bold '>Course</p>
                                <h1 className='text-red text-xl my-2  font-bold'>Advanced Analytics: Netflow</h1>
                                <p className='my-1 mb-3 font-thin'>After learning about NetFlow related to cybersecurity, aspiring data scientists can:  Become fluent in NetFlow with the help of a scripting language, understand NetFlow architecture ...</p>
                                <a className='inline-block  font-semibold text-gray-700 pb-16 '> <span className='align-middle'>LEARN MORE </span><VscTriangleRight className='inline-block align-middle'/></a>
                            </div>
                            <div className='bg-white px-5 pt-10 basis-3/4'>
                                <p className='text-gray-700 font-bold '>Course</p>
                                <h1 className='text-red text-xl my-2  font-bold'>Advanced Analytics: Malware</h1>
                                <p className='my-1 mb-3 font-thin'>After learning about malware related to cybersecurity, aspiring data scientists can: become fluent in malware with the help of a scripting language, understand principles of investigating and analyzing properties of malware...</p>
                                <a className='inline-block  font-semibold text-gray-700 pb-16 '> <span className='align-middle'>LEARN MORE </span><VscTriangleRight className='inline-block align-middle'/></a>
                            </div>
                        </div>
                    
                        <div className=' grid grid-cols-3 w-[100vw] gap-6 ' >
                            <div className='bg-white px-5 pt-10 basis-3/4'>
                                <p className='text-gray-700 font-bold '>Course</p>
                                <h1 className='text-red text-xl my-2  font-bold'>Advanced Analytics: Malware</h1>
                                <p className='my-1 mb-3 font-thin'>After learning about malware related to cybersecurity, aspiring data scientists can: become fluent in malware with the help of a scripting language, understand principles of investigating and analyzing properties of malware...</p>
                                <a className='inline-block  font-semibold text-gray-700 pb-16 '> <span className='align-middle'>LEARN MORE </span><VscTriangleRight className='inline-block align-middle'/></a>
                            </div>
                            <div className='bg-white px-5 pt-10 basis-3/4'>
                                <p className='text-gray-700 font-bold '>Course</p>
                                <h1 className='text-red text-xl my-2  font-bold'>Advanced Analytics: Malware</h1>
                                <p className='my-1 mb-3 font-thin'>After learning about malware related to cybersecurity, aspiring data scientists can: become fluent in malware with the help of a scripting language, understand principles of investigating and analyzing properties of malware...</p>
                                <a className='inline-block  font-semibold text-gray-700 pb-16 '> <span className='align-middle'>LEARN MORE </span><VscTriangleRight className='inline-block align-middle'/></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='overflow-hidden'>

                <div className='flex my-8 gap-2 justify-center '>
                    <div onClick={()=>{
                        handleClickLeft()

                    }} className='p-2 bg-white rounded-full text-gray-700 font-bold  text-4xl hover:opacity-60 hover:text-red'>

                        <MdChevronLeft/>
                    </div>
                    <div onClick={()=>{
                        handleClickRight()
                    }} className='p-2 bg-white rounded-full font-bold text-4xl hover:opacity-60 hover:text-red'>

                    <MdChevronRight/>
                    </div>
                </div>
                </div>

                
            </div>
        </div>
        <div className=' bgGradient2 py-16 '>
            <div className='flex flex-col md:flex-row w-[85%] md:w-[80%] gap-8 mx-auto'>
                <div className='basis-5/6 order-2 '>
                    <div>
                        <h1 className='text-3xl text-gray-100'>Knowledge and Techniques That You Can Apply Today</h1>
                        <p className='text-gray-200 text-[1rem]  font-medium my-10'>SEI courses, workshops, and seminars are created and delivered by recognized experts who have practical experience in the disciplines they teach. Our courses feature hands-on tasks and real-world scenarios. In just a matter of days, you’ll be more informed and ready to perform at a higher level.</p>
                    </div>
                    <div>
                        <h1 className='text-3xl text-gray-100 '>Professional Development and Workforce Development</h1>
                        <p className='text-gray-200 text-[1rem]  font-medium my-6'>Whether you want to learn at your own pace online, experience the networking opportunities of our classroom facilities, or develop your workforce by bringing our instructors on-site, SEI courses give you the tools you need to create and maintain software, systems, and organizations that are efficient, secure, and reliable. Organizations can help their workforce gain competencies in software development, software acquisition, and cybersecurity.</p>
                    </div>
                </div>
                <div className='order-1 md:order-2'>
                    <img src={matrix} alt="" />
                </div>
            </div>
        </div>
        <div>
            <h1>Delivery Modes</h1>
            <div>
                <div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Courses