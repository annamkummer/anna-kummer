import '../scss/Title.scss';
import { GoMarkGithub } from 'react-icons/go'
import { BsLinkedin } from 'react-icons/bs'
import { VscFilePdf } from 'react-icons/vsc'
import res from '../assets/resume.png'

// import pdf from '../../../src/assets/Anna_Kummer_Resume.pdf'

function Title() {
  return (
    <section className="section" id="title">
      <div className="title">
        <h1 className="home-name">Anna Kummer</h1>
        <h2 className="home-title">Web Developer</h2>
        <div className="prof-links">
          <GoMarkGithub className="prof-link" />
          <BsLinkedin className="prof-link" />
          <img className="prof-link" src={res} alt="resume pdf" />
        </div>
      </div>
    </section>
  )
}

export default Title;
