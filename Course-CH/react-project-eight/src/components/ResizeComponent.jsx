import React, { useState, useEffect} from 'react'

function ResizeComponent() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);

      console.log("Event Listner Added")
      window.addEventListener('resize', handleResize)
      
    
      return () => {
        console.log("Event Listner Removed")
        window.removeEventListener('resize', handleResize)
      }
    }, [])
    
  return (
    <div>
      <h1>Window Width: {windowWidth}px</h1>
    </div>
  )
}

export default ResizeComponent
