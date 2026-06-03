import React from 'react'
import products from "../data/products";

const Productcard = () => {
  return (
    <div className="product-card-holder">
      {
        products.map((item, index) => (
          <div key={index} className="product-card">

            <div className="product-image">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="product-info">
              <h3 className="product-name">{item.name}</h3>
              <p className="product-company">{item.company}</p>

              <div className="product-bottom">
                <span className="product-price">${item.price}</span>
                <button className="add-btn">Add to Cart</button>
              </div>
            </div>

          </div>
        ))
      }
    </div>
  )
}

export default Productcard