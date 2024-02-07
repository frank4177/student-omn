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
  const { trigger:submitFilter} = useFilterStudents();


  const [filterData, setFilterData] = useState<any>({data:{
    age: 0,
    state: "",
    level: "",
    gender: "",
  }});



  // Options for Ages select
  const AgeOptions =
    ages?.data.map((item: any) => {
      return { value: item?.age, label: item?.age, };
    }) || [];

  // Options for State select
  const StateOptions =
    state?.data.map((item: any) => {
      return { value: item?.name, label: item?.name,  };
    }) || [];

  // Options for Levels select
  const LevelsOptions =
    levels?.data.map((item: any) => {
      return { value: item?.level, label: item?.level,  };
    }) || [];

  // Options for Gender select
  const GenderOptions =
    gender?.data.map((item: any) => {
      return { value: item?.gender, label: item?.gender,  };
    }) || [];

    // handle change for Select component
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const data = { ...filterData.data };
    data[e.target.name] = e.target.value;
    setFilterData(data);
  };


  //handle filter submit
  const handlesubmit = (e: any)=>{
    e.preventDefault()
  submitFilter(filterData)
  }

  return (
    <>
      <section className="bg-white p-5 py-10 space-y-7">
        <h2 className="text-[25px]">Filter Student Table By:</h2>
        <form className="grid lg:grid-cols-3 md:grid-cols-2 gap-[30px] place-content-center" onSubmit={handlesubmit}>
          <Select
            title="Age"
            name="age"
            placeHolder= "select age"
            options={AgeOptions}
            handleSelect={handleSelectChange}
          />
          <Select
            title="State"
            name="state"
            placeHolder= "select state"
            options={StateOptions}
            handleSelect={handleSelectChange}
          />
          <Select
            title="Level"
            name="level"
            placeHolder= "select level"
            options={LevelsOptions}
            handleSelect={handleSelectChange}
          />
          <Select
            title="Gender"
            name="gender"
            placeHolder = "select gender"
            options={GenderOptions}
            handleSelect={handleSelectChange}
          />
          <Button title="Search" />
        </form>
      </section>
    </>
  );
};

export default FilterSection;
