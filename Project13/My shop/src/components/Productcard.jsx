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

  const filterCategoryPrice = products.filter((item)=>{
    return(
      item.category === category &&
      item.price <= priceFilter
    )
  })

  const filterCtegoryCompany = products.filter((item)=>{
    return(
      item.category === category &&
      item.company === companyFilter
    )
  })

  const filterPriceCategory = products.filter((item)=>{
    return(
      item.price<=priceFilter &&
      item.company === companyFilter
    )
  })

  const filterCategory = products.filter((item)=>{
    return(
      item.category === category
    )
  })

  const filterPrice = products.filter((item)=>{
    return(
      item.price<=priceFilter
    )
  })

  const filterCompany = products.filter((item)=>{
    return(
      item.company === companyFilter
    )
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

          ) : isCategoryBtn === true && isPriceBtn === true && isCompanyBtn === false ? (

            filterCategoryPrice.length === 0? (
              <div><h6>No product with this price and category</h6></div>
            ) : (
              filterCategoryPrice.map((item, index)=>(

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

          ) : isCategoryBtn === true && isPriceBtn === false && isCompanyBtn === true ? (
              filterCategoryPrice.length===0? (
                <div><h6>No Product to show</h6></div>
              ) : (
                filterCtegoryCompany.map((item, index)=>(
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
          ) : isCategoryBtn === false && isPriceBtn === true && isCompanyBtn === true ? (

            filterCategoryPrice.length===0?(
              <div><h6>No product found</h6></div>
            ) : (
              filterCategoryPrice.map((item,index)=>(
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

          ) : isCategoryBtn === true && isPriceBtn === false && isCompanyBtn === false ? (

            filterCategory.length === 0 ? (
              <div><h6>No product found</h6></div>
            ) : (
              filterCategory.map((item,index)=>(
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

          ) : isCategoryBtn === false && isPriceBtn === true && isCompanyBtn === false ?(

            filterPrice.length===0 ? (
              <div><h6>No produtct</h6></div>
            ) : (
              filterPrice.map((item,index)=>(

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

          ) : isCategoryBtn === false && isPriceBtn === false  && isCompanyBtn === true ? (
            filterCompany.length === 0 ? (
              <div><h6>No company found</h6></div>
            ) : (
              filterCompany.map((item,index)=>(
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
            <div>wth</div>
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