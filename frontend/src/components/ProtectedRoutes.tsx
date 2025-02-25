import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes({ condition = true }) {
  const { isLoggedIn, isPageLoading } = useSelector(
    (state: RootState) => state.auth
  );

  if (isPageLoading) {
    return;
  }

  return isLoggedIn && condition ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoutes;
