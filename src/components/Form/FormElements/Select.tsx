import { SelectOptionsType } from "../../../types";

interface ISelectProps{
  options: SelectOptionsType[]
  title: string
  name: string
  handleSelect: (e:React.ChangeEvent<HTMLSelectElement>)=> void
}

const Select = ({options, title, name, handleSelect}: ISelectProps) => {
  return (
    <>
      <div>
        <fieldset className="border-[2px] border-gray-300  rounded-[4px] w-[312px]">
          <legend className="ml-2"><div className="mx-1 text-[14px]">{title}</div></legend>
            <select name={name} id="" className="w-full p-1 border-none outline-none" onChange={(e)=>handleSelect(e)}>
              <option value=""></option>
              {options.map((item)=>(
                <option value={item.value} key={item.value}>{item.label}</option>
              ))}
            </select>
        </fieldset>
      </div>
    </>
  );
};

export default Select;
