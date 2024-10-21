import { useState } from 'react'
import './App.css'

function App() {

  function handleClick(){
    alert("I got clicked")
  }

  function handleInputChange(e){
    console.log(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    alert("form submitted")
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputChange} />
      <button type='submit'>Submit</button>
    </form>
    {/* <button onClick={handleClick}>Click me</button> */}
    </>
  )
}

export default App
