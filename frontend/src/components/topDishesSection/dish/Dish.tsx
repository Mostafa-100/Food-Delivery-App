import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store.ts";

import { DishProps } from "../../../libs/types.ts";
import DishImage from "./DishImage.tsx";
import DishInfo from "./DishInfo.tsx";
import AddToCartPlace from "./AddToCartPlace.tsx";
import { useState } from "react";

function Dish(dish: DishProps) {

  const [cannotAddItem, setCannotAddItem] = useState(false);

  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  async function showAuthErrorIfUserNotLoggedIn() {
    if (!isLoggedIn) {
      setCannotAddItem(true);
      await new Promise((res) => setTimeout(res, 1000));
      setCannotAddItem(false);
    }
  }

  return (
    <div className="shadow-md px-2 md:px-0">
      <div className="relative overflow-hidden rounded-tl-2xl rounded-tr-2xl">
        <DishImage imagePath={dish.imagePath} />
        <AddToCartPlace {...dish} showAuthErrorIfUserNotLoggedIn={showAuthErrorIfUserNotLoggedIn} />
      </div>
      <DishInfo {...dish} showError={cannotAddItem} />
    </div>
  );
}

export default Dish;
