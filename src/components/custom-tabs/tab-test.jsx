import Tabs from './tabs'

const RandomComponent = () => {
  return <div>Random Content</div>
}

const TabTest = () => {
  const tabs = [
    {
      label: 'tab 1',
      content: <div>this is content for tab 1</div>,
    },
    {
      label: 'tab 2',
      content: <div>this is content for tab 2</div>,
    },
    {
      label: 'tab 3',
      content: <RandomComponent />,
    },
  ]

  return <Tabs tabsContent={tabs} />
}
export default TabTest
