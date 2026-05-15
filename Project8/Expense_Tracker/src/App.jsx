import React from 'react'

const App = () => {


  


  return (
    <div>

      <div className="header">
        <h1>Expense Tracker</h1>
      </div>

      <div className="earning">
        <input type="text" placeholder='Enter your earning' />
        <select>
        <option>Salary</option>
        <option>Tution</option>
        <option>Trading</option>
        <option>Others</option>
      </select>

      <input type="date" />

      <button>ADD</button>
      </div>

      <div className="earning_list_header">
        <h3>Money</h3>
        <h3>Way</h3>
        <h3>Date</h3>
      </div>

      <div className="earning_lists">

          <div className="earning_list">
            <h5>1000 BDT</h5>
            <h5>Tuition</h5>
            <h5>15 November 2025</h5>
          </div>

          <div className="earning_list">
            <h5>40000 BDT</h5>
            <h5>Salary</h5>
            <h5>1 November 2025</h5>
          </div>

          <div className="earning_list">
            <h5>15000 BDT</h5>
            <h5>Trading</h5>
            <h5>17 November 2025</h5>
          </div>

      </div>

      <div className="total_earning">
        Total Earn: 66000 BDT
      </div>

      <div className="line1">
        <hr />
      </div>

      <div className="expenses">
        <input type="text" placeholder='Enter your expenses' />
        <select>
          <option>Rent</option>
          <option>Food</option>
          <option>Clothing</option>
          <option>Medicine</option>
          <option>Other</option>
        </select>

        <input type="date" />

        <button>ADD</button>
      </div>

      <div className="expenses_list_header">
        <h3>Money</h3>
        <h3>Way</h3>
        <h3>Date</h3>
      </div>

      <div className="expenses_lists">

          <div className="expenses_list">
            <h5>20000 BDT</h5>
            <h5>Rent</h5>
            <h5>5 November 2025</h5>
          </div>

          <div className="expenses_list">
            <h5>5000 BDT</h5>
            <h5>Clothing</h5>
            <h5>15 November 2025</h5>
          </div>


          <div className="expenses_list">
            <h5>7000 BDT</h5>
            <h5>Food</h5>
            <h5>15 November 2025</h5>
          </div>


      </div>


      <div className="total_expenses">
        Total Expense: 32000 BDT
      </div>

      <div className="line2">
        <hr />
      </div>


      <div className="total_savings">
        Total savings: 34000 BDT
      </div>





      

    </div>
  )
}

export default App
