import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import useGetDishes from "../../hooks/useGetDishes.ts";
import TopDishesList from "./TopDishesList.tsx";
import DishesEmptyMessage from "./DishesEmptyMessage.tsx";
import TopDishesSectionHeader from "./TopDishesSectionHeader.tsx";

function TopDishesSection() {
  const { isDishesExists } = useSelector((state: RootState) => state.dish);

  useGetDishes();

  return (
    <div className="py-9">
      <div className="container mx-auto">
        <div>
          <TopDishesSectionHeader />
          {isDishesExists ? (<TopDishesList />) : (<DishesEmptyMessage />)}
        </div>
      </div>
    </div>
  );
}

export default TopDishesSection;
