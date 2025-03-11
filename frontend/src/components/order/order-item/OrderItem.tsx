import OrderMontant from "./OrderMontant";
import OrderDescription from "./OrderDescription";
import OrderIcon from "./OrderIcon";
import OrderNumberOfItems from "./OrderNumberOfItems";
import OrderStatusIcon from "./OrderStatusIcon";
import OrderStatusMessage from "./OrderStatusMessage";
import TrackOrderButton from "./TrackOrderButton";

type OrderProps = {
  description: string;
  montant: number;
  numberOfItems: number;
  status: string;
};

function Order(order: OrderProps) {


  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-2 px-4 border border-neutral-400 mb-4">
      <OrderIcon />
      <OrderDescription description={order.description} />
      <OrderMontant montant={order.montant} />
      <OrderNumberOfItems numberOfItems={order.numberOfItems} />
      <OrderStatusIcon status={order.status} />
      <OrderStatusMessage status={order.status} />
      <TrackOrderButton />
    </div>
  );
}

export default Order;
