import { useEffect, useState } from 'react'
import './App.css';
import { RiCloseCircleLine } from "react-icons/ri"
import { BsFillPatchCheckFill } from "react-icons/bs"
import TodoForm from './components/TodoForm';
import AllTodos from './components/AllTodos';
import EmptyListChecker from './components/EmptyListChecker';
import todoService from './services/todos';
import loginService from './services/login'
import registerService from './services/register';

const App = () => {
  const [toDoList, setToDoList] = useState([])

  // Tilamuuttuja syötelomaketta varten
  // newToDo heijastaa koko ajan syötekentän arvoa
  const [newToDo, setNewToDo] = useState('')
  //const [counter, setCounter] = useState(1)
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('')
  const [newName, setNewName] = useState('')
  const [newUsername, setNewUsername] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [user, setUser] = useState(null)

  
  useEffect(() => {
    todoService
      .getAll()
      .then(initialTodos => {
        setToDoList(initialTodos)
      })
  }, [])

  const addToDo = (event) => {
    event.preventDefault()
    console.log('Add button was clicked and new task was added!', event.target)

    const toDoObject = {
      task: newToDo,
      //id: counter,
      check: false  
    }

    todoService
      .create(toDoObject)
      .then(returnedTodo => {
        setToDoList(toDoList.concat(returnedTodo))
        //setCounter(counter + 1)
        //console.log(`Amount of tasks: ${counter}`)
        setNewToDo('')
      })

  }

  const deleteToDo = (id, task) => {
    if (window.confirm('Do you want to delete this task?')) {
      todoService
      .deleteTodo(id)
      .then(() => {

        setToDoList(toDoList.filter(toDo => toDo.id !== id))
        console.log(`Task: "${task}" was deleted successfully!`)

      })
    }
  }

  const checkTodo = (id) => {
    todoService
    .update(id)
    .then(() => {
      const updatedTodos = toDoList.map(toDo => {
        if (toDo.id === id) {
          toDo.check = !toDo.check
        } return toDo
      })
      setToDoList(updatedTodos)
    })
  }

  /* Asettaa syötetyn tekstin uudeksi toDoksi
     Nappaa kaiken mitä tekstikenttään syötetään */
  const handleToDoChange = (event) => {
    setNewToDo(event.target.value)
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    console.log('logging in with', username, password)

    try {
      const user = await loginService.login({
        username, password,
      })
      console.log(user)
      todoService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      console.log('wrong credentials')
      alert("Wrong password or username!")
    }

  }

  const handleRegister = async (event) => {
    event.preventDefault()
    console.log('register in with', newUsername, newPassword)

    try {
      const newUser = {
        username: newUsername, 
        password: newPassword, 
        name: newName
      }

      await registerService.register(newUser)
      setNewName('')
      setNewUsername('')
      setNewPassword('')
      alert("User succesfully created!")
    } catch (error) {
      console.error('Registration failed:', error)
    }
    }
  

  const loginForm = () => (
    <>
    <h2>Login</h2>
    <form onSubmit={handleLogin}>
        <div>
          Username
          <input
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)} />
        </div>
        <div>
          Password
          <input
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)} />
        </div>
        <button type="submit">login</button>
      </form>
    </>
  )
  
  const registerForm = () => (
    <>
    <h2>Register</h2>
    <form onSubmit={handleRegister}>
        <div>
          Username
          <input
            type="text"
            value={newUsername}
            name="Username"
            onChange={({ target }) => setNewUsername(target.value)} />
        </div>
        <div>
          Name
          <input
            type="text"
            value={newName}
            name="Name"
            onChange={({ target }) => setNewName(target.value)} />
        </div>
        <div>
          Password
          <input
            type="password"
            value={newPassword}
            name="Password"
            onChange={({ target }) => setNewPassword(target.value)} />
        </div>
        <button type="submit">register</button>
      </form>
    </>
  )   

  const allComponents = () => (
    <>
    <TodoForm addToDo={addToDo} handleToDoChange={handleToDoChange} newToDo={newToDo} />
    <EmptyListChecker toDoList={toDoList} user={user} />
    <AllTodos toDoList={toDoList} checkTodo={checkTodo} RiCloseCircleLine={RiCloseCircleLine} 
    BsFillPatchCheckFill={BsFillPatchCheckFill} deleteToDo={deleteToDo} user={user} />
    </>
  )

  
  

  return (
    <div className="App">
      <div className="container">

        <h1>To Do List</h1>
        {!user && registerForm()}
        {!user && loginForm()}
        {user && allComponents()}

      </div>
    </div>
  );
}

export default App;
