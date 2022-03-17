import '../scss/Title.scss';
import { GoMarkGithub } from 'react-icons/go'
import { BsLinkedin } from 'react-icons/bs'
import resIcon from '../assets/resume.png'
import resume from '../assets/Anna_Kummer_Resume.pdf'

function Title() {

  return (
    <section className="section" id="title">
      <div className="title">
        <div className="home-name">
          <h1 className="home-first-name">Anna</h1>
          <h1 className="home-last-name">Kummer</h1>
        </div>
        <h2 className="home-title">Web Developer</h2>
        <div className="prof-links">
          <a href='https://github.com/annamkummer' 
            className='link' 
            title="GitHub" 
            target = "_blank" 
            rel="noreferrer">
              <GoMarkGithub className="prof-link gh" />
          </a>
          <a href={resume} 
            className='link' 
            title="resume" 
            target = "_blank" 
            rel="noreferrer">
              <img className="prof-link res" src={resIcon} alt="resume pdf" />
          </a>
          <a href='https://www.linkedin.com/in/anna-m-kummer/' 
            className='link' 
            title="LinkedIn" 
            target = "_blank" 
            rel="noreferrer">
              <BsLinkedin className="prof-link li" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Title;
