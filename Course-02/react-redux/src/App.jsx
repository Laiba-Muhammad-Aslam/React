import React, { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
      <h1 className='text-3xl bg-purple-500 p-2 text-center text-white'>Redux sy bani hui Todo App</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App