import { useMutation } from "react-query";
import apiClient from "../api/apiClient";
import { useState } from "react";

function useRegisterUser() {
  const [errors, setErrors] = useState([])

  const mutation = useMutation(async (data: FormData) => {
    return await apiClient.post("/api/register", data);
  }, {
    onSuccess: () => setErrors([]),
    onError: (error) => {
      if (error?.response.status == 422) {
        setErrors(error.response.data.errors);
      }
    }
  });

  return { mutation, errors };
}

export default useRegisterUser;