import React, { createContext, useReducer } from "react";
import { studentReducer } from "./reducer";
import { StudentDataType } from "../types";

export const GlobalContext = createContext<any>(null);

type StudentState = {
  students: StudentDataType[]; 
  isFetching: boolean
};

// Define the initial state
const initialState: StudentState = {
  students: [],
  isFetching: false
};


const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(studentReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        dispatch,
        state,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
