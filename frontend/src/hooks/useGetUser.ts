import { useQuery } from "react-query";
import apiClient from "../api/apiClient";
import { AxiosError } from "axios";

function useGetUser() {
  const response = useQuery(
    ["getUserFromApp"],
    async () => {
      const response = await apiClient.get("/api/user", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token')
        }
      });
      return response;
    },
    {
      retry: (failureCount, error) => {
        if (error instanceof AxiosError) {
          return error.response?.status === 401 ? false : true;
        }
        return true;
      },
    })

  return response;
}

export default useGetUser;