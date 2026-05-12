import React, { useState } from 'react'

const App = () => {

  
  const [bmi, setBmi] = useState("")
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [Category, setCategory] = useState("")
  const [RiskLevel, setRiskLevel] = useState("")
  const [showMoreText, setShowMoreText] = useState("")
  const [details, setDetails] = useState("Show more")

  


  const CalculateBmi = () =>{

    let ans = weight/(height*height)
    setBmi(ans);
    
  }

  const moretext = ()=>{

    if (bmi < 18.5) {
      setCategory("Category: Underweight")
      setRiskLevel("Risk Level: Moderate–High")
      setShowMoreText("Weak immunity, nutrient deficiency, anemia, low energy, bone loss")
    } 
    else if (bmi >= 18.5 && bmi <= 24.9) {
      setCategory("Category: Healthy Weight")
      setRiskLevel("Risk Level: Low")
      setShowMoreText("Lowest general health risk. Maintain balanced diet and regular exercise.")
    } 
    else if (bmi >= 25 && bmi <= 29.9) {
      setCategory("Category: Overweight")
      setRiskLevel("Risk Level: Increased")
      setShowMoreText("Higher chance of high blood pressure, insulin resistance, and heart issues.")
    } 
    else if (bmi >= 30 && bmi <= 34.9) {
      setCategory("Category: Obesity Class 1")
      setRiskLevel("Risk Level: High")
      setShowMoreText("Increased risk of Type 2 diabetes, heart disease, joint pain, and sleep problems.")
    } 
    else if (bmi >= 35 && bmi <= 39.9) {
      setCategory("Category: Obesity Class 2")
      setRiskLevel("Risk Level: Very High")
      setShowMoreText("Higher risk of stroke, metabolic syndrome, and liver disease.")
    } 
    else {
      setCategory("Category: Obesity Class 3")
      setRiskLevel("Risk Level: Extremely High")
      setShowMoreText("Serious cardiovascular problems, breathing issues, and reduced life expectancy.")
    }


  }

  const lesstext = () =>{
    setCategory("")
    setRiskLevel("")
    setShowMoreText("")
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

        <div className="result_row">
          <h5>Your BMI is: {bmi} </h5>

          <button
            className='btn2'
            onClick={() => {
              setDetails(details === "Show more" ? "Show less" : "Show more");
              {details==="Show more"? moretext() : lesstext() }
              
            }}
          >
            {details}
          </button>
        </div>

        <div className='result_details' >
          <h1> {Category} </h1>
          <h1> {RiskLevel} </h1>
          <p> {showMoreText} </p>
        </div>
          
      </div>
      


    </div>
  )
}

export default App
