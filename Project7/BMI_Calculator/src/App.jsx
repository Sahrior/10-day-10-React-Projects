import React, { useState } from 'react'

const App = () => {

  
  const [bmi, setBmi] = useState("")
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)


  const CalculateBmi = () =>{

    let ans = weight/(height*height)
    setBmi(ans);
    
  }

  


  return (
    <div className='main' >

      <div className="box">
        <h1>BMI calculator</h1>
        <input onChange={(e)=>{setWeight(e.target.value)}} type="text" placeholder='Enter your weight in kg ' />
        <input onChange={(e)=>{setHeight(e.target.value)}} type="text" placeholder='Enter your Height in meter' />
        <button onClick={CalculateBmi} >Calculate</button>

        
      

      </div>

      <div className="result">
          <h3>Your BMI is: {bmi} </h3>
      </div>


    </div>
  )
}

export default App
