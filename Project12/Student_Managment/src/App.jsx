import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState("")
  const [id, setId] = useState("")
  const [grade, setGrade] = useState("")

  const [showStudent, setShowStudent] = useState("{ No student }")

  const [student, setstudent] = useState([])

  const [gradeSort, setGradeSort] = useState([])
  const [isGradeSort, setIsGradeSort] = useState(false)

  const [alphabetSort, setAlphabetSort] = useState([])
  const [isAlphabetSort, setIsAlphabetSort] = useState(false)

  const [idSort, setIdSort] = useState([])
  const [isIdSort, setIsIdSort] = useState(false)

  const [searchFilter, setSearchFilter] = useState("")
  const [isSearching, setIsSearching] = useState(false)

  const [filterd, setFilterd] = useState([])
  const [filteredStudents, setFilteredStudents] = useState([])

  const setSearch = (e) => {
    const value = e.target.value;

    setSearchFilter(value);
    setIsSearching(true);

    setFilteredStudents(
      student.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  }

  const addStudent = (e) => {

    e.preventDefault();


    const newStudent = {
      name : name,
      id : id,
      grade : grade
    }

    setstudent([...student, newStudent])

  }

  const sortById = () =>{

    setIdSort(
      [...student].sort(
        (a,b) => a.id - b.id
      )
    )

    setIsIdSort(true)
    setIsAlphabetSort(false);
    setIsGradeSort(false);
    

  }

  const sortByAlphabet = () => {

    setAlphabetSort(
      [...student].sort(
        (a, b) => a.name.localeCompare(b.name)
      )
    )

    setIsAlphabetSort(true);
    setIsGradeSort(false);
    setIsIdSort(false)

  }

  const sortStudentByGrade = () => {

    const gradeOrder = {
      "A+": 1,
      "A": 2,
      "A-": 3,
      "B+": 4,
      "B": 5,
      "B-": 6,
      "C": 7,
      "D": 8,
      "F": 9,
    };

    setGradeSort(
      [...student].sort(
        (a,b) => gradeOrder[a.grade] - gradeOrder[b.grade]
      )
    );

    setIsGradeSort(true);
    setIsAlphabetSort(false);
    setIsIdSort(false)


  }





  return (
    <div>

      <div className="nav">Student Managment</div>

      <div className="form">
        <form action="" className='forms' >
          <input type="text" placeholder='Enter student name'  onChange={(e)=>setName(e.target.value)} />
          <input type="number" placeholder='Enter student id'  onChange={(e)=>setId(e.target.value)} />
          <select onChange={(e) => setGrade(e.target.value)}>
            <option value="">Select Grade</option>
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

      <div className="new">

        <select onChange={(e) => { if (e.target.value === "grade") { sortStudentByGrade(); } else if(e.target.value==="alphabet"){ sortByAlphabet(); }  else if(e.target.value==="id") {sortById();}  }} className='sort-select' name="" id="">
          <option value="none">Select Sort</option>
          <option value="grade"> Sort by Grade </option>
          <option value="alphabet">Sort by alphabetical order</option>
          <option value="id">Sort by ID</option>
        </select>

        <input type="text"  placeholder='Search Input' className='search' onChange={(e)=>setSearch(e)} />


      </div>

      <div className="student-list-header">

        <h4>Index</h4>
        <h4>Name</h4>
        <h4>Id</h4>
        <h4>Grade</h4>

      </div>



      <div className={student.length==0?"empty-list" : "student-list"}>
          {
            isGradeSort? (
              student.length==0? showStudent :
              gradeSort.map((gradeSort,index)=>(
                <div className="list" key={index} >
                    <p>{index+1}</p>
                    <p>{gradeSort.name}</p>
                    <p>{gradeSort.id}</p>
                    <p>{gradeSort.grade}</p>
                </div>
              ))
            ) : isAlphabetSort ? (
              student.length == 0? showStudent :
              alphabetSort.map((alphabetSort,index)=>(
                <div className="list" key={index} >
                  <p>{index+1}</p>
                  <p> {alphabetSort.name} </p>
                  <p> {alphabetSort.id} </p>
                  <p> {alphabetSort.grade} </p>
                </div> 
              ))
            ) : isIdSort ? (

              student.length==0? showStudent : 
              idSort.map((idSort,index)=>(
                <div className="list" key={index}>
                  <p> {index+1} </p>
                  <p> {idSort.name} </p>
                  <p> {idSort.id} </p>
                  <p> {idSort.grade} </p>
                </div>
              ))

            ): isSearching ? (
              student.length==0? showStudent :
              filteredStudents.map((filteredStudents,index)=>(
                <div className="list" key={index}>
                  <p>{index+1}</p>
                  <p>{filteredStudents.name}</p>
                  <p>{filteredStudents.id}</p>
                  <p>{filteredStudents.grade}</p>
                </div>
              ))
            ) : (
                student.length==0? showStudent :
                  student.map((student,index)=>(
                    <div className='list' key={index}>
                      <p> {index+1} </p>
                      <p>{student.name}</p>
                      <p>{student.id}</p>
                      <p>{student.grade}</p>
                    </div>
                  ))
              
            )
          }
      </div>
      
    </div>
  )
}

export default App
