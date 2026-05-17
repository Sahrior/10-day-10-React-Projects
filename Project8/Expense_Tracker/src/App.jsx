import { useState } from "react"
import Header from "./Components/Header"
import EarningsInput from "./Components/EarningsInput"
import EarningHeader from "./Components/EarningHeader"
import EarningList from "./Components/EarningList"
import TotalEarn from "./Components/TotalEarn"
import Line1 from "./Components/Line1"
import Expenses from "./Components/Expenses"
import ExpenseHeader from "./Components/ExpenseHeader"
import ExpensesList from "./Components/ExpensesList"
import TotalExpense from "./Components/TotalExpense"
import Line2 from "./Components/Line2"
import TotalSavings from "./Components/TotalSavings"

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
      <Header/>
      <EarningsInput setMoney={setMoney} setDate={setDate} setWay={setWay} addEarning={addEarning} />
      <EarningHeader/>
      <EarningList earning={earning} />
      <TotalEarn totalEarn={totalEarn} />
      <Line1/>
      <Expenses setExpenseMoney={setExpenseMoney} setExpenseDate={setExpenseDate} setExpenseWay={setExpenseWay} addExpense={addExpense}/>
      <ExpenseHeader/>
      <ExpensesList expense={expense} />
      <TotalExpense totalExpense={totalExpense} />
      <Line2/>
      <TotalSavings totalSaving={totalSaving} />
    </div>
  )
}
export default App
