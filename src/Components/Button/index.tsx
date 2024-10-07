import { ButtonType } from "@/utils/types";

const Button = ({ buttonText, onClick }: ButtonType) => {
  return (
    <button
      className="bg-white p-1 border border-1 m-1 border-zinc-900 rounded-md font-semibold text-zinc-900 hover:bg-zinc-900 hover:text-white min-w-[80px] h-fit"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
