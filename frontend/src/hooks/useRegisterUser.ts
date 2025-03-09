import { useMutation } from "react-query";
import apiClient from "../api/apiClient";

function useRegisterUser() {
  return useMutation(async (data: FormData) => {
    return await apiClient.post("/api/register", data);
  });
}

export default useRegisterUser;