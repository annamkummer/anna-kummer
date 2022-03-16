import '../scss/App.scss';
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import ProjectDetails from './ProjectDetails'

function App() {
  return (
    <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:project' element={<ProjectDetails />} />
          </Routes>
    </div>
  )
}

export default App;
