import React from 'react'
import {MdSearch} from 'react-icons/md'

const Header = () => {
  return (
        <>
            <div className=' bg-red'>
                <nav className=' w-[85%] md:w-[90%] mx-auto text-white py-2 md:py-0'>
                    <div className='flex flex-col justify-between md:items-center md:flex-row'>
                        <h1 className='text-3xl'>Carnegie Mellon University</h1>
                        <div className='bg-black/20 flex items-center basis-[40%] mt-2 md:mt-0 '>
                            <input type="text" placeholder='Enter Keywords' className='grow w-full bg-transparent   placeholder:text-white placeholder:text-xl outline-none focus:bg-black/50 py-3 px-2 ' />
                            <MdSearch className='text-3xl font-bold  w-[10%]'/>
                        </div>
                        
                    </div>
                </nav>
                <div className='bg-white text-gray-700 py-10'>
                    <h1 className='text-6xl hover:text-red w-[85%] md:w-[90%] mx-auto cursor-point'>Software Engineering Institute</h1>
                </div>

            </div>
            
        </>

  )
}

export default Header