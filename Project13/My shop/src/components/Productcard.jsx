import React from 'react'
import products from "../data/products";

const Productcard = ( {category , isCategoryBtn, priceFilter, isPriceBtn, companyFilter, isCompanyBtn} ) => {


  const filterdProduct = products.filter((item)=>{
    return (

      item.category === category &&
      item.company === companyFilter &&
      item.price<=priceFilter

    );
  })


  return (
    <div className="product-card-holder">

      {
        isCategoryBtn === true || isPriceBtn === true || isCompanyBtn === true ? (

          isCategoryBtn === true && isPriceBtn === true && isCompanyBtn === true ? (

            filterdProduct.length===0 ? (
              <div><h6>No products</h6></div>
            ) : (
              filterdProduct.map((item,index)=>(
              <div key={index} className="product-card">
              <div className="product-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="product-info">
                <h3 className="product-name">{item.name}</h3>
                <p className="product-company">{item.company}</p>

                <div className="product-bottom">
                  <span className="product-price">
                    ${item.price}
                  </span>
                  <button className="add-btn">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
              
            ))
            )

          ) : (
            <div>meow</div>
          )

        ) : (

          products.map((item, index) => (
            <div key={index} className="product-card">
              <div className="product-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="product-info">
                <h3 className="product-name">{item.name}</h3>
                <p className="product-company">{item.company}</p>

                <div className="product-bottom">
                  <span className="product-price">
                    ${item.price}
                  </span>
                  <button className="add-btn">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))

        )
      }

    </div>
  )
}

export default Productcard