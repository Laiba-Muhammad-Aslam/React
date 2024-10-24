import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
  const navigate = useNavigate();

  function handleClick(){
    navigate("/dashboard")
  }
  return (
    <div>
      About
      <button onClick={handleClick}>Move to Dashboard</button>
    </div>
  )
}
