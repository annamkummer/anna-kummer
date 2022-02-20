import photo from '../assets/photo.jpeg';
import '../scss/App.scss';
import { Routes, Route } from 'react-router-dom'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { GrDocumentPdf } from 'react-icons/gr'
import Nav from './Nav'
import Home from './views/Home'
import Settings from './views/Settings'
import Story from './views/Story'
import Portfolio from './views/Portfolio'
import Connect from './views/Connect'

function App() {
  console.log("Hello, World! Welcome to my site.")
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/story" element={<Story />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
          
    </div>
  );
}

export default App;
