import Footer from "../../components/Footer";

import useGetOrders from "../../hooks/useGetOrders";
import OrdersContainer from "../../components/orders-page/OrdersContainer";

function Orders() {

  const { orders, isLoading } = useGetOrders();

  return (
    <>
      <div className="container mx-auto py-5 px-2 h-[calc(100vh-76px)]">
        <div>
          <h2 className="text-2xl mb-6">My Orders</h2>
          <OrdersContainer orders={orders} isLoading={isLoading} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Orders;
