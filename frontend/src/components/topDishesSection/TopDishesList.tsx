import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { DishProps } from "../../libs/types.ts";
import Dish from "./Dish";

function TopDishesList() {
  const { dishes } = useSelector((state: RootState) => state.dish);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {dishes?.map((dish: DishProps) => (
        <Dish key={dish.id} {...dish} />
      ))}
    </div>
  )
}

export default TopDishesList;