import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { setDishes, setInitialDishes } from "../redux/dish";
import apiClient from "../api/apiClient";
import { RootState } from "../redux/store";

function useGetDishes() {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  return useQuery(
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
    }
  );
}

export default useGetDishes;