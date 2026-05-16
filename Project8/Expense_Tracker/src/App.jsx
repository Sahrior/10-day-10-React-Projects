import { useState } from "react"


const App = () => {


  const [money, setMoney] = useState("")
  const [way, setWay] = useState("")
  const [date, setDate] = useState("")
  const [totalEarn, setTotalEarn] = useState(0)
  const [earning, setEarning] = useState([])




  const [expenseMoney, setExpenseMoney] = useState("")
  const [expenseWay, setExpenseWay] = useState("")
  const [expenseDate, setExpenseDate] = useState("")
  const [totalExpense, setTotalExpense] = useState(0)
  const [expense, setExpense] = useState([])


  const [totalSaving, setTotalSaving] = useState(0)

  const addExpense = () =>{

    const newExpense = {
      id: Date.now(),
      expenseMoney : expenseMoney,
      expenseWay : expenseWay,
      expenseDate : expenseDate,
    }

    setTotalExpense(totalExpense+Number(expenseMoney))
    setTotalSaving(totalSaving-Number(expenseMoney))

    setExpense([...expense, newExpense])

    setExpenseDate("");
    setExpenseMoney("")
    setExpenseWay("")

  }




  
  const addEarning = ()=>{

    const newEarning = {
      id : Date.now(),
      money : money,
      way  : way,
      date : date

    }

    setTotalEarn(totalEarn+Number(money))
    setTotalSaving(totalSaving+Number(money))
    

    setEarning ([...earning, newEarning])
    setDate("");
    setMoney("")
    setWay("")


  }







  


  return (
    <div>

      <div className="header">
        <h1>Expense Tracker</h1>
      </div>

      <div className="earning">
        <input onChange={(e)=>setMoney(e.target.value)}  type="text" placeholder='Enter your earning' />
        <select onChange={(e)=>setWay(e.target.value)} >
        <option ></option>
        <option>Salary</option>
        <option>Tution</option>
        <option>Trading</option>
        <option>Others</option>
      </select>

      <input type="date" onChange={(e)=>setDate(e.target.value)} />

      <button onClick={addEarning } >ADD</button>
      </div>

      <div className="earning_list_header">
        <h3>Money</h3>
        <h3>Way</h3>
        <h3>Date</h3>
      </div>

      <div className="earning_lists">

            {earning.map((item) => (
              <div className="earning_list" key={item.id}>
                <h5>{item.money} BDT</h5>
                <h5>{item.way}</h5>
                <h5>{item.date}</h5>
              </div>
            ))}
          
      </div>

      <div className="total_earning">
        Total Earn: {totalEarn} BDT
      </div>

      <div className="line1">
        <hr />
      </div>

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

      <div className="expenses_list_header">
        <h3>Money</h3>
        <h3>Way</h3>
        <h3>Date</h3>
      </div>

      <div className="expenses_lists">

          {expense.map((item)=>(
            <div className="expenses_list" key={item.id} >

                <h5>{item.expenseMoney} BDT</h5>
                <h5>{item.expenseWay}</h5>
                <h5>{item.expenseDate}</h5>

            </div>
          ))}

      </div>


      <div className="total_expenses">
        Total Expense: {totalExpense} BDT
      </div>

      <div className="line2">
        <hr />
      </div>


      <div className="total_savings">
        Total savings: {totalSaving} BDT
      </div>





      

    </div>
  )
}

export default App
