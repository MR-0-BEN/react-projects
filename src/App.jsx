import Accordion from './components/accordion'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'
import ImageSlider from './components/image-slider'
import LoadMoreData from './components/load-more-data'
import TreeView from './components/tree-view'
import treeData from './components/tree-view/data'
import QRCodeGenerator from './components/QR-code-generator'
import LightDarkMode from './components/light-and-dark-mode'
import ScrollIndicator from './components/scroll-indicator'
import { CustomTabs } from './components/custom-tabs'
import ModelTest from './components/custom-model/modelTest'
import GithubProfileFinder from './components/github-profile-finder'
import SearchAutoComplete from "./components/search-auto-complete"
import TicTacToe from './components/tic-tac-toe'
import FeatureFlagsGlobalContext from './components/feature-flag/context'
import FeatureFlags from './components/feature-flag'
import UseFetchHook from './components/use-fetch/test'
import UseOnclickOutsideTest from './components/use-outside-click/test'
import UseWindowResizeTest from './components/use-window-resize/test'
import ScrollToTopAndBottom from './components/scroll- to-top- and-bottom'

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
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} /> */}

      {/* Load more data component */}
      {/* <LoadMoreData/> */}

      {/* Tree view component */}
      {/* <TreeView treeData={treeData} /> */}

      {/* QR code Generator component */}
      {/* <QRCodeGenerator/> */}

      {/* Light Dark Mode component  */}
      {/* <LightDarkMode/> */}

      {/* Scroll indicator */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit="} limit={100} /> */}

      {/* Tabs custom component */}
      {/* <CustomTabs /> */}

      {/* Custom Model  */}
      {/* <ModelTest/> */}

      {/* Github profile finder Component  */}
      {/* <GithubProfileFinder /> */}

      {/*Search auto complete Component */}
      {/* <SearchAutoComplete/> */}

      {/* Tic Tac Toe Component  */}
      {/* <TicTacToe/> */}

      {/* Feature Flag Implementation  */}
      {/* <FeatureFlagsGlobalContext>
        <FeatureFlags/>
      </FeatureFlagsGlobalContext> */}

      {/* useFetch - Custom hook */}
      {/* <UseFetchHook/> */}

      {/* Use onClick Outside hook */}
      {/* <UseOnclickOutsideTest/> */}

      {/* Use  Window Resize hook Test */}
      {/* <UseWindowResizeTest/> */}

      {/* Scroll to Top and Bottom feature */}
      <ScrollToTopAndBottom/>
    </>
  );
}

export default App
