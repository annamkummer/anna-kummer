import '../scss/TabContainer.scss';
import Tab from './Tab'
import { useState } from 'react'

function TabContainer( { tabTitles } ) {

    const [selectedProject, setSelectedProject] = useState(1)

    const tabs = []

    for (let i = 0; i < tabTitles.length + 2; i++) {
      let num = (i === 0) ? 'first' : 
        (i === tabTitles.length + 1) ? 'last' :
        i
      tabs.push(<Tab tabNumber={num} selectedTab={selectedProject}/>)
    }

  return (
    <section className="tab-container">
        {tabs}
    </section>
  )
}

export default TabContainer;
