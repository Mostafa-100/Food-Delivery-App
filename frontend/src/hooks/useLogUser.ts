import { useMutation } from "react-query";
import apiClient from "../api/apiClient";
import { useDispatch } from "react-redux";
import { setIsLoggedIn, setShowLogin, setShowSignup } from "../redux/auth";
import { useState } from "react";

function useLogUser() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([])
  const [userNotExistError, setUserNotExistError] = useState([]);

  const mutation = useMutation(async (data: FormData) => {
    return await apiClient.post("/api/login", data);
  }, {
    onSuccess: (response) => {
      localStorage.setItem("token", response.data?.token);
      dispatch(setIsLoggedIn(true));
      dispatch(setShowLogin(false));
      dispatch(setShowSignup(false));

      setErrors([]);
      setUserNotExistError([]);
    },
    onError: (error) => {
      if (error?.response.status == 422) {
        setErrors(error.response.data.errors);
        setUserNotExistError([]);
      } else if (error?.response.status == 401) {
        setErrors([]);
        setUserNotExistError(error?.response.data.email);
      }
    }
  })

  return { mutation, errors, userNotExistError };
}

export default useLogUser;