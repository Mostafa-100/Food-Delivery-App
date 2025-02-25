import PayButton from "./PayButton";
import { PayButtonProps } from "../../libs/types";

type CartTotalsProps = PayButtonProps & { total: number };

function CartTotals({ isLoading, isSuccess, total }: CartTotalsProps) {
  return (
    <div>
      <div className="font-bold text-xl">Cart Totals</div>
      <hr />
      <div className="flex justify-between py-2">
        <span className="text-neutral-500">Delivery Fee</span>
        <span className="text-neutral-500">39$</span>
      </div>
      <hr />
      <div className="flex justify-between py-2">
        <span className="text-neutral-500 font-semibold">Total</span>
        <span className="text-neutral-500">{total}</span>
      </div>
      <PayButton isLoading={isLoading} isSuccess={isSuccess} />
    </div>
  );
}

export default CartTotals;
