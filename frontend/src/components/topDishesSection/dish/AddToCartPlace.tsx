import { useEffect, useState } from "react";
import AddToCartButton from "./AddToCartButton";
import DishCounter from "./DishCounter";
import { incrementNumOfItems, setCannotAddItem } from "../../../redux/cart";
import useAddToCart from "../../../hooks/useAddToCart";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

type AddToCartPlaceProps = {
  id: number;
  inCart: boolean;
  quantity?: number;
}

function AddToCartPlace({ inCart, id, quantity }: AddToCartPlaceProps) {

  const [showItemCounter, setShowItemCounter] = useState(false);

  const [canAddCart, setCanAddCart] = useState(true);

  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  const mutation = useAddToCart();

  useEffect(() => {
    if (mutation.isSuccess) {
      dispatch(incrementNumOfItems());
      setShowItemCounter(true);
    }

    if (mutation.isError) {
      setCanAddCart(true)
    }
  }, [mutation.isSuccess, mutation.isError])

  async function addToCart(id: number) {
    if (!isLoggedIn) {
      dispatch(setCannotAddItem(true));
      await new Promise((res) => setTimeout(res, 1000));
      dispatch(setCannotAddItem(false));
      return;
    }

    if (!canAddCart) {
      return
    };

    setCanAddCart(false);

    mutation.mutate(id);
  }

  return (
    <div className="absolute right-4 bottom-4">
      {showItemCounter || inCart ?
        (<DishCounter id={id} numberOfItem={quantity} />)
        : (<AddToCartButton onClick={() => addToCart(id)} />)}
    </div>
  )
}

export default AddToCartPlace;