import React from 'react'

const Expenses = ( {setExpenseDate, setExpenseMoney, setExpenseWay, addExpense} ) => {
  return (
      <div className="expenses">
        <input onChange={(e)=>setExpenseMoney(e.target.value)} type="text" placeholder='Enter your expenses' />
        <select onChange={(e)=>setExpenseWay(e.target.value)} >
          <option></option>
          <option>Rent</option>
          <option>Food</option>
          <option>Clothing</option>
          <option>Medicine</option>
          <option>Other</option>
        </select>

        <input type="date" onChange={(e)=>setExpenseDate(e.target.value)} />

        <button onClick={addExpense} >ADD</button>
      </div>
  )
}

export default Expenses
