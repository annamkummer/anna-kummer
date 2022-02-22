import '../../../src/scss/Home.scss'
import photo from '../../../src/assets/photo.jpeg'
import Link from '../misc/Link.js'
import { GoMarkGithub } from 'react-icons/go'
import { BsLinkedin } from 'react-icons/bs'
import { VscFilePdf } from 'react-icons/vsc'
import pdf from '../../../src/assets/Anna_Kummer_Resume.pdf'

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

    const refs = [
        'https://github.com/annamkummer',
        pdf,
        'https://www.linkedin.com/in/anna-m-kummer/'
    ]

    const homeLinks = links.map((link, i) => {
        return <Link key={i} icon={icons[i]} text={link} link={refs[i]} />
    })

    return (
        <div className="home">
            <h1 className="home-name">Anna Kummer</h1>
            <h1 className="home-title">Web Developer</h1>
            {/* <div className="square"></div>
            <div className="square2"></div> */}
            <img className="amk" src={photo} alt="Anna Kummer" />
            <section className="home-links">
                {homeLinks}
            </section>
        </div>
    )
}

export default Home