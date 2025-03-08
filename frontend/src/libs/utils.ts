import { CartItemProps } from "./types.ts";

export function calcCartTotal(cartItems: CartItemProps[]) {
  const SHIPPING_COST = 39;
  return (
    cartItems?.reduce(
      (acc: number, curr: CartItemProps) => curr.total + acc,
      0
    ) + SHIPPING_COST
  );
}