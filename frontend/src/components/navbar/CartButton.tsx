import { Link } from "react-router-dom";
import { FaBagShopping } from "react-icons/fa6";
import NumberOfItems from "./NumberOfItems";

function CartButton() {
  return (
    <Link to="/cart" className="flex items-end">
      <FaBagShopping className="text-2xl text-indigo-900 hover:text-indigo-950" />
      <NumberOfItems />
    </Link>
  );
}

export default CartButton;
