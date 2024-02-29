import { useEffect, useState } from 'react'
import TreeList from './tree-list'
import { FaPlus, FaMinus } from 'react-icons/fa'

const TreeItem = ({ treeItem }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})
  const handleToggleChildren = (getCurrentLabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    })
  }
  useEffect(() => {
    console.log(displayCurrentChildren)
  }, [displayCurrentChildren])

  return (
    <li className="m-5">
      <div className="flex gap-5 text-white text-xl">
        <p>{treeItem.label}</p>
        {treeItem && treeItem.children && treeItem.children.length ? (
          <span
            className="cursor-pointer"
            onClick={() => handleToggleChildren(treeItem.label)}>
            {displayCurrentChildren[treeItem.label] ? (
              <FaMinus className="text-white size-6" />
            ) : (
              <FaPlus className="text-white size-6" />
            )}
          </span>
        ) : null}
      </div>
      {treeItem &&
      treeItem.children &&
      treeItem.children.length &&
      displayCurrentChildren[treeItem.label] ? (
        <TreeList treeList={treeItem.children} />
      ) : null}
    </li>
  )
}
export default TreeItem
