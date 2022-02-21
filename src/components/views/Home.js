import '../../../src/scss/Home.scss'
import photo from '../../../src/assets/photo.jpeg'
import Link from '../misc/Link.js'
import { GoMarkGithub } from 'react-icons/go'
import { BsLinkedin } from 'react-icons/bs'
import { VscFilePdf } from 'react-icons/vsc'

function Home() {

    const links = [
        "GitHub", 
        "Resume", 
        "LinkedIn"
    ]

    const icons = [
        <GoMarkGithub className="link-icon" />, 
        <VscFilePdf className="link-icon" />, 
        <BsLinkedin className="link-icon" />
    ]

    const homeLinks = links.map((link, i) => {
        return <Link icon={icons[i]} text={link} />
    })

    return (
        <div className="home">
            <h1 className="home-name">Anna Kummer</h1>
            <h1 className="home-title">Web Developer</h1>
            <img className="amk" src={photo} alt="Anna Kummer" />
            <section className="home-links">
                {homeLinks}
            </section>
        </div>
    )
}

export default Home