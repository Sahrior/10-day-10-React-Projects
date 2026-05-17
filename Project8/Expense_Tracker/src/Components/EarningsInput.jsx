import React from 'react'

const EarningsInput = ( {setDate, setMoney, setWay, addEarning} ) => {
  return (
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
  )
}

export default EarningsInput
