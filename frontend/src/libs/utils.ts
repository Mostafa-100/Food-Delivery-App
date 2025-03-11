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

export function getStatucColor(status: string) {
  switch (status) {
    case "food processing":
      return "bg-neutral-500";
      break;
    case "delivered":
      return "bg-green-500";
      break;
    case "out for delivery":
      return "bg-blue-500";
      break;
  }
}