import React, { useState } from 'react'
import products from './product'

const App = () => {

  const [filterdProduct, setFilterdProduct] = useState(products)
  

  const setSearch = (e)=>{

    const value = e.target.value

    setFilterdProduct(
      products.filter((item)=>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
    )

  }



  return (
    <>

      <div className="input-box">

        <input 
          type="text" 
          placeholder="Search products..."
          onChange={setSearch}
        />

      </div>



      <div className="product-container">


        {
          filterdProduct.map((item,index)=>(

            <div className="product-card" key={item.id}>


              <div className="image-box">

                <img 
                  src={item.image} 
                  alt={item.name}
                />


                {
                  item.discount && (

                    <span className="discount">
                      -{item.discount}%
                    </span>

                  )
                }

              </div>



              <div className="product-info">


                <p className="brand">
                  {item.brand}
                </p>


                <h2>
                  {item.name}
                </h2>


                <div className="rating">

                  ⭐ {item.rating}

                  <span>
                    ({item.reviews})
                  </span>

                </div>



                <div className="price">


                  <span className="new-price">
                    ${item.price}
                  </span>


                  {
                    item.oldPrice && (

                      <span className="old-price">
                        ${item.oldPrice}
                      </span>

                    )
                  }


                </div>



                <p className="stock">

                  {
                    item.stock > 0
                    ? "In Stock"
                    : "Out of Stock"
                  }

                </p>



                <button>
                  Add To Cart
                </button>


              </div>


            </div>

          ))
        }


      </div>


    </>
  )
}


export default App