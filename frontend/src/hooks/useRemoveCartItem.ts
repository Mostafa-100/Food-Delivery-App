import { useMutation } from "react-query";
import apiClient from "../api/apiClient";

function useRemoveCartItem() {
  const mutation = useMutation(
    async (cartItemId: number) => {
      const response = await apiClient.delete(
        `/api/remove-cart-item/${cartItemId}`
        , {
          headers: {
            Authorization: "Bearer " + localStorage.getItem('token')
          }
        });
      return response.data;
    },
  );

  return mutation;
}

export default useRemoveCartItem;