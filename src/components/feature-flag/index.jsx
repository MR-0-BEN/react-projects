import { useContext } from "react";
import Accordion from "../accordion";
import LightDarkMode from "../light-and-dark-mode";
import RandomColor from "../random-color";
import TicTacToe from "../tic-tac-toe";
import TreeView from "../tree-view";
import treeData from "../tree-view/data";
import { FeatureFlagsContext } from "./context";

const FeatureFlags = () => {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);
  const componentToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    { key: "showTicTacToe", component: <TicTacToe /> },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordion",
      component: <Accordion />,
    },
    {
      key: "showTreeView",
      component: <TreeView treeData={treeData} />,
    },
  ];
  const checkEnableComponent = (currentKey) => {
    return enabledFlags[currentKey];
  };

  if (loading) return <h1>Loading Data ! Please Wait</h1>;

  return (
    <div>
      <h1 className="text-4xl font-semibold text-center mb-8">Feature Flags</h1>
      {componentToRender.map((componentItem) =>
        checkEnableComponent(componentItem.key)
          ? componentItem.component
          : null,
      )}
    </div>
  );
};
export default FeatureFlags;
