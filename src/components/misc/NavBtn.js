import '../../../src/scss/NavBtn.scss'

function NavBtn( { icon, text } ) {

    return (
        <button className='nav-btn'>
            {icon}
            <h2 className='nav-text'>{text}</h2>
        </button>
    )
}

export default NavBtn