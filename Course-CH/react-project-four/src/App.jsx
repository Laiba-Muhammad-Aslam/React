import './App.css'
import { Card } from './components/Card'
import { useState } from 'react'
import { Button } from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(count + 1)
  }
  return (
    <div>
      <Button counterIncrement={handleClick} text="Click Me">
        <h1>{count}</h1>
      </Button>
      {/* <Card name="Laiba Aslam">
      <h1>Frontend Developer</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, blanditiis!</p>
      </Card>

      <Card children="I am John">
        I am a children of this Card.
      </Card> */}
    </div>
  )
}

export default App
