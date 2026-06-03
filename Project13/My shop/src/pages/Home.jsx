import React from 'react'
import Homecard from '../components/Homecard'
import Productcard from '../components/Productcard'
import Filter from '../components/Filter'

const Home = () => {
  return (
    <div className='body' >

      <Homecard/>

      <div className="search">
        <input type="text" placeholder='Search item' className='search-bar'/>
      </div>

      <div className="main-body">
        <Filter/>
        <div className="products-section">
          <Productcard />
        </div>
      </div>


      

      
    </div>
  )
}

export default Home
