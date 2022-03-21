import '../scss/Footer.scss';
import Toggle from './Toggle'

function Footer( { pulse, dyslexiaMode } ) {

  return (
    <footer className="footer">
      <div className="settings">
        <h3 className={`settings-label pulse-${pulse} dyslexia-friendly-true` }>Settings: </h3>
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
