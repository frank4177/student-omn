import React, { createContext, useReducer } from "react";
import { studentReducer } from "./reducer";
import { StudentDataType } from "../types";

export const GlobalContext = createContext<any>(null);

type StudentState = {
  students: StudentDataType[]; // Define StudentDataType as the type for your students array
};

// Define the initial state
const initialState: StudentState = {
  students: [],
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
