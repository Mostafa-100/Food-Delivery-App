import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { incrementNumOfItems } from "../../redux/cart";

import { useState } from "react";

import apiClient from "../../api/apiClient";
import Stars from "./Stars";
import DishCounter from "./DishCounter";
import AddToCartButton from "./AddToCartButton";

import { DishProps } from "../../libs/types";

function Dish(props: DishProps) {
  const [showItemCounter, setShowItemCounter] = useState(false);
  const [cannotAddItem, setCannotAddItem] = useState(false);

  const [canAddCart, setCanAddCart] = useState(true);

  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  async function addToCart(id: number) {
    if (!isLoggedIn) {
      setCannotAddItem(true);
      await new Promise((res) => setTimeout(res, 1000));
      setCannotAddItem(false);
      return;
    }

    if (!canAddCart) { console.log("heey"); return };

    setCanAddCart(false);

    try {
      await apiClient.post("/api/add-to-cart", { dishId: id }, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token')
        }
      });

      dispatch(incrementNumOfItems());
      setShowItemCounter(true);
    } catch (error) {
      setCanAddCart(true);
    }
  }

  return (
    <div className="shadow-md px-2 md:px-0">
      <div className="relative overflow-hidden rounded-tl-2xl rounded-tr-2xl">
        <img
          src={props.imagePath}
          className="h-64 w-full object-cover rounded-tl-2xl rounded-tr-2xl hover:scale-125 hover:rotate-6 transition-all ease-linear"
        />
        <div className="absolute right-4 bottom-4">
          {showItemCounter || props.inCart ?
            (<DishCounter id={props.id} numberOfItem={props?.quantity} />)
            : (<AddToCartButton onClick={() => addToCart(props.id)} />)}
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between">
          <h3 className="text-xl text-slate-900 font-medium">{props.name}</h3>
          <Stars numberOfStars={props.numberOfStars} />
        </div>
        <div className="text-sm text-slate-500">{props.snippet}</div>
        <div className="text-orange-500 text-2xl font-medium">
          ${props.price}
        </div>
        <div
          className={`${cannotAddItem ? "block" : "hidden"
            } text-center text-red-500`}
        >
          You must login first
        </div>
      </div>
    </div>
  );
}

export default Dish;
