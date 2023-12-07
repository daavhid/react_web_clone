import React from 'react'
import { BrowserRouter,Link,Routes,Route } from 'react-router-dom'
import Header from './component/Header'
import Hero from './pages/Hero'
import Footer from './component/Footer'
import Layout from './component/EduLayout'
import Courses from './pages/Courses'
import Credentials from './pages/credentials'
import Curricula from './pages/curricula'
import Licencing from './pages/licencing'


const App = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='education-outreach'>
                        <Route index element={<Hero/>}/>
                        <Route path='courses' element={<Courses/>}/>
                        <Route path='credentials' element={<Credentials/>}/>
                        <Route path='curricula' element={<Curricula/>}/>
                        <Route path='licencing-sei-materials' element={<Licencing/>}/>
                    </Route>
                    
                </Route>
            </Routes>
        </BrowserRouter>
     
        {/* <div className='w-5/6 md:w-[90%] mx-auto'>
        </div> */}
        {/* <Header/>
       <Footer/> */}
    </>
  )
}

export default App