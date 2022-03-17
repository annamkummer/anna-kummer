import '../scss/Footer.scss';

function Footer() {
  return (
    <footer className="footer">
        <h3>Settings: </h3>
        <p>toggle font</p>
        <p>toggle color</p>
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
