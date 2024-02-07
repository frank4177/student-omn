
import { studentTableHead } from "../../../constants/table";
import Table from "../../Table/Table";
import {
  ALL_DATA,
  useFetchStudentData,
} from "../../../services/APIs/student";
import { useContext } from "react";
import { GlobalContext } from "../../../context/globalState";

const TableSection = () => {
  const { } = useFetchStudentData(ALL_DATA);
  const { state } = useContext(GlobalContext);


  return (
    <section>
      {/* {isValidating ? "loading": null} */}
      <Table
        studentTableData={state.students}
        studentTableHead={studentTableHead}
      />
      {state?.students ===  undefined ? <div className="text-black text-2xl text-center">No Data Found</div>: null}
    </section>
  );
};

export default TableSection;
