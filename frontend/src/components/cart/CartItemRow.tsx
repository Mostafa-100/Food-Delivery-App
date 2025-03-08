import { CartItemProps } from "../../libs/types.ts";
import DeleteItemButton from "./DeleteItemButton.tsx";
import ItemImage from "./ItemImage.tsx";

type CartItemRowProps = {
  item: CartItemProps,
  func: CallableFunction,
}

function CartItemRow({ item, func }: CartItemRowProps) {
  return (
    <tr className="border-t border-slate-300 text-center" key={item.id}>
      <td className="p-2 flex justify-center">
        <ItemImage imagePath={item.imagePath} name={item.name} />
      </td>
      <td>{item.name}</td>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
      <td>${item.total}</td>
      <td>
        <DeleteItemButton func={func} id={item.id} />
      </td>
    </tr>
  );
}

export default CartItemRow;
