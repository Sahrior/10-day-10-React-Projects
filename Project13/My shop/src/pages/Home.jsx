import React, { useState } from 'react'
import Homecard from '../components/Homecard'
import Productcard from '../components/Productcard'


const Home = () => {


  const [category, setCategory] = useState("")
  const [isCategoryBtn, setIsCategoryBtn] = useState(false)

  const [priceFilter, setPriceFilter] = useState(0)
  const [isPriceBtn, setIsPriceBtn] = useState(false)

  const [companyFilter, setCompanyFilter] = useState("")
  const [isCompanyBtn, setisCompanyBtn] = useState(false)
  
  

  return (
    <div className='body' >

      <Homecard/>

      <div className="search">
        <input type="text" placeholder='Search item' className='search-bar'/>
      </div>

      <div className="main-body">

        <div className='sidebar' >

          <div className="category">
              <h3>Filter by categoty</h3>
              <div className="phone">
                  <button className="phone-btn" onClick={ ()=> {setCategory("phone"); setIsCategoryBtn(!isCategoryBtn)} } ></button>
                  <p>Phone</p>
              </div>

              <div className="watch">
                  <button className="watch-btn" onClick={()=> {setCategory("watch"); setIsCategoryBtn(!isCategoryBtn)} } ></button>
                  <p>Watch</p>
              </div>

              <div className="laptop">
                  <button className="laptop-btn" onClick={()=> {setCategory("laptop"); setIsCategoryBtn(!isCategoryBtn)} } ></button>
                  <p>Laptop</p>
              </div>

              <div className="headphone">
                  <button className="headphone-btn" onClick={()=>{setCategory("audio"); setIsCategoryBtn(!isCategoryBtn)} } ></button>
                  <p>Headphone</p>
              </div>

              <div className="headphone">
                  <button className="gaming-btn" onClick={()=>{setCategory("gaming"); setIsCategoryBtn(!isCategoryBtn)} } ></button>
                  <p>Gming</p>
              </div>

              <div className="headphone">
                  <button className="gaming-btn" onClick={()=>{setCategory("accessories"); setIsCategoryBtn(!isCategoryBtn)}} ></button>
                  <p>Accessories</p>
              </div>
          </div>

          <div className="price">
              <h3>Filter by Price</h3>

              <div className="price-range">
                  <button className="price-btn"  onClick={()=>{ setPriceFilter(300); setIsPriceBtn(!isPriceBtn) }} ></button>
                  <p>Under $300</p>
              </div>

              <div className="price-range">
                  <button className="price-btn" onClick={()=> {setPriceFilter(600); setIsPriceBtn(!isPriceBtn)} } ></button>
                  <p>Under $600</p>
              </div>

              <div className="price-range">
                  <button className="price-btn"  onClick={()=> {setPriceFilter(900); setIsPriceBtn(!isPriceBtn)} } ></button>
                  <p>Under $900</p>
              </div>

              <div className="price-range">
                  <button className="price-btn"  onClick={()=> {setPriceFilter(1500); setIsPriceBtn(!isPriceBtn)} } ></button>
                  <p>Under $1500</p>
              </div>

              <div className="price-range">
                  <button className="price-btn"  onClick={()=> {setPriceFilter(1800); setIsPriceBtn(!isPriceBtn)} } ></button>
                  <p>$1800+</p>
              </div>
          </div>

          <div className="company">
            <h3>Filter by Company</h3>

            <div className="company-item">
              <button className="company-btn" onClick={() => { setCompanyFilter("Apple"); setisCompanyBtn(!isCompanyBtn) }}></button>
              <p>Apple</p>
            </div>

            <div className="company-item">
              <button className="company-btn" onClick={() => { setCompanyFilter("Samsung"); setisCompanyBtn(!isCompanyBtn) }}></button>
              <p>Samsung</p>
            </div>

            <div className="company-item">
              <button className="company-btn" onClick={() => { setCompanyFilter("Google"); setisCompanyBtn(!isCompanyBtn) }}></button>
              <p>Google</p>
            </div>

            <div className="company-item">
              <button className="company-btn" onClick={() => { setCompanyFilter("OnePlus"); setisCompanyBtn(!isCompanyBtn) }}></button>
              <p>OnePlus</p>
            </div>

            <div className="company-item">
              <button className="company-btn" onClick={() => { setCompanyFilter("Xiaomi"); setisCompanyBtn(!isCompanyBtn) }}></button>
              <p>Xiaomi</p>
            </div>

            <div className="company-item">
              <button className="company-btn" onClick={() => { setCompanyFilter("Nothing"); setisCompanyBtn(!isCompanyBtn) }}></button>
              <p>Nothing</p>
            </div>

            <div className="company-item">
              <button className="company-btn" onClick={() => { setCompanyFilter("Dell"); setisCompanyBtn(!isCompanyBtn) }}></button>
              <p>Dell</p>
            </div>

            <div className="company-item">
              <button className="company-btn" onClick={() => { setCompanyFilter("Lenovo"); setisCompanyBtn(!isCompanyBtn) }}></button>
              <p>Lenovo</p>
            </div>

            <div className="company-item">
              <button className="company-btn" onClick={() => { setCompanyFilter("ASUS"); setisCompanyBtn(!isCompanyBtn) }}></button>
              <p>ASUS</p>
            </div>

            <div className="company-item">
              <button className="company-btn" onClick={() => { setCompanyFilter("HP"); setisCompanyBtn(!isCompanyBtn) }}></button>
              <p>HP</p>
            </div>

            <div className="company-item">
              <button className="company-btn" onClick={() => { setCompanyFilter("Garmin"); setisCompanyBtn(!isCompanyBtn) }}></button>
              <p>Garmin</p>
            </div>

            <div className="company-item">
              <button className="company-btn" onClick={() => { setCompanyFilter("Amazfit"); setisCompanyBtn(!isCompanyBtn) }}></button>
              <p>Amazfit</p>
            </div>

            <div className="company-item">
              <button className="company-btn" onClick={() => { setCompanyFilter("Sony"); setisCompanyBtn(!isCompanyBtn) }}></button>
              <p>Sony</p>
            </div>

            <div className="company-item">
              <button className="company-btn" onClick={() => { setCompanyFilter("JBL"); setisCompanyBtn(!isCompanyBtn) }}></button>
              <p>JBL</p>
            </div>

            <div className="company-item">
              <button className="company-btn" onClick={() => { setCompanyFilter("Anker"); setisCompanyBtn(!isCompanyBtn) }}></button>
              <p>Anker</p>
            </div>

            <div className="company-item">
              <button className="company-btn" onClick={() => { setCompanyFilter("Bose"); setisCompanyBtn(!isCompanyBtn) }}></button>
              <p>Bose</p>
            </div>

            <div className="company-item">
              <button className="company-btn" onClick={() => { setCompanyFilter("Microsoft"); setisCompanyBtn(!isCompanyBtn) }}></button>
              <p>Microsoft</p>
            </div>

            <div className="company-item">
              <button className="company-btn" onClick={() => { setCompanyFilter("Nintendo"); setisCompanyBtn(!isCompanyBtn) }}></button>
              <p>Nintendo</p>
            </div>

            <div className="company-item">
              <button className="company-btn" onClick={() => { setCompanyFilter("Valve"); setisCompanyBtn(!isCompanyBtn) }}></button>
              <p>Valve</p>
            </div>

            <div className="company-item">
              <button className="company-btn" onClick={() => { setCompanyFilter("Logitech"); setisCompanyBtn(!isCompanyBtn) }}></button>
              <p>Logitech</p>
            </div>

            <div className="company-item">
              <button className="company-btn" onClick={() => { setCompanyFilter("Razer"); setisCompanyBtn(!isCompanyBtn) }}></button>
              <p>Razer</p>
            </div>

            <div className="company-item">
              <button className="company-btn" onClick={() => { setCompanyFilter("SteelSeries"); setisCompanyBtn(!isCompanyBtn) }}></button>
              <p>SteelSeries</p>
            </div>

            <div className="company-item">
              <button className="company-btn" onClick={() => { setCompanyFilter("Canon"); setisCompanyBtn(!isCompanyBtn) }}></button>
              <p>Canon</p>
            </div>

            <div className="company-item">
              <button className="company-btn" onClick={() => { setCompanyFilter("GoPro"); setisCompanyBtn(!isCompanyBtn) }}></button>
              <p>GoPro</p>
            </div>

            <div className="company-item">
              <button className="company-btn" onClick={() => { setCompanyFilter("DJI"); setisCompanyBtn(!isCompanyBtn) }}></button>
              <p>DJI</p>
            </div>

            <div className="company-item">
              <button className="company-btn" onClick={() => { setCompanyFilter("LG"); setisCompanyBtn(!isCompanyBtn) }}></button>
              <p>LG</p>
            </div>

            <div className="company-item">
              <button className="company-btn" onClick={() => { setCompanyFilter("Amazon"); setisCompanyBtn(!isCompanyBtn) }}></button>
              <p>Amazon</p>
            </div>

            <div className="company-item">
              <button className="company-btn" onClick={() => { setCompanyFilter("TP-Link"); setisCompanyBtn(!isCompanyBtn) }}></button>
              <p>TP-Link</p>
            </div>
          </div>
        
        </div>


        <div className="products-section">
          <Productcard  category={category} isCategoryBtn={isCategoryBtn} priceFilter={priceFilter} isPriceBtn={isPriceBtn} companyFilter={companyFilter} isCompanyBtn={isCompanyBtn} />
        </div>


      </div>


      

      
    </div>
  )
}

export default Home
