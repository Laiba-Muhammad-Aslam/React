import { useState } from 'react'
import UserCard from './components/UserCard'
import './App.css'
import hamburger from "./assets/hamburger.jpg"
import apple from "./assets/apple.jpg"
import grapes from "./assets/grapes.jpg"

function App() {

  return (
    <div className='container'>
      <UserCard name="hamburger" desc="Hello I am hamburger" image={hamburger} style={{"border-radius": "20px"}}/>
      <UserCard name="banana" desc="Hello I am Apple" image={apple}/>
      <UserCard name="grapes" desc="Hello I am Grapes" image={grapes}/>
    </div>
  )
}

export default App
