import React from 'react'
import style from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={styles.Navigation} >
        <div className='logo' >
            <img src="/images/logo.png" alt="" />
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>


    </nav>
  )
}

export default Navigation
