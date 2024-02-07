import React, { useState } from "react";
import styles from "./styles.table.module.css";
import { StudentDataType, StudentTableHeadType } from "../../types";
import Button from "../Buttons/Button";
import { getResult } from "../../services/APIs/result";
import Modal from "../shared/Modal/Modal";
import Results from "../shared/Results/Results";
import MyPDFViewer from "../pdf";

interface ITableProps {
  studentTableData?: StudentDataType[];
  studentTableHead: StudentTableHeadType[];
}

const Table = ({ studentTableData, studentTableHead }: ITableProps) => {
  const [modal, setToggleModal] = useState(false);
  const [studentResult, setStudentResult] = useState();

  console.log(studentResult)

  const handleDownload = async (id: number) => {
   const res = await getResult(id);

   setStudentResult(res.data)
  };


  return (
    <div className={styles.table__container}>
      <div className={styles.table__wrapper}>
        <table className={styles.table}>
          <thead className={styles.table__head}>
            <tr>
              {studentTableHead?.map((item) => (
                <th key={item.Header}>{item.Header}</th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.table__body}>
            {studentTableData?.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.surname}</td>
                <td>{item.firstname}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.level}</td>
                <td>{item.state}</td>
                <td>
                     <MyPDFViewer handleClick={()=>handleDownload(item.id)} data={studentResult}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
