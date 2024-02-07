
import { studentTableHead } from "../../../constants/table";
import Table from "../../Table/Table";
import {
  ALL_DATA,
  useFetchStudentData,
} from "../../../services/APIs/student";
import { useContext } from "react";
import { GlobalContext } from "../../../context/globalState";

const TableSection = () => {
  const {  } = useFetchStudentData(ALL_DATA);
  const { state } = useContext(GlobalContext);


 

  return (
    <section>
      <Table
        studentTableData={state.students}
        studentTableHead={studentTableHead}
      />
    </section>
  );
};

export default TableSection;
