
// student types
export type StudentDataType = {
    age: number;
    firstname: string;
    gender: string
    id: number;
    level: string;
    state: string;
    surname: string;
  };

  export type StudentTableHeadType = {
    Header: string
  }


  // Select component types
  export type LevelsType ={
    id: number
    level: string
  }

  export type AgesType ={
    id: number
    age: number
  }

  export type GenderType ={
    id: number
    gender: string
  }

  export type StateType ={
    id: number
    name: string
  }

  export type SelectOptionsType = {
    value: number | string
    label: string | number
  }