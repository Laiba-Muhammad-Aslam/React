import React, { useContext } from 'react'
import {UserContext} from "../App"
import {ThemeContext} from "../App"

function ChildC() {
    const user = useContext(UserContext)
    // PROJECT 
    const {theme, setTheme} = useContext(ThemeContext)

    function toggleTheme(){
        if(theme === "light"){
            setTheme("dark")
        }
        else{
            setTheme("light")
        }
    }
  return (
    <div>
      {/* {user.name} */}
      <button onClick={toggleTheme}>
        Change Theme
      </button>
      data: {user.name}
    </div>
  )
}

export default ChildC
