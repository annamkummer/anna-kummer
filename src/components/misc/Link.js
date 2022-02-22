import '../../../src/scss/Link.scss'


function Link( { icon, text, link } ) {

    return (
        // <button className='link' title={text} onClick={}>
        <a href = {link} className='link' title={text} target = "_blank" rel="noreferrer">{icon}</a>
        // </button>
    )
}

export default Link