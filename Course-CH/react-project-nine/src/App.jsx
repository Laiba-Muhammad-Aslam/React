import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

// step 1: create context 
const UserContext = createContext();
// step 2: wrap all the child inside a provider 
// step 3: pass the value 
// step 4: consumer mai jaky value consume krlo

// PROJECT 

const ThemeContext = createContext();

function App() {
  const [user, seUser] = useState({name: "Laiba"})

  // PROJECT 

  const [theme, setTheme] = useState("light")

  return (
 
      <UserContext.Provider value={user}>
      <ThemeContext.Provider value={{theme, setTheme}} >
       <div id="container" style={{backgroundColor:theme=== "light"?"beige":"black"}}>
       <ChildA/>
       </div>
      </ThemeContext.Provider>
      </UserContext.Provider>
    
    // <div>
    //   <UserContext.Provider value={user}>
    //   <ChildA/>
    //   </UserContext.Provider>
      
    // </div>
  )
}

export default App
export {UserContext}
export {ThemeContext}