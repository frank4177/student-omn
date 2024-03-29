import { SelectOptionsType } from "../../../types";


interface ISelectProps{
  options: SelectOptionsType[]
  title: string
  name: string
  placeHolder: string
  handleSelect: (e:React.ChangeEvent<HTMLSelectElement>)=> void
}

const Select = ({options, title, name, handleSelect, placeHolder}: ISelectProps) => {
  return (
    <>
        <fieldset className="border-[2px] border-gray-300  rounded-[5px] max-w-[312px] h-[64px] w-full">
          <legend className="ml-2"><div className="mx-1 text-[14px]">{title}</div></legend>
            <select name={name} id="" className="w-full h-full p-1 border-none outline-none text-[#6b7074] bg-white" onChange={(e)=>handleSelect(e)}>
              <option value="" disabled selected hidden>{placeHolder}</option>
              {options.map((item)=>(
                <option value={item.value}  key={item.value}>{item.label}</option>
              ))}
            </select>
        </fieldset>
    </>
  );
};

export default Select;
