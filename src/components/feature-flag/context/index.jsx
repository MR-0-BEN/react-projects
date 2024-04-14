import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";
export const FeatureFlagsContext = createContext(null);

const FeatureFlagsGlobalContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [enabledFlags, setEnabledFlags] = useState({});

  const fetchFeatureFlags = async () => {
    try {
      const response = await featureFlagsDataServiceCall();
      setEnabledFlags(response);
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
      throw new Error(error);
    }
  };
  useEffect(() => {
    fetchFeatureFlags();
  }, []);
  return (
    <FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
};
export default FeatureFlagsGlobalContext;
