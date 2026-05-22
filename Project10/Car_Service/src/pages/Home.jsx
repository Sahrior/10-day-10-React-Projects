import React from 'react'
import car from '../assets/car.png'

const Home = () => {
  return (
    <main className='hero container'>

      <div className="hero-content">

        <h1>YOUR CAR DESERVE THE BEST</h1>

        <p>
          YOUR CAR DESERVE THE BEST AND WE’RE HERE TO HELP YOU
          WITH OUR SERVICES. YOUR CAR DESERVE THE BEST AND WE’RE
          HERE TO HELP YOU WITH OUR SERVICES.
        </p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button>Category</button>
        </div>

        <div className="shopping">
          <p>Also available on</p>

          <div className="brand-icon">
            <img src="/images/amazon.png" alt="amazon" />
            <img src="/images/flipkart.png" alt="flipkart" />
          </div>
        </div>

      </div>

      <div className="hero-image">
        <img src={car} alt="hero-image" />
      </div>

    </main>
  )
}

export default Home