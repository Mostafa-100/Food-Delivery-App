import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store.ts";

import { DishProps } from "../../../libs/types.ts";
import DishImage from "./DishImage.tsx";
import DishInfo from "./DishInfo.tsx";
import AddToCartPlace from "./AddToCartPlace.tsx";

function Dish(dish: DishProps) {

  const { cannotAddItem } = useSelector((state: RootState) => state.cart);

  return (
    <div className="shadow-md px-2 md:px-0">
      <div className="relative overflow-hidden rounded-tl-2xl rounded-tr-2xl">
        <DishImage imagePath={dish.imagePath} />
        <AddToCartPlace {...dish} />
      </div>
      <DishInfo {...dish} showError={cannotAddItem} />
    </div>
  );
}

export default Dish;
