import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import apiClient from "../api/apiClient";

function useGetCartItems() {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  const { data } = useQuery(
    ["cart-items", isLoggedIn],
    async function () {
      const response = await apiClient.get("/api/cart-items", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token')
        }
      });
      return response.data;
    },
  );

  return data;
}

export default useGetCartItems;