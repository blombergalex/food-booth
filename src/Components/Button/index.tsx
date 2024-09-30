import { ButtonType } from "@/utils/types";

const Button = ({ buttonText, onClick }: ButtonType) => {
  return (
    <button
      className="bg-white p-1 border border-1 rounded-md font-semibold text-green-500 hover:bg-green-500 hover:text-white"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
