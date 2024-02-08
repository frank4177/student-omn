import React, { useState } from "react";
import Select from "../../Form/FormElements/Select";
import Button from "../../Buttons/Button";
import {
  ALL_AGES,
  ALL_LEVELS,
  ALL_STATES,
  ALL_GENDER,
  useFetchStudentData,
  useFilterStudents,
} from "../../../services/APIs/filter";

const FilterSection = () => {
  const { data: levels } = useFetchStudentData(ALL_LEVELS);
  const { data: ages } = useFetchStudentData(ALL_AGES);
  const { data: gender } = useFetchStudentData(ALL_GENDER);
  const { data: state } = useFetchStudentData(ALL_STATES);
  const { trigger: submitFilter } = useFilterStudents();
  const [errors, setErrors] = useState<boolean>(false);
  const [filterData, setFilterData] = useState<any>({
    age: "",
    state: "",
    level: "",
    gender: "",
  });

  // Options for Ages in Select component
  const AgeOptions =
    ages?.data.map((item: any) => {
      return { value: item?.age, label: item?.age };
    }) || [];

  // Options for State  in Select component
  const StateOptions =
    state?.data.map((item: any) => {
      return { value: item?.name, label: item?.name };
    }) || [];

  // Options for Levels  in Select component
  const LevelsOptions =
    levels?.data.map((item: any) => {
      return { value: item?.level, label: item?.level };
    }) || [];

  // Options for Gender  in Select component
  const GenderOptions =
    gender?.data.map((item: any) => {
      return { value: item?.gender, label: item?.gender };
    }) || [];


  // handle change for Select component
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const data = { ...filterData };
    data[e.target.name] = e.target.value;
    setFilterData(data);
    setErrors(false);
  };


  //Handle submit
  const handlesubmit = (e: any) => {
    e.preventDefault();

    // check if filterData state has at least one value
    const hasValue = Object.values(filterData).some(
      (value: any) => value !== ""
    );

    if (!hasValue) {
      setErrors(true);
    } else {
      submitFilter(filterData);
    }
  };

  return (
    <>
      <section className="bg-white p-5 py-10 space-y-7 min-h-[336px]">
        <h2 className="text-[25px] text-[#616161]">Filter Student Table By:</h2>

        <form
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-[40px] place-content-center"
          onSubmit={handlesubmit}
        >
          <Select
            title="Age"
            name="age"
            placeHolder="select age"
            options={AgeOptions}
            handleSelect={handleSelectChange}
          />
          <Select
            title="State"
            name="state"
            placeHolder="select state"
            options={StateOptions}
            handleSelect={handleSelectChange}
          />
          <Select
            title="Level"
            name="level"
            placeHolder="select level"
            options={LevelsOptions}
            handleSelect={handleSelectChange}
          />
          <Select
            title="Gender"
            name="gender"
            placeHolder="select gender"
            options={GenderOptions}
            handleSelect={handleSelectChange}
          />
          <Button
            title="Search"
            className="rounded-[4px] max-w-[312px] h-[57px]"
          />
        </form>
        <span className="text-red-500 text-[15px]">
          {errors ? "Please select at least one filter" : null}
        </span>
      </section>
    </>
  );
};

export default FilterSection;
