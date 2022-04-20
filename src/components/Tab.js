import '../scss/Tab.scss';
import { useState } from 'react'

function Tab( { tabNumber, selectedTab } ) {

  const [selected, setSelected] = useState(false)

    const setSelectedProject = () => {
        console.log(tabNumber)
    }

  return (
    <div className={`tab tab-${tabNumber}`}>
        <button className={`main-color main-color-${tabNumber}`} onClick={setSelectedProject}></button>
        <div className={`bottom-colors bottom-colors-${tabNumber}`}>
            <div className={`left-color left-color-${tabNumber}-${selected}`}></div>
            <div className={`right-color right-color-${tabNumber}-${selected}`}></div>
        </div>
    </div>
  )
}

export default Tab;
