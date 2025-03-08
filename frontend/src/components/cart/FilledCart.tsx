import { useEffect, useMemo } from "react";

import { useDispatch } from "react-redux";
import { decrementNumOfItems } from "../../redux/cart";

import { useQueryClient } from "react-query";

import CartItemRow from "./CartItemRow";
import CartInfo from "./CartInfo";
import PromoCodeInput from "./PromoCodeInput";
import useGetCartItems from "../../hooks/useGetCartItems";
import useRemoveCartItem from "../../hooks/useRemoveCartItem";
import { CartItemProps } from "../../libs/types.ts";
import { calcCartTotal } from "../../libs/utils";

function FilledCart() {

  const cartItems = useGetCartItems();

  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const mutation = useRemoveCartItem();

  useEffect(() => {
    if (mutation.isSuccess) {
      dispatch(decrementNumOfItems());
      queryClient.invalidateQueries("cart-items");
    }

    if (mutation.isError) {
      console.log(mutation.error);
    }
  }, [mutation.isSuccess, mutation.isError]);


  async function removeCartItem(id: number) {
    mutation.mutate(id);
  }

  const calculateTotal = useMemo(() => calcCartTotal(cartItems), [cartItems]);

  return (
    <>
      <table className="w-full border-collapse border border-slate-300">
        <thead>
          <tr>
            <th className="py-3 text-slate-500">Items</th>
            <th className="py-3 text-slate-500">Title</th>
            <th className="py-3 text-slate-500">Price</th>
            <th className="py-3 text-slate-500">Quantity</th>
            <th className="py-3 text-slate-500">Total</th>
            <th className="py-3 text-slate-500">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems?.map((item: CartItemProps) => (
            <CartItemRow key={item.id} item={item} func={removeCartItem} />
          ))}
        </tbody>
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
