
import FilterSection from "./components/sections/Home/FilterSection";
import TableSection from "./components/sections/Home/TableSection";
import CenterContainer from "./container/centerContainer";

const App = () => {
  return (
    <>
      <div className="bg-bg-greyBackground min-h-[100vh]">
        <CenterContainer>
          <h2 className="font-bold text-[40px]">Student Data Table</h2>
          <FilterSection />
          <TableSection />
        </CenterContainer>
      </div>
    </>
  );
};

export default App;
