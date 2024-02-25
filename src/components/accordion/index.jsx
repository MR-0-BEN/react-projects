import { useState } from 'react'
import data from './data'

const Accordion = () => {
  const [selected, setSelected] = useState(null)
  const [enableMultiSelection, setEnableMultiSelection] = useState(false)
  const [multi, setMulti] = useState([])

  const handleSingleSelection = (getCurrentId) => {
    // console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId)
  }
  const handleMultiSelection = (getCurrentId) => {
    const copyMulti = [...multi]
    const IndexOfCurrentId = copyMulti.indexOf(getCurrentId)
    console.log(IndexOfCurrentId)
    if (IndexOfCurrentId === -1) copyMulti.push(getCurrentId)
    else copyMulti.splice(IndexOfCurrentId, 1)
    setMulti(copyMulti)
  }
  return (
    <div className="wrapper">
      <div className="accordion ">
        <button
          className="button"
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
          Enable MultiSelection
        </button>
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            return (
              <div className="item" key={dataItem.id}>
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="title">
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {enableMultiSelection
                  ? // if the index of item in the multi list show it
                    multi.indexOf(dataItem.id) !== -1 && (
                      <div className="content">{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="content">{dataItem.answer}</div>
                    )}
              </div>
            )
          })
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  )
}
export default Accordion
