import '../scss/Tab.scss';

function Tab( { tabNumber, selectedTab, selectTab } ) {

  console.log(selectedTab)
  
  let leftColor = (tabNumber === 0 || tabNumber === 1 || tabNumber <= selectedTab) ?
                  tabNumber :
                  tabNumber - 1

  let rightColor = (tabNumber === 4 || tabNumber === 5 || tabNumber >= selectedTab) ?
                  tabNumber :
                  tabNumber + 1
  
  return (
    <div className={`tab tab-${tabNumber}`}>
        <button className={`main-color main-color-${tabNumber}`} value={tabNumber} onClick={(e) => selectTab(e)}></button>
        <div className={`bottom-colors`}>
            <div className={`left-color main-color-${leftColor}`}></div>
            <div className={`right-color main-color-${rightColor}`}></div>
        </div>
    </div>
  )
}

export default Tab;
