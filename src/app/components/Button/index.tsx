import { ButtonType } from "@/utils/types";

const Button = ({ buttonText, onClick }: ButtonType) => {
  return (
    <button
      className="bg-white p-1 border border-1 m-1 border-orange-700 rounded-md text-orange-700 min-w-[80px] h-fit outline-none hover:bg-orange-700 hover:text-white transition-all"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
