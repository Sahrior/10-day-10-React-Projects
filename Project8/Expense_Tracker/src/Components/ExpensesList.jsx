import React from 'react'

const ExpensesList = ( {expense} ) => {
  return (
      <div className="expenses_lists">

          {expense.map((item)=>(
            <div className="expenses_list" key={item.id} >

                <h5>{item.expenseMoney} BDT</h5>
                <h5>{item.expenseWay}</h5>
                <h5>{item.expenseDate}</h5>

            </div>
          ))}

      </div>
  )
}

export default ExpensesList
