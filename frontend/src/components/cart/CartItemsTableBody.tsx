import { useDispatch } from "react-redux";
import useGetCartItems from "../../hooks/useGetCartItems";
import { CartItemProps } from "../../libs/types";
import CartItemRow from "./CartItemRow";
import { useQueryClient } from "react-query";
import useRemoveCartItem from "../../hooks/useRemoveCartItem";
import { useEffect } from "react";
import { decrementNumOfItems } from "../../redux/cart";

function CartItemsTableBody() {

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

  return (
    <tbody>
      {cartItems?.map((item: CartItemProps) => (
        <CartItemRow key={item.id} item={item} func={removeCartItem} />
      ))}
    </tbody>
  )
}

export default CartItemsTableBody;