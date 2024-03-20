import { useState } from 'react'

const Tabs = ({ tabsContent }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0)

  console.log(tabsContent[currentTabIndex].content)
  return (
    <div className=" p-2 items-start">
      <div className=" flex justify-center  mb-3">
        {tabsContent.map((tab, index) => {
          return (
            <div
              className={`${
                currentTabIndex === index
                  ? 'border-black  bg-[#a1d600]  tabNumber '
                  : 'bg-[#4e016a] tabNumber '
              } `}
              onClick={() => setCurrentTabIndex(index)}
              key={tab.label}>
              <span className="label">{tab.label}</span>
            </div>
          )
        })}
      </div>
      <div className=" text-black py-5 px-2 h-[300px] overflow-auto bg-white text-center">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  )
}
export default Tabs
