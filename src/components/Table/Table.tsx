
import styles from "./styles.table.module.css";
import { StudentDataType, StudentTableHeadType } from "../../types";
import { getResult } from "../../services/APIs/result";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import MyPDFViewer, { MyPDFDocument } from "../shared/Results/Results";
// import { useState } from "react";

interface ITableProps {
  studentTableData?: StudentDataType[];
  studentTableHead: StudentTableHeadType[];
}

const Table = ({ studentTableData, studentTableHead }: ITableProps) => {
  // const [loading, setLoading] = useState(false)

  const handleDownload = async (id: number) => {
    // setLoading(true)
    const res = await getResult(id);
    if (res) {
      const fileName = "result.pdf";
      const blob = await pdf(
        <MyPDFDocument documentData={res?.data} />
      ).toBlob();

      saveAs(blob, fileName);
      // setLoading(false)
    }
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
                  <MyPDFViewer
                    handleClick={() => handleDownload(item.id)}
                    // loading={loading}
                  />
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
