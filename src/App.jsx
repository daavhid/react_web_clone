import React from 'react'
import { BrowserRouter,Link,Routes,Route } from 'react-router-dom'
import Header from './component/Header'
import Hero from './component/Hero'
import Footer from './component/Footer'


const App = () => {
  return (
    <>
     
        {/* <div className='w-5/6 md:w-[90%] mx-auto'>
        </div> */}
        <Header/>
        <div className=''>
            <div className='bgImage h-[330px] '></div>
            <div className=''>
                 <Hero/>
            </div>
        </div>
       <Footer/>
    </>
  )
}

export default App