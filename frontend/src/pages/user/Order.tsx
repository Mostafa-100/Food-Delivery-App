import { Navigate, useLocation } from "react-router-dom";

import apiClient from "../../api/apiClient";

import { useMutation } from "react-query";

import OrderInput from "../../components/order/OrderInput";
import CartTotals from "../../components/order/CartTotals";
import InputsContainer from "../../components/order/InputsContainer";
import OrderHeader from "../../components/order/OrderHeader";

function Order() {
  const { state } = useLocation();

  const mutation = useMutation(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      const response = await apiClient.post("/api/orders", formData, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token')
        }
      });
      return response.data;
    },
    {
      onSuccess: (data) => (window.location.href = data.url),
      onError: (error) => console.log(error),
    }
  );

  if (state == null) {
    return <Navigate to="/" />;
  }

  const { total } = state;

  return (
    <div className="container mx-auto mt-12 px-2 py-3">
      <form
        className="flex flex-col md:flex-row gap-y-10 justify-between"
        onSubmit={(e) => mutation.mutate(e)}
      >
        <div className="grow md:grow-0 md:w-1/2">
          <OrderHeader />
          <div className="flex gap-3 flex-col">
            <InputsContainer>
              <OrderInput
                name="firstName"
                placeholder="First name"
                className="md:w-1/2"
              />
              <OrderInput
                name="lastName"
                placeholder="Last name"
                className="md:w-1/2"
              />
            </InputsContainer>

            <OrderInput type="email" name="email" placeholder="Email addres" />
            <OrderInput name="street" placeholder="Street" />

            <InputsContainer>
              <OrderInput name="city" placeholder="City" className="md:w-1/2" />
              <OrderInput
                name="state"
                placeholder="State"
                className="md:w-1/2"
              />
            </InputsContainer>

            <InputsContainer>
              <OrderInput
                name="zipCode"
                placeholder="Zip code"
                className="md:w-1/2"
              />
              <OrderInput
                name="country"
                placeholder="Country"
                className="md:w-1/2"
              />
            </InputsContainer>

            <OrderInput type="phone" name="phone" placeholder="Phone" />
          </div>
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
