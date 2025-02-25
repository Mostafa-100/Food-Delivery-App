import { useState, useMemo } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { decrementNumOfItems } from "../../redux/cart";

import { useMutation, useQuery } from "react-query";

import CartItemRow from "./CartItemRow";
import CartInfo from "./CartInfo";
import PromoCodeInput from "./PromoCodeInput";
import apiClient from "../../api/apiClient";

type CartItemProps = {
  id: number;
  imagePath: string;
  name: string;
  numberOfStars: number;
  snippet: string;
  price: number;
  quantity: number;
  total: number;
};

function FilledCart() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  const [cartItems, setCartItems] = useState([]);

  useQuery(
    ["cart-items", isLoggedIn],
    async function () {
      const response = await apiClient.get("/api/cart-items", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token')
        }
      });
      return response.data;
    },
    {
      onSuccess: (data) => {
        setCartItems(data)
      },
      onError: (error) => console.error(error),
    }
  );

  const mutation = useMutation(
    async (cartItemId: number) => {
      const response = await apiClient.delete(
        `/api/remove-cart-item/${cartItemId}`
        , {
          headers: {
            Authorization: "Bearer " + localStorage.getItem('token')
          }
        });
      return response.data;
    },
    {
      onSuccess: (data) => {
        dispatch(decrementNumOfItems());
        setCartItems(data);
      },
      onError: (error) => console.log(error),
    }
  );

  async function removeCartItem(id: number) {
    mutation.mutate(id);
  }

  const calculateTotal = useMemo(() => {
    const SHIPPING_COST = 39;
    return (
      cartItems?.reduce(
        (acc: number, curr: CartItemProps) => curr.total + acc,
        0
      ) + SHIPPING_COST
    );
  }, [cartItems]);

  return (
    <>
      <table className="w-full border-collapse border border-slate-300">
        <thead>
          <tr>
            <th className="py-3 text-slate-500">Items</th>
            <th className="py-3 text-slate-500">Title</th>
            <th className="py-3 text-slate-500">Price</th>
            <th className="py-3 text-slate-500">Quantity</th>
            <th className="py-3 text-slate-500">Total</th>
            <th className="py-3 text-slate-500">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems?.map((item: CartItemProps) => (
            <CartItemRow key={item.id} item={item} func={removeCartItem} />
          ))}
        </tbody>
      </table>
      <div className="mt-16 flex flex-col md:flex-row justify-center gap-12 md:gap-x-52">
        <div className="grow">
          <CartInfo total={calculateTotal.toFixed(2)} />
        </div>
        <div className="grow">
          <PromoCodeInput />
        </div>
      </div>
    </>
  );
}

export default FilledCart;
