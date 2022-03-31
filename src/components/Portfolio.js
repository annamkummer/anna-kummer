import '../scss/Portfolio.scss';
import { projects } from '../projects.js'
import Project from './Project'
import { useState } from 'react'

function Portfolio() {

  const [selectedTab, setSelectedTab] = useState('latitude-longitude-bingo')

  const selectTab = (selection) => {
    setSelectedTab(selection)
  }

  const projectWindows = projects.map((project, i) => {
    return  <Project 
              key={i}
              photo={project.keyPhoto}
              heading={project.heading}
              title={project.title}
              path={project.filePath}
            />
  })

  return (
    <section className="section" id="portfolio">
        <h3 className="section-header portfolio-header">Portfolio</h3>
        <div className="tabs">
          <button className="project-tab bingo" onClick={() => {selectTab('latitude-longitude-bingo')}}>
            Latitude-Longitude Bingo
          </button>
          <button className="project-tab travel" onClick={() => {selectTab('travel-tracker')}}>
            Travel Tracker
          </button>
          <button className="project-tab tic" onClick={() => {selectTab('tic-tac-toe')}}>
            Tic-Tac-Toe
          </button>
          <button className="project-tab fitlit" onClick={() => {selectTab('fitlit')}}>
            FitLit
          </button> 
        </div>
        <Project selectedProject={selectedTab}/>
    </section>
  )
}

export default Portfolio;
