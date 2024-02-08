interface IButtonProps {
  title: string;
  height?: string;
  width?: string;
  borderRadius?: string;
  handleClick?: () => void;
  className?: string;
  loader?: JSX.Element;
  loading?: boolean;
}

const Button = ({
  title,
  handleClick,
  className,
  loader,
  loading,
}: IButtonProps) => {
  const btnTitle = title ? title : "Button";
  return (
    <button
      className={`bg-[#46C35F] flex flex-row items-center justify-center gap-2 ${className} border-none text-white`}
      onClick={handleClick}
    >
      {btnTitle}
      {loading ? <span>{loader}</span> : null}
    </button>
  );
};

export default Button;
