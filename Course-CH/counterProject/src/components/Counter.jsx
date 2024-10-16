import React, { useState } from 'react'
import "./Counter.css"

const Counter = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div className='counter-container'>
      <p id="para">You have clicked {counter} times</p>
      <button id='btn' onClick={() =>{
        setCounter(counter + 1)
      }}>Click me</button>
      <button id='dec' onClick={() =>{
        if(counter > 0){
            setCounter(counter - 1)
        }
      }}>Decrement me</button>
    </div>
  )
}

export default Counter
