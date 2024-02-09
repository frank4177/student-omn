import { studentTableHead } from "../../../constants/table";
import Table from "../../Table/Table";
import { ALL_DATA, useFetchStudentData } from "../../../services/APIs/student";
import { useContext } from "react";
import { GlobalContext } from "../../../context/globalState";

const TableSection = () => {
  const {} = useFetchStudentData(ALL_DATA);
  const { state } = useContext(GlobalContext);

  return (
    <section className="mt-[4rem]">
      {state.isFetching ? (
        <div className="font-[500] text-[20px] mb-1">Fetching...</div>
      ) : (
        <Table
          studentTableData={state.students}
          studentTableHead={studentTableHead}
          isFetching={state.isFetching}
        />
      )}
    </section>
  );
};

export default TableSection;
