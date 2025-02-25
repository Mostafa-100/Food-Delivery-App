import { useDispatch, useSelector } from "react-redux";
import Overlay from "../../components/Overlay.tsx";
import { RootState } from "../../redux/store";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

import AuthForm from "../../components/auth/AuthForm.tsx";

import apiClient from "../../api/apiClient";
import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { setIsLoggedIn, setIsPageLoading } from "../../redux/auth";

function UserPagesContainer() {
  const { showLogin, showSignup } = useSelector(
    (state: RootState) => state.auth
  );

  const dispatch = useDispatch();

  useQuery(
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
      onSuccess: () => {
        dispatch(setIsLoggedIn(true));
        dispatch(setIsPageLoading(false));
      },
      onError: (error) => {
        // if (error instanceof AxiosError) {
        //   if (error.response?.status !== 401) {
        //     console.log(error);
        //   }
        // }
        dispatch(setIsPageLoading(false));
      },
    }
  );

  return (
    <>
      <Overlay open={showLogin || showSignup}>
        <Navbar />
        <Outlet />
      </Overlay>
      <AuthForm />
    </>
  );
}

export default UserPagesContainer;
