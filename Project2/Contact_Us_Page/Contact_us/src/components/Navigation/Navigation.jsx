import React from 'react'
import styles from './Navigation.module.css'  // ✅ FIXED

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>   {/* ✅ lowercase */}
        <div className={styles.logo}>
            <img src="/images/logo.png" alt="" />
        </div>

        <ul className={styles.list}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation