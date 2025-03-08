import { useMemo } from "react";

import CartInfo from "./CartInfo";
import PromoCodeInput from "./PromoCodeInput";
import useGetCartItems from "../../hooks/useGetCartItems";
import { calcCartTotal } from "../../libs/utils";
import CartItemsTableHeader from "./CartItemsTableHeader.tsx";
import CartItemsTableBody from "./CartItemsTableBody.tsx";

function FilledCart() {

  const cartItems = useGetCartItems();

  const calculateTotal = useMemo(() => calcCartTotal(cartItems), [cartItems]);

  return (
    <>
      <table className="w-full border-collapse border border-slate-300">
        <CartItemsTableHeader />
        <CartItemsTableBody />
      </table>
      <div className="mt-16 flex flex-col md:flex-row justify-center gap-12 md:gap-x-52">
        <div className="grow">
          <CartInfo total={calculateTotal.toFixed(2)} />
        </div>
        <div className="grow">
          <PromoCodeInput />
        </div>
      </div>
    </>
  );
}

export default FilledCart;
