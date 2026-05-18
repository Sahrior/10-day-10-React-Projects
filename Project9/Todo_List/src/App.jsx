import React, { useState } from 'react'

const App = () => {

  const [task, setTask] = useState("")
  const [allTask, setAllTask] = useState([])

  const addTask = () => {

    const newTask = task

    setAllTask([...allTask,newTask])

  }



  return (
    <div className='main' >

      <div className="screen">

          <div className="header">
            Todo List
          </div>

          <div className="enter">
            <input onChange={(e)=>setTask(e.target.value)} type="text" placeholder='Add Your Task'  />
            <button onClick={addTask} >+</button>
          </div>

            {allTask.map((task, index) => (
              <div className="tasks" key={index}>
                <div className="task">
                  {task}
                  <button>🗑️</button>
                </div>
              </div>
            ))}




      </div>
      
    </div>
  )
}

export default App
