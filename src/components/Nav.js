import '../scss/Nav.scss'
import { NavLink } from 'react-router-dom'
import NavBtn from './misc/NavBtn'
import { GoHome, GoBook, GoFileCode, GoCommentDiscussion, GoGear } from 'react-icons/go'

function Nav() {

    const views = [
        "Home", 
        "My Story", 
        "Portfolio", 
        "Connect", 
        "Settings"]

    const icons = [
        <GoHome className='nav-icon' />, 
        <GoBook className='nav-icon' />, 
        <GoFileCode className='nav-icon' />, 
        <GoCommentDiscussion className='nav-icon' />, 
        <GoGear className='nav-icon' />
    ]

    return (
        <nav className='navbar'>
            <NavLink to="/" className='navlink'>
                <NavBtn icon={icons[0]} text={views[0]} />
            </NavLink>
            <NavLink to="/story" className='navlink'>
                <NavBtn icon={icons[1]} text={views[1]} />
            </NavLink>
            <NavLink to="/portfolio" className='navlink'>
                <NavBtn icon={icons[2]} text={views[2]} />
            </NavLink>
            <NavLink to="/connect" className='navlink'>
                <NavBtn icon={icons[3]} text={views[3]} />
            </NavLink>
            <NavLink to="/settings" className='navlink'>
                <NavBtn icon={icons[4]} text={views[4]} />
            </NavLink>
        </nav>
    )
}

export default Nav