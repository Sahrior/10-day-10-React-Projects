import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import OurServices from './pages/OurServices'
import Careers from './pages/Careers'
import ContactUs from './pages/ContactUs'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>

      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/ourservice' element={ <OurServices/> } />
        <Route path='/careers' element={ <Careers/> } />
        <Route path='/contacus'  element={ <ContactUs/> } />
      </Routes>


    </>
  )
}

export default App
