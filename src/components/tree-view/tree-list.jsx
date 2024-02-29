import TreeItem from './tree-item'

const TreeList = ({ treeList = [] }) => {
  return (
    <ul className="tree-list-container ">
      {treeList && treeList.length
        ? treeList.map((listItem, index) => {
            return <TreeItem key={index} treeItem={listItem} />
          })
        : null}
    </ul>
  )
}
export default TreeList
