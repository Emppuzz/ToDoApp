import { useState } from 'react'
import './App.css';
import { RiCloseCircleLine } from "react-icons/ri"
import { BsFillPatchCheckFill } from "react-icons/bs"
import TodoForm from './components/TodoForm';
import AllTodos from './components/AllTodos';
import EmptyListChecker from './components/EmptyListChecker';

const App = () => {
  const [toDoList, setToDoList] = useState([])
  const [newToDo, setNewToDo] = useState('')
  const [counter, setCounter] = useState(1)

  const addToDo = (event) => {
    event.preventDefault()
    console.log('Add button was clicked and new task was added!', event.target)

    const toDoObject = {
      task: newToDo,
      id: counter,
      check: false  
    }
    setToDoList(toDoList.concat(toDoObject))

    setCounter(counter + 1)
    console.log(`Amount of tasks: ${counter}`)

    setNewToDo('')
  }

  const deleteToDo = (id, task) => {
    if (window.confirm('Do you want to delete this task?')) {
      setToDoList(toDoList.filter(toDo => toDo.id !== id))
      console.log(`Task: "${task}" was deleted successfully!`)
    }
  }

  const handleToDoChange = (event) => {
    setNewToDo(event.target.value)
  }

  const checkTodo = (id) => {
   const updatedTodos = toDoList.map(toDo => {
      if (toDo.id === id) {
        toDo.check = !toDo.check
      } return toDo
    })
      setToDoList(updatedTodos)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>To Do List</h1>
        <TodoForm addToDo={addToDo} handleToDoChange={handleToDoChange} newToDo={newToDo} />

        <EmptyListChecker toDoList={toDoList} />

        <AllTodos toDoList={toDoList} checkTodo={checkTodo} RiCloseCircleLine={RiCloseCircleLine} 
        BsFillPatchCheckFill={BsFillPatchCheckFill} deleteToDo={deleteToDo} />
      </div>
    </div>
  );
}

export default App;
