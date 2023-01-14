import { createContext, useReducer } from "react";
import { reducer, initialstate } from "./reducer";

export const contextApi = createContext();

export const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <contextApi.Provider value={{ state, dispatch }}>
      {children}
    </contextApi.Provider>
  );
};
