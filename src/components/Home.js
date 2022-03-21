import '../scss/Home.scss';
import Menu from './Menu'
import Title from './Title'
import Story from './Story'
import Portfolio from './Portfolio'
import Connect from './Connect'
import Footer from './Footer'
import { useState } from 'react'


function Home( { dyslexiaMode } ) {

  const [pulse, setPulse] = useState(false)

  const pulseSettings = () => {
    setPulse(true)

    setTimeout(() => setPulse(false), 3000)

  }

  return (
    <div className="home" id="home">
        <Menu pulseSettings={pulseSettings}/>
        <Title />
        <Story />
        <Portfolio />
        <Connect />
        <Footer pulse={pulse} dyslexiaMode={dyslexiaMode}/>
    </div>
  )
}

export default Home;
