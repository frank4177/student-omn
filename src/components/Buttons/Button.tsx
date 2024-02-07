

interface IButtonProps {
  title: string;
  height?: string;
  width?: string;
  borderRadius?: string
  handleClick?: ()=> void
}

const Button = ({ title, height, width, handleClick }: IButtonProps) => {
  const btnTitle = title ? title : "Button";
  return (
    <button
      className={`bg-[#46C35F] rounded-[4px] ${height ? height : "h-[55px]"} ${
        width ? width : "w-[312px]"
      }   border-none text-white`}
      onClick={handleClick}
    >
      {btnTitle}
    </button>
  );
};

export default Button;
