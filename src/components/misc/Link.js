import '../../../src/scss/Link.scss'

function Link( { icon, text } ) {

    return (
        <button className='link' title={text}>
            {icon}
            {/* <h3 className='link-text'>{text}</h3> */}
        </button>
    )
}

export default Link