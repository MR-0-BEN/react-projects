import Accordion from './components/accordion'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'
import ImageSlider from './components/image-slider'

function App() {
  return (
    <>
      {/* Accordion component  */}
      {/* <Accordion/> */}

      {/* Random color component  */}
      {/* <RandomColor/> */}

      {/* star rating component  */}
      {/* <StarRating/> */}

      {/* image slider component  */}
      <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} />
    </>
  )
}

export default App
