import { useMutation } from "react-query";
import apiClient from "../api/apiClient";
import { useDispatch } from "react-redux";
import { setIsLoggedIn, setShowLogin, setShowSignup } from "../redux/auth";

function useLogUser() {
  const dispatch = useDispatch();
  return useMutation(async (data: FormData) => {
    return await apiClient.post("/api/login", data);
  }, {
    onSuccess: (response) => {
      localStorage.setItem("token", response.data?.token);
      dispatch(setIsLoggedIn(true));
      dispatch(setShowLogin(false));
      dispatch(setShowSignup(false));
    },
    onError: (error) => console.log(error),
  });
}

export default useLogUser;