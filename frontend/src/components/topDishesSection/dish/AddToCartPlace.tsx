import { useEffect, useState } from "react";
import AddToCartButton from "./AddToCartButton";
import DishCounter from "./DishCounter";
import { incrementNumOfItems } from "../../../redux/cart";
import useAddToCart from "../../../hooks/useAddToCart";
import { useDispatch } from "react-redux";

type AddToCartPlaceProps = {
  id: number;
  inCart: boolean;
  quantity?: number;
  showAuthErrorIfUserNotLoggedIn: () => Promise<void>;
}

function AddToCartPlace({ inCart, id, quantity, showAuthErrorIfUserNotLoggedIn }: AddToCartPlaceProps) {

  const [showItemCounter, setShowItemCounter] = useState(false);
  const [canAddCart, setCanAddCart] = useState(true);

  const dispatch = useDispatch();

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

    showAuthErrorIfUserNotLoggedIn()

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
        : (<AddToCartButton onClick={() => { addToCart(id) }} />)}
    </div>
  )
}

export default AddToCartPlace;