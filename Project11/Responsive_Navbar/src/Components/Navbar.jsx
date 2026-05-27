import React, { useState } from 'react'
import { X, Menu } from "lucide-react";

const Navbar = () => {

    const [button, setButton] = useState(false)




  return (
    <>

        <div className="dekstop-nav">

            <div className="logo">UI</div>

            <div className="buttons">
                <div className="home">HOME</div>
                <div className="career">Career</div>
                <div className="contact">Contact</div>
                <div className="service">Our Service</div>
            </div>

        </div>



        <div className="mobile-nav">

            

            <div className='mobile-view'>
                <div className="logo-mobile">UI</div>
                <button onClick={()=>setButton(!button)} > {button? <X/> : <Menu/> } </button>
            </div>

            <div className={`buttons-mobile  ${ button ? "show" : "hide" } `}>
                <div className="home">HOME</div>
                <div className="career">Career</div>
                <div className="contact">Contact</div>
                <div className="service">Our Service</div>
            </div>

            
           

        </div>

        
      
    </>
  )
}

export default Navbar
