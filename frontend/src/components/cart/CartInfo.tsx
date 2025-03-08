import PayButton from "./PayButton";
import CartTotalCard from "./CartTotalCard";
import DeliveryFeeCard from "./DeliveryFeeCard";
import CartInfoHeader from "./CartInfoHeader";

function CartInfo({ total }: { total: string }) {
  return (
    <div>
      <CartInfoHeader />
      <hr />
      <DeliveryFeeCard />
      <hr />
      <CartTotalCard total={total} />
      <PayButton total={total} />
    </div>
  );
}

export default CartInfo;
