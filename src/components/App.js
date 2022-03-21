import '../scss/App.scss';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './Home'
import ProjectDetails from './ProjectDetails'

function App() {

  const [dyslexiaFriendly, setDyslexiaFriendly] = useState(false)

  const toggleDyslexiaMode = () => {
    setDyslexiaFriendly(!dyslexiaFriendly)
  }
  
  return (
    <div className={`app dyslexia-friendly-${dyslexiaFriendly}`}>
      {console.log("Hello, world! Welcome!")}
          <Routes>
            <Route path='/' element={<Home dyslexiaMode={toggleDyslexiaMode}/>} />
            <Route path='/:project' element={<ProjectDetails />} />
          </Routes>
    </div>
  )
}

export default App;
