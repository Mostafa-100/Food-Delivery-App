import { useMutation } from "react-query";
import apiClient from "../api/apiClient";

function usePostOrder() {
  const mutation = useMutation(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      const response = await apiClient.post("/api/orders", formData, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token')
        }
      });
      return response.data;
    },
  );

  return mutation;
}

export default usePostOrder;