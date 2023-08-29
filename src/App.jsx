import './App.css'
import Form from './components/Form'
import { useState } from 'react'
import Display from './components/Display'

function App() {
  const [todoList, setTodoList] = useState([])

  return (
    <>
      <Form 
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <Display
        todoList={todoList}
        setTodoList={setTodoList}
      />

    </>
  )
}

export default App
