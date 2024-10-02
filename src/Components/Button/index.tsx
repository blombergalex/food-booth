import { ButtonType } from "@/utils/types";

const Button = ({ buttonText, onClick }: ButtonType) => {
  return (
    <button
      className="bg-white p-1 border border-1 rounded-md font-semibold text-zinc-900 hover:bg-zinc-900 hover:text-white w-fit h-fit"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
