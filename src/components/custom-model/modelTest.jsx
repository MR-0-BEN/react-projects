import { useState } from 'react'
import Model from './model'

const ModelTest = () => {
  const [showModelPopup, setShowModelPopup] = useState(false)
  const closeModel = () => {
    setShowModelPopup(false)
  }

  return (
    <div className="text-center">
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl shadow-md"
        onClick={() => setShowModelPopup(!showModelPopup)}>
        Open Model Popup
      </button>
      {showModelPopup ? (
        <Model
          id={'custom id'}
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
          closeModel={closeModel}
          body={<div>Customize body</div>}
        />
      ) : null}
    </div>
  )
}
export default ModelTest
