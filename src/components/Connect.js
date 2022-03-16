import '../scss/Connect.scss';

function Connect() {
  return (
    <section className="section" id="connect">
      <div className="connect">
        <h3 className="section-header">Connect</h3>
        <div className="par-text connect-par">
          <p className="p connect-p">If you're interested in reaching out, I'd love to hear from you!</p>
          <p className="p connect-p">Connect with me on 
            <a href='https://www.linkedin.com/in/anna-m-kummer/' 
              className='inline-li' 
              title="LinkedIn" 
              target = "_blank" 
              rel="noreferrer">
                LinkedIn
              </a> 
               or send me an email at annamkummer@gmail.com.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Connect;
