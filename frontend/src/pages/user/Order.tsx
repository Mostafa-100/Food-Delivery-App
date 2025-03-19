import { Navigate } from "react-router-dom";

import CartTotals from "../../components/order/CartTotals";
import OrderHeader from "../../components/order/OrderHeader";
import usePostOrder from "../../hooks/usePostOrder";
import OrderForm from "../../components/order/OrderForm";
import useGetCartTotalState from "../../hooks/useGetCartTotalState";

function Order() {

  const total = useGetCartTotalState();
  const mutation = usePostOrder();

  if (!total) return <Navigate to="/" />

  if (mutation.isSuccess) {
    window.location.href = mutation.data.url;
  }

  if (mutation.isError) {
    console.log(mutation.error);
  }

  return (
    <div className="container mx-auto mt-12 px-2 py-3">
      <form
        className="flex flex-col md:flex-row gap-y-10 justify-between"
        onSubmit={(e) => mutation.mutate(e)}
      >
        <div className="grow md:grow-0 md:w-1/2">
          <OrderHeader />
          <OrderForm />
        </div>
        <div className="w-full max-w-64">
          <CartTotals
            isLoading={mutation.isLoading}
            isSuccess={mutation.isSuccess}
            total={total}
          />
        </div>
      </form>
    </div>
  );
}

export default Order;
