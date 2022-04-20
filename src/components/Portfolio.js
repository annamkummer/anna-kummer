import '../scss/Portfolio.scss';
import { projects } from '../projects.js'
import Project from './Project'
import { useState } from 'react'
import TabContainer from './TabContainer'

function Portfolio() {

  const projectTabs = projects.map((project, i) => {
    return project.title
  })

  const [selectedTab, setSelectedTab] = useState(1)

  return (
    <section className="section" id="portfolio">
        <h3 className="section-header portfolio-header">Portfolio</h3>
        <TabContainer tabTitles={projectTabs} selectedTab={(tab) => setSelectedTab(tab)}/>
        <Project selectedProject={projects[selectedTab - 1].filePath} />
    </section>
  )
}

export default Portfolio;
