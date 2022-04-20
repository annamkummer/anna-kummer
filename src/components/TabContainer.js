import '../scss/TabContainer.scss';
import Tab from './Tab'
import { useState } from 'react'

function TabContainer( { tabTitles, selectedTab } ) {

    const [selectedProject, setSelectedProject] = useState(1)

    const selectProject = (e) => {
      let tabNum = Number(e.target.value)
      let tab = (tabNum === 0 || tabNum === 5) ? 1 : tabNum
      setSelectedProject(tab)
      selectedTab(tab)
    }

    const tabs = []
    for (let i = 0; i < tabTitles.length + 2; i++) {
      tabs.push(<Tab key={i} tabNumber={i} selectedTab={selectedProject} selectTab={(e) => selectProject(e)}/>)
    }

  return (
    <section className="tab-container">
        {tabs}
    </section>
  )
}

export default TabContainer;
