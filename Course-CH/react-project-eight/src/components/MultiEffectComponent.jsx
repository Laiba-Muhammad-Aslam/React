import React, { useState, useEffect } from 'react'

function MultiEffectComponent() {
    const [count, setCount] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      console.log("Count Changed: ", count);
    }, [count]);

    useEffect(() => {
      const intervalId = setInterval(() =>{
        console.log("set interval started")
        setSeconds(prevSeconds => prevSeconds + 1)
      }, 1000)
    
      return () => {
        console.log("Time to Stop")
        clearInterval(intervalId)
      }
    }, [])
    
    
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <h2>Seconds: {seconds}</h2>
    </div>
  )
}

export default MultiEffectComponent
