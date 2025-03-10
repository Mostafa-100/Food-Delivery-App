import { useMutation } from "react-query";
import apiClient from "../api/apiClient";

function useAddToCart() {
  return useMutation(async (dishId: number) => {
    return await apiClient.post("/api/add-to-cart", { dishId: dishId }, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    })
  });
}

export default useAddToCart;