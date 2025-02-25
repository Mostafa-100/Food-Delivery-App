import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Dish from "./Dish";
import apiClient from "../../api/apiClient";
import { useQuery } from "react-query";

import { DishProps } from "../../libs/types";
import { setDishes, setInitialDishes } from "../../redux/dish";

function TopDishesSection() {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  const { isDishesExists } = useSelector((state: RootState) => state.dish);
  const { dishes } = useSelector((state: RootState) => state.dish);
  const dispatch = useDispatch();

  useQuery(
    ["getDishes", isLoggedIn],
    async () => {
      const response = await apiClient.get("/api/dishes", {
        headers: {
          Authorization: "Bearer " + (localStorage.getItem('token') ?? "")
        }
      });
      return response.data;
    },
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        dispatch(setInitialDishes(data));
        dispatch(setDishes(data));
      },
      // onError: (error) => console.log(error),
    }
  );

  return (
    <div className="py-9">
      <div className="container mx-auto">
        <div>
          <h2 className="text-center md:text-left text-3xl font-medium text-slate-900 mb-4">
            Top dishes near you
          </h2>
          {isDishesExists ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dishes?.map((dish: DishProps) => (
                <Dish key={dish.id} {...dish} />
              ))}
            </div>
          ) : (
            <p className="text-center text-lg text-neutral-500">
              There is no dishes
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopDishesSection;
