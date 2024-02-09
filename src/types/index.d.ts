z;
// student types
export type StudentDataType = {
  age: number;
  firstname: string;
  gender: string;
  id: number;
  level: string;
  state: string;
  surname: string;
};

export type StudentTableHeadType = {
  Header: string;
};

// Select component types
export type SelectOptionsType = {
  value: number | string;
  label: string | number;
};

export type FilterType = {
  age: string;
  state: string;
  level: string;
  gender: string;
};

export type FilterTypeArg = {
  arg: FilterType;
};

