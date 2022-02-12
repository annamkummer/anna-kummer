import photo from './assets/photo.jpeg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="cell">
          <h1 className="top left">My Story</h1>
        </div>
        <div className="cell"></div>
        <div className="cell">
          <h1 className="top right">Projects</h1>
        </div>
        <div className="cell"></div>
        <div className="cell">
          <img src={photo} className="profile-photo" alt="anna kummer" />
        </div>
        <div className="cell"></div>
        <div className="cell">
          <h1 className="bottom left">Connect</h1>
        </div>
        <div className="cell info">
          {/* <h3>Anna Kummer</h3>
          <h3>she/her pronunciations</h3>
          <h3>translations</h3>
          <h3>GitHub, LinkedIn, Email, Resume</h3>
          <h3>Something fun...</h3> */}
        </div>
        <div className="cell">
          <h1 className="bottom right">Settings</h1>
          {/* light/dark mode, dyslexic-friendly, color-blind-friendly */}


{/* pens 
  <p>Photo by <a href="https://unsplash.com/@olia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Olia Gozha</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </p>
*/}
          

{/* polka dots 
<p>Photo by <a href="https://unsplash.com/@mbuff?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sung Jin Cho</a> on <a href="https://unsplash.com/s/photos/polka-dots?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </p>*/}
          

{/* markers 
<p>Photo by <a href="https://unsplash.com/@olia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Olia Gozha</a> on <a href="https://unsplash.com/s/photos/pens?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
   </p>*/}
          

{/* markers2
<p>Photo by <a href="https://unsplash.com/@greg_rosenke?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Greg Rosenke</a> on <a href="https://unsplash.com/s/photos/pens?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </p> */}
          

{/* brownPen
<p>Photo by <a href="https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kelly Sikkema</a> on <a href="https://unsplash.com/s/photos/marker?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </p> */}

{/* whitePen
<p>Photo by <a href="https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kelly Sikkema</a> on <a href="https://unsplash.com/s/photos/marker?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </p> */}

{/* dark-mode
<p>Photo by <a href="https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kelly Sikkema</a> on <a href="https://unsplash.com/s/photos/marker?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </p> */}

{/* 
<p></p> */}
          
        </div>
      </header>
    </div>
  );
}

export default App;
