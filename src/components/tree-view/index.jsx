import TreeList from './tree-list'

const TreeView = ({ treeData = [] }) => {
  console.log(treeData)

  return (
    <div className=" pt-5 pl-5 tree-view-container min-h-[100vh] w-[350px] bg-[#00476E]">
      <TreeList treeList={treeData} />
    </div>
  )
}
export default TreeView
