import { AiOutlineLoading3Quarters as LoadingIcon } from "react-icons/ai";
import OrderItem from "../order/order-item/OrderItem";

type OrderProps = {
  id: number;
  description: string;
  montant: number;
  numberOfItems: number;
  status: string;
};

type OrdersContainerProps = {
  orders: OrderProps[],
  isLoading: boolean;
}

function OrdersContainer({ orders, isLoading }: OrdersContainerProps) {
  return (
    <div>
      {isLoading ? (
        <LoadingIcon className="animate-spin text-xl text-neutral-600" />
      ) : orders?.length > 0 ? (
        orders?.map((order: OrderProps) => (
          <OrderItem key={order.id} {...order} />
        ))
      ) : (
        <div className="text-neutral-500 text-center text-lg">
          You dont have any order yet.
        </div>
      )}
    </div>
  )
}

export default OrdersContainer;