import '../scss/Story.scss';
import pic from '../assets/pic.jpeg'

function Story() {
  return (
    <section className="section" id="story">
        <h3 className="section-header">My Story</h3>
        <div className="par">
          <img className="profile-pic" src={pic} alt="Anna Kummer" />
          <div className="par-text">
            <p className="p">Hello, world! Welcome to my site. I'm Anna (<span className="ipa">/ ˈænə /</span>).</p>
            <p className="p">I'm an empathetic, compassionate human, and I strive to be 
              the same as a developer. 
            </p>
            <p className="p">Before transitioning to software development, I studied linguistics and foreign
              languages, and most recently worked in the life sciences translation industry. I've collaborated
              with diverse teams from around the world, lead complex projects with multiple stakeholders 
              and many moving parts, and mentored junior colleagues.</p>
            <p className="p">I was drawn to software development in part by my love of lifelong learning and 
              desire to be a part of building the tools of the future, and in part by the knowledge that the 
              tech industry needs my unique voice. As a strong believer in the value of diverse perspectives, 
              I hope to build my software career around promoting diversity both in my workplace and for my 
              users.
            </p>
          </div>
        </div>
        <div className="par">
          <div className="par-text">
            <p className="p">When I'm not coding, I enjoy hiking Colorado's beautiful trails,
              playing viola in the Boulder Symphony, and curling up with my cat and 
              a good book.
            </p>
            <p className="p">I hope you scroll down and take a look at a few of the projects I'm most proud of.</p>
          </div>
        </div>

    </section>
  )
}

export default Story;
