import '../scss/Nav.scss'
import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import NavBtn from './misc/NavBtn'
import { GoHome, GoBook, GoFileCode, GoCommentDiscussion, GoGear } from 'react-icons/go'
import { useEffect } from 'react'

function Nav() {
    
    const location = useLocation().pathname

    const [navLocation, setNavLocation] = useState('center')

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

    useEffect(() => {
        location === '/' ? setNavLocation('center') : setNavLocation('sidebar') 
    }, [location])

    return (
        <nav className={navLocation}>
            <NavLink to="/" className={`${navLocation}-home`}><NavBtn icon={icons[0]} text={views[0]} /></NavLink>
            <NavLink to="/story" className={`${navLocation}-story`}><NavBtn icon={icons[1]} text={views[1]} /></NavLink>
            <NavLink to="/portfolio" className={`${navLocation}-portfolio`}><NavBtn icon={icons[2]} text={views[2]} /></NavLink>
            <NavLink to="/connect" className={`${navLocation}-connect`}><NavBtn icon={icons[3]} text={views[3]} /></NavLink>
            <NavLink to="/settings" className={`${navLocation}-settings`}><NavBtn icon={icons[4]} text={views[4]} /></NavLink>
        </nav>
    )
}

export default Nav