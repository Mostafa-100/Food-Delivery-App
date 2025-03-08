import { Link } from "react-router-dom";

function PayButton({ total }: { total: string }) {
  return (
    <Link
      to="/order"
      state={{ total: total }}
      className="bg-orange-600 hover:bg-orange-700 text-nowrap transition-colors text-white text-sm py-2 px-5 rounded-sm"
    >
      PROCEED TO CHECKOUT
    </Link>
  )
}

export default PayButton;