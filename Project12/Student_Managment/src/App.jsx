import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState("")
  const [id, setId] = useState("")
  const [grade, setGrade] = useState("")

  const [showStudent, setShowStudent] = useState("{ No student }")

  const [student, setstudent] = useState([])

  const addStudent = (e) => {

    e.preventDefault();


    const newStudent = {
      name : name,
      id : id,
      grade : grade
    }

    setstudent([...student, newStudent])

  }





  return (
    <div>

      <div className="nav">Student Managment</div>

      <div className="form">
        <form action="" className='forms' >
          <input type="text" placeholder='Enter student name'  onChange={(e)=>setName(e.target.value)} />
          <input type="number" placeholder='Enter student id'  onChange={(e)=>setId(e.target.value)} />
          <select onChange={(e) => setGrade(e.target.value)}>
            <option value="A+">A+</option>
            <option value="A">A</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="B-">B-</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="F">F</option>
          </select>

          <button onClick={addStudent} >Add student</button>
        </form>
      </div>

      <div className="student-list-header">

        <h4>Index</h4>
        <h4>Name</h4>
        <h4>Id</h4>
        <h4>Grade</h4>

      </div>

      <select className='sort-select' name="" id="">
        <option value=""> Sort by Grade </option>
        <option value="">Sort by alphabetical order</option>
      </select>

      <div className={student.length==0?"empty-list" : "student-list"}>
          {student.length==0? showStudent :
              student.map((student,index)=>(
                <div className='list' key={index}>
                  <p> {index+1} </p>
                  <p>{student.name}</p>
                  <p>{student.id}</p>
                  <p>{student.grade}</p>
                </div>
              ))
          }
      </div>
      
    </div>
  )
}

export default App
