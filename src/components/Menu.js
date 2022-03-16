import '../scss/Menu.scss';
import { useState } from 'react'
import { GoHome, GoBook, GoFileCode, GoCommentDiscussion, GoGear } from 'react-icons/go'

function Menu() {

  const [showMenu, setShowMenu] = useState('')
  const toggleMenu = (e) => {
      e.preventDefault()
      setShowMenu(!showMenu)
  }

  return (
    <nav className="menu">
        <button className="hamburger" onClick={(e) => toggleMenu(e)}>
            <div className={`line show-a-${showMenu}`}></div>
            <div className={`line show-b-${showMenu}`}></div>
            <div className={`line show-c-${showMenu}`}></div>
        </button>

        <div className={`menu-${showMenu}`}>
          <a className="title-link" href="#title"><GoHome className='nav-icon' /> Home</a>
          <a className="story-link" href="#story"><GoBook className='nav-icon' /> My Story</a>
          <a className="portfolio-link" href="#portfolio"><GoFileCode className='nav-icon' /> Portfolio</a>
          <a className="connect-link" href="#connect"> <GoCommentDiscussion className='nav-icon' /> Connect</a>
        </div>
    </nav>
  )
}

export default Menu;
