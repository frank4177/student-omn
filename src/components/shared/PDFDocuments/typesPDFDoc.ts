// ResultsPDFDocument types
export type CumulativeType = {
    gpatd: number;
    gpats: number;
    gptd: number;
    gpts: number;
    remarks: string;
    untd: number;
    unts: number;
  };
  
  export type ResultsType = {
    code: string;
    creditUnit: number;
    grade: string;
    title: string;
    totalPoint: number;
  };

  export type DataType = {
    age: number;
    cummulative: CumulativeType
    firstname: string;
    gender: string;
    id: number;
    level: string;
    reg_no: string;
    result: ResultsType[]; 
    session: string;
    state: string;
    surname: string;
  };
  
  export type ResultsDocType = {
    logo: string;
    profile_picture: string;
    data: DataType
    message: string
  };
  