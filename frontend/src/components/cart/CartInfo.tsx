import { Link } from "react-router-dom";

function CartInfo({ total }) {
  return (
    <div>
      <div className="font-bold text-xl">Cart Totals</div>
      <hr />
      <div className="flex justify-between py-2">
        <span className="text-neutral-500">Delivery Fee</span>
        <span className="text-neutral-500">$39</span>
      </div>
      <hr />
      <div className="flex justify-between py-2">
        <span className="text-neutral-500 font-semibold">Total</span>
        <span className="text-neutral-500">${total}</span>
      </div>
      <Link
        to="/order"
        state={{ total: total }}
        className="bg-orange-600 hover:bg-orange-700 text-nowrap transition-colors text-white text-sm py-2 px-5 rounded-sm"
      >
        PROCEED TO CHECKOUT
      </Link>
    </div>
  );
}

export default CartInfo;
