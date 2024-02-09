import styles from "./styles.table.module.css";
import { StudentDataType, StudentTableHeadType } from "../../types";
import { getResult } from "../../services/APIs/result";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import { useState } from "react";
import { ResultPDFDocument } from "../shared/PDFDocuments/ResultPDFDocument";
import Button from "../Buttons/Button";
import Spinner from "../shared/Loaders/Spinner";

interface ITableProps {
  studentTableData?: StudentDataType[];
  studentTableHead: StudentTableHeadType[];
}

const Table = ({ studentTableData, studentTableHead }: ITableProps) => {
  const [loading, setLoading] = useState<boolean | number>(false);

  const handleDownload = async (id: number) => {
    setLoading(id);
    const res: any = await getResult(id);
    
    if (res?.status === 200) {
      const fileName = "result.pdf";
      const blob = await pdf(
        <ResultPDFDocument documentData={res?.data} />
      ).toBlob();

      saveAs(blob, fileName);
      setLoading(false);
    }else{
      setLoading(false);
    }
  };

  return (
    <div className={styles.table__container}>
      <div className={styles.table__wrapper}>
        <table className={styles.table}>
          <thead className={styles.table__head}>
            <tr>
              {studentTableHead?.map((item) => (
                <th
                  key={item.Header}
                  style={{
                    textAlign: item.Header === "Action" ? "center" : undefined,
                  }}
                >
                  {item.Header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.table__body}>
            {studentTableData?.map((item) => {
              const isLoading = loading === item.id;
              return (
                <tr key={item.id}>
                  <td>{item.id < 10 ? <span>0{item.id}</span> : item.id}</td>
                  <td>{item.surname}</td>
                  <td>{item.firstname}</td>
                  <td>{item.age}</td>
                  <td>{item.gender}</td>
                  <td>{item.level}</td>
                  <td>{item.state}</td>
                  <td>
                    <Button
                      loader={<Spinner className="h-[20px] w-[20px]" />}
                      loading={isLoading}
                      title="Download Result"
                      handleClick={() => handleDownload(item.id)}
                      className="w-[175px] h-[45px]"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
