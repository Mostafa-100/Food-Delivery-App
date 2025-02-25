import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaRegCircleCheck } from "react-icons/fa6";

type ButtonProps = {
  label: string;
  isLoading?: boolean;
  isSuccess?: boolean;
  successLabel?: string;
};

function SubmitButton({
  label,
  isLoading,
  isSuccess,
  successLabel,
}: ButtonProps) {
  return (
    <button
      type="submit"
      className={`w-full flex items-center justify-center text-white py-2 rounded-lg transition-colors ${
        isLoading && "bg-neutral-500 pointer-events-none"
      }
        ${
          isSuccess
            ? "bg-green-500 pointer-events-none"
            : "bg-orange-600 hover:bg-orange-700"
        }
        `}
    >
      <span className="mr-1">
        {isLoading ? "Please wait" : isSuccess ? successLabel : label}
      </span>
      {isLoading && (
        <AiOutlineLoading3Quarters className="animate-spin ease-linear text-sm" />
      )}
      {isSuccess && <FaRegCircleCheck className="text-sm" />}
    </button>
  );
}

export default SubmitButton;
