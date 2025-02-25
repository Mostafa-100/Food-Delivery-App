import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaRegCircleCheck } from "react-icons/fa6";
import { PayButtonProps } from "../../libs/types";

function PayButton({ isLoading, isSuccess }: PayButtonProps) {
  return (
    <button
      className={`${
        isLoading
          ? "bg-neutral-500 pointer-events-none"
          : isSuccess
          ? "bg-green-600 pointer-events-none"
          : "bg-orange-600 hover:bg-orange-700"
      } transition-colors text-white text-sm py-2 px-5 rounded-sm flex items-center justify-center gap-x-1`}
    >
      {isLoading
        ? "PLEASE WAIT"
        : isSuccess
        ? "YOU CAN PAY NOW"
        : "PROCEED TO CHECKOUT"}
      {isLoading && (
        <AiOutlineLoading3Quarters className="animate-spin ease-linear text-sm" />
      )}
      {isSuccess && <FaRegCircleCheck className="text-sm" />}
    </button>
  );
}

export default PayButton;
