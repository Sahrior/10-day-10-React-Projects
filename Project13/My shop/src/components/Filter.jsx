import React from 'react'

const Filter = () => {
  return (
    <div className='sidebar' >

        <div className="category">
            <h5>Filter by categoty</h5>
            <div className="phone">
                <button className="phone-btn"></button>
                <p>Phone</p>
            </div>

            <div className="watch">
                <button className="watch-btn"></button>
                <p>Watch</p>
            </div>

            <div className="laptop">
                <button className="laptop-btn"></button>
                <p>Laptop</p>
            </div>

            <div className="headphone">
                <button className="headphone-btn"></button>
                <p>Headphone</p>
            </div>
        </div>

        <div className="price">
            <h5>Filter by Price</h5>

            <div className="price-range">
                <button className="price-btn"></button>
                <p>Under $100</p>
            </div>

            <div className="price-range">
                <button className="price-btn"></button>
                <p>$100 - $300</p>
            </div>

            <div className="price-range">
                <button className="price-btn"></button>
                <p>$300 - $500</p>
            </div>

            <div className="price-range">
                <button className="price-btn"></button>
                <p>$500 - $1000</p>
            </div>

            <div className="price-range">
                <button className="price-btn"></button>
                <p>$1000+</p>
            </div>
        </div>

        <div className="company">
            <h5>Filter by Company</h5>

            <div className="company-item">
                <button className="company-btn"></button>
                <p>Apple</p>
            </div>

            <div className="company-item">
                <button className="company-btn"></button>
                <p>Samsung</p>
            </div>

            <div className="company-item">
                <button className="company-btn"></button>
                <p>Sony</p>
            </div>

            <div className="company-item">
                <button className="company-btn"></button>
                <p>Lenovo</p>
            </div>

            <div className="company-item">
                <button className="company-btn"></button>
                <p>Dell</p>
            </div>
        </div>
      
    </div>
  )
}

export default Filter
