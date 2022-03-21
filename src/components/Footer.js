import '../scss/Footer.scss';
import Toggle from './Toggle'
import { HiArrowRight } from 'react-icons/hi'

function Footer( { pulse, dyslexiaMode } ) {

  return (
    <footer className="footer">
      <div className="settings">
        <div className={`settings-label dyslexia-friendly-true` }>
          <h3>Settings: </h3>
          <HiArrowRight className={`pulse-${pulse} arrow-1`}/> 
          <HiArrowRight className={`pulse-${pulse} arrow-2`}/> 
          <HiArrowRight className={`pulse-${pulse} arrow-3`}/> 
        </div>
        <Toggle label="Dyslexia-friendly mode" onClick={dyslexiaMode} />
        <Toggle label="Colorblind-friendly mode" onClick={console.log('toggle color')} />
      </div>
        <div className="img-credits">
          <p className="credit">Keyboard Photo by 
            <a className="ref" href="https://unsplash.com/@skabrera?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Sergi Kabrera
            </a> on 
            <a className="ref" href="https://unsplash.com/s/photos/keyboard?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </p>
          <p className="credit">Pink Circles 
            <a className="ref" href='https://www.freepik.com/vectors/background'>
              Background vector created by Sketchepedia - www.freepik.com
            </a>
          </p>
        </div>
    </footer>
  )
}

export default Footer;
