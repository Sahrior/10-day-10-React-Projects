import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className='navbar'>

        <div className="logo">
            <h3>CA</h3>
        </div>

        <div className="buttons">
            <Link to='/' >Home</Link>
            <Link to='/ourservice' >Our Services</Link>
            <Link to='/careers' >Careers</Link>
            <Link to='/contacus' >Contact Us</Link>
        </div>

        <div className="profile">
            S
        </div>
      
    </div>
  )
  
}

export default Navbar
