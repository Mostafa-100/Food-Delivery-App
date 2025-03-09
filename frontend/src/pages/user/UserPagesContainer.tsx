import { useDispatch, useSelector } from "react-redux";
import Overlay from "../../components/Overlay.tsx";
import { RootState } from "../../redux/store";
import { Outlet } from "react-router-dom";

import AuthForm from "../../components/auth/AuthForm.tsx";

import { setIsLoggedIn, setIsPageLoading } from "../../redux/auth";
import useGetUser from "../../hooks/useGetUser.ts";
import { useEffect } from "react";
import Navbar from "../../layouts/navbar/Navbar.tsx";

function UserPagesContainer() {
  const { showLogin, showSignup } = useSelector(
    (state: RootState) => state.auth
  );

  const dispatch = useDispatch();

  const getUserResponse = useGetUser();

  useEffect(() => {
    if (getUserResponse.isSuccess) {
      dispatch(setIsLoggedIn(true));
      dispatch(setIsPageLoading(false));
    }

    if (getUserResponse.isError) {
      dispatch(setIsPageLoading(false));
    }
  }, [getUserResponse.isFetched])

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
