import { useState } from 'react'
import './App.css'
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn'

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Using if else condition 

  // if(isLoggedIn){
  //   return <LogoutBtn/>
  // }else{
  //   return <LoginBtn/>
  // }

  // Ternary Operator 

  // return(
  //   <div>
  //     {isLoggedIn ? <LogoutBtn/> : <LoginBtn/> }
  //   </div>
  // )

  // Logical operator and early return (false ky case mai login a btn show hoga neechy wala chaly ga hi nhi)

  if(!isLoggedIn){
    return(
      <LoginBtn/>
    )
  }

  return(
  <div>
      <h1>Welcome to my website</h1>
    <div>
      {isLoggedIn && <LogoutBtn/>}
    </div>
  </div>
  )
}

export default App
