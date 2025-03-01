import { createContext } from "react";

export const ContextProvider = createContext();

const DisplayContextProvider = (props) => {
  const title = "Manish Sharma";

  return (
    <ContextProvider.Provider value={{ title }}>
      {props.children}
    </ContextProvider.Provider>
  );
};

export default DisplayContextProvider;
