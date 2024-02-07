import { StudentDataType } from "../types";

type actionType ={
    type: string
    payload:StudentDataType[]
}

type StudentState = {
    students: StudentDataType[]; 
  };

export const studentReducer = (state: StudentState, action:actionType) => {
    switch (action.type) {
      case "FETCH_STUDENTS":
        return {
          ...state,
          students: action.payload
        };
        case "IS_FETCHING":
          return {
            ...state,
            isFetching: action.payload
          };
      default:
        return state;
    }
  };
  