import '../scss/Home.scss';
import Menu from './Menu'
import Title from './Title'
import Story from './Story'
import Portfolio from './Portfolio'
import Connect from './Connect'
import Footer from './Footer'

function Home() {
  return (
    <div className="home">
        <Menu />
        <Title />
        <Story />
        <Portfolio />
        <Connect />
        <Footer />
    </div>
  )
}

export default Home;
